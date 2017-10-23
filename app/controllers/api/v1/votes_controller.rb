class Api::V1::VotesController < ApplicationController
  protect_from_forgery prepend: true
  # before_action :authenticate_user!, except: [ :index ]

  def up
    render(json: { status: :ok, message: "received an upvote for #{params[:reviewId]}" })
  end

  def down
  end

  def review_vote_count
  end

  def user_vote_count
  end

  private

  def vote_params
    params[:vote].permit(:reviewId)
  end

end
