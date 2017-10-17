require 'rails_helper'

feature "visitor sees an index page" do
  scenario "can see the page" do
    visit sandwiches_path
    expect(page).to have_content "Is that a sandwich?"
  end
  # scenario "sees a list of sandwiches and link for new sandwich" do
  #   ham_and_cheese = Sandwich.create( sandwich_name: 'Ham and Cheese')
  #   hamburger = Sandwich.create( sandwich_name: 'Hamburger' )
  #
  #   visit sandwiches_path
  #
  #   expect(page).to have_content "Ham and Cheese"
  #   expect(page).to have_content "Hamburger"
  #
  #   click_link  "Add New Sandwich"
  #
  #   expect(page).to have_content "New Sandwich Form"
  # end

end
