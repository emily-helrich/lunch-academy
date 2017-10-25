class SandwichesController < ApplicationController
	def new
		@sandwich = Sandwich.new()
	end

	def create
		@sandwich = Sandwich.new(sandwich_params)
		if @sandwich.save
			flash[:notice] = "Sandwich added successfully!"
			redirect_to root_path
		else
			render :new
		end
	end
	
	def show
	end
	
	private 
	
	def sandwich_params
		params.require(:sandwich).permit(
			:name,
			:description,
			:image_url
		)
	end
end