require 'rails_helper'

feature "visitor wants to add a new review" do

	# scenario "sees link to add new sandwich" do
	# 	visit '/sandwiches/1'
	# 	expect(page).to have_content "Add Sandwich"
	# end
	#
	scenario "clicks link and is taken to new sandwich form" do
		visit '/sandwiches/1'
		click_link "Add Sandwich"
		expect(page).to have_content "new sandwich form"
	end

	scenario "user sees new review form fields" do
		visit new_sandwich_review_path
		fill_in "Rating", with: 5
		fill_in "Body", with: "This is a test review."
		click_button "Create Review"
		expect(page).to have_content "Review added successfully!"
	end

	scenario "user doesn't fill out any fields" do
		visit new_sandwich_review_path
		click_button "Create Review"
		expect(page).to have_content "Rating can't be blank"
		expect(page).to have_content "Body can't be blank"
	end
end
