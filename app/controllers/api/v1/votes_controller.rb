class Api::V1::VotesController < ApplicationController
  protect_from_forgery prepend: true

  before_action :authenticate_user_api, only: [:up, :down]

  def up
    upvoteData = { user_id: current_user.id,
                   review_id: vote_params[:review_id],
                   vote: 1
                  }
    upvote = Vote.new(upvoteData)
    send_post_response(upvote)
  end

  def down
    upvoteData = { user_id: current_user.id,
                   review_id: vote_params[:review_id],
                   vote: -1
                  }
    upvote = Vote.new(upvoteData)
    send_post_response(upvote)
  end

  private

  def authenticate_user_api
    unless user_signed_in?
      render( json: { error: "Not authorized",
                      message: "You must be singed-in to vote",
                      status: :unauthorized })
    end
  end

  def send_post_response(vote)
    if vote.save
      render(json: { status: :ok, message: "Voted successfully" })
    else
      render(json: { status: :unprocessable_entity, message: vote.errors })
    end
  end

  def vote_params
    params.require(:vote).permit(:review_id)
  end

end
