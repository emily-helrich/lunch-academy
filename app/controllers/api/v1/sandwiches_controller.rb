class Api::V1::SandwichesController < ApplicationController
  def index
    render json: Sandwich.all
  end
  def show
    render json: Sandwich.find(params[:id])
  end
end
