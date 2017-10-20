class Api::V1::ReviewsController < ApplicationController
  def index
    sandwich = Sandwich.find(params[:sandwich_id])
    render json: sandwich.reviews
  end
  def show
    render json: Sandwich.find(params[:id])
  end
end
