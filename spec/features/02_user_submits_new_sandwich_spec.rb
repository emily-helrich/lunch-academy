require 'rails_helper'

feature "visitor wants to add a new sandwich" do
	scenario "sees link to add new sandwich" do
		visit root_path
		expect(page).to have_content "Add Sandwich"
	end	

	scenario "clicks link and is taken to new sandwich form" do
		visit root_path
		click_link "Add Sandwich"
		expect(page).to have_content "new sandwich form"
	end

	scenario "user sees new sandwich form fields" do
		visit new_sandwich_path
		fill_in "Name", with: "Rake Sandwich"
		fill_in "Description", with: "Tastes like unit tests"
		fill_in "Image url", with: "https://i.imgur.com/Epv7i4V.png"
		click_button "Create Sandwich"
		expect(page).to have_content "Sandwich added successfully!"
	end

	scenario "user doesn't fill out any fields" do
		visit new_sandwich_path
		click_button "Create Sandwich"
		expect(page).to have_content "Name can't be blank"
		expect(page).to have_content "Description can't be blank"
		expect(page).to have_content "Image url can't be blank"
	end
end