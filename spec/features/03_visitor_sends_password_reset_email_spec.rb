require 'rails_helper'

class ResetPasswordTest < ActionDispatch::IntegrationTest
  setup do
    @user = users(:example)
  end

  test "reset user's password" do
    # store old encrypted password
    old_password = @user.encrypted_password

    # check to ensure mailer sends reset password email
    assert_difference('ActionMailer::Base.deliveries.count', 1) do
      post user_password_path, user: {email: @user.email}
      assert_redirected_to new_user_session_path
    end

    # Get the email, and get the reset password token from it
    message = ActionMailer::Base.deliveries[0].to_s
    rpt_index = message.index("reset_password_token")+"reset_password_token".length+1
    reset_password_token = message[rpt_index...message.index("\"", rpt_index)]

    # reload the user and ensure user.reset_password_token is present
    # NOTE: user.reset_password_token and the token pulled from the email
    # are DIFFERENT
    @user.reload
    assert_not_nil @user.reset_password_token

    # Ensure that a bad token won't reset the password
    put "/users/password", user: {
      reset_password_token: "bad reset token",
      password: "new-password",
      password_confirmation: "new-password",
    }

    assert_match "error", response.body
    assert_equal @user.encrypted_password, old_password

    # Valid password update
    put "/users/password", user: {
      reset_password_token: reset_password_token,
      password: "new-password",
      password_confirmation: "new-password",
    }

    # After password update, signed in and redirected to root path
    assert_redirected_to root_path

    # Reload user and ensure that the password is updated.
    @user.reload
    assert_not_equal(@user.encrypted_password, old_password)
  end

end
