class ReviewsController < ApplicationController
	def index
	end

	def new
		@sandwich = Sandwich.find(params[:sandwich_id])
    @user = current_user
    @review = @sandwich.reviews.new
	end

	def create
		@review = Review.new(review_params)
    @sandwich = Sandwich.find(params[:sandwich_id])
    @review.sandwich = @sandwich
    @user = current_user
    @review.user = @user
		if @review.save
			flash[:notice] = "Review added successfully!"

			UserMailer.new_review_email(@sandwich, @reivew).deliver_later

			redirect_to root_path
		else
			render :new
		end
	end

	private

	def review_params
		params.require(:review).permit(
			:rating,
			:body
		)
	end
end
