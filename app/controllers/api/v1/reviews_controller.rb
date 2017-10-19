class Api::V1::ReviewsController < ApplicationController
  def index
    render json: Sandwich.find(params[:sandwich_id]).reviews
  end
  def show
    render json: Sandwich.find(params[:id])
  end
end
