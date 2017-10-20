class ReviewsController < ApplicationController

  def index
  end

	def new
		@review = Review.new()
	end

	def create
    @sandwich = Restaurant.find(params[:sandwich_id])
        @review = Review.new(review_params)
        @review.sandwich = @sandwich
        if @review.save
          flash[:notice] = "Review added successfully"
          # redirect_to sandwich_path(@sandwich)
          redirect_to root_path
        else
          render :new
        end
	end

	private

	def review_params
		params.require(:review).permit(
      :sandwich_id,
			:rating,
			:body
		)
	end
end
