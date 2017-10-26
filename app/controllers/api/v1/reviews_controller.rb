class Api::V1::ReviewsController < ApplicationController
  def index
    sandwich = Sandwich.find(params[:sandwich_id])
    render json: sandwich.reviews_by_vote_count
  end
end
