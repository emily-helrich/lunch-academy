class Api::V1::VotesController < ApplicationController
  protect_from_forgery prepend: true

  # before_action :current_user?, only: [:up, :down]

  # #check user already voted or not
  # before_action :exists?, :only=>[:up, :down, :like]
  #
  # #intialize user
  # before_action :initialize_user, :only=>[:user_vote_count, :user_like_count]
  #
  # #intialize votable object
  # before_action :initialize_votable_object, :only=>[:model_vote_count, :model_like_count]



  def up
    upvoteData = { user_id: current_user,
                   review_id: vote_params[:review_id],
                   vote: 1
                  }
    upvote = Vote.new(upvoteData)
    send_post_response(upvote)
  end

  def down

  end

  def review_vote_count

  end

  def user_vote_count
  end

  private

  def vote_params
    params.permit(:review_id)
  end

  def send_get_response(upvotes,downvotes)
    render(json: { status: :ok, upcount: upvotes.size ,upvotes:JSON.parse(upvotes.to_json), downcount: downvotes.size,downvotes: JSON.parse(downvotes.to_json) })
  end

  def send_post_response(vote)
    if vote.save
        render(json: { status: :ok, message: "Voted successfully" })
    else
      render(json: { status: :unprocessable_entity, message: vote.errors })
    end
  end

  def initialize_user
    @user = User.find(params[:user_id])
  end

end
