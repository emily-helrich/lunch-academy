require 'rails_helper'

feature "visitor sees an index page" do
  scenario "can see the page" do
    visit root_path
    expect(page).to have_content "Sign up"
  end
end
