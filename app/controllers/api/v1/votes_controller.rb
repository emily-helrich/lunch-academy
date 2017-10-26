class Api::V1::VotesController < ApplicationController
  protect_from_forgery prepend: true

  # before_action :current_user?, only: [:up, :down]

  # #check user already voted or not
  # before_action :exists?, :only=>[:up, :down, :like]
  #
  # #intialize user
  # before_action :initialize_user, :only=>[:user_vote_count, :user_like_count]

  before_action :initialize_review, only: [:review_vote_count]

  def up
    upvoteData = { user_id: 1,
                   review_id: vote_params[:review_id],
                   vote: 1
                  }
    upvote = Vote.new(upvoteData)
    send_post_response(upvote)
  end

  def down
  end

  def review_vote_count
    review_id = @review.id
    voteCount = Review.find(review_id).votes.inject(0) { |memo,review| memo + review.vote }
    render(json: { status: :ok, review_id: review_id, voteCount: voteCount })
  end

  def user_vote_count
  end

  private

  def initialize_review
    binding.pry
    @review = Review.find(params[:review_id])
  end

  def vote_params
    params.require(:vote).permit(:review_id)
  end

  def send_post_response(vote)
    if vote.save
      render(json: { status: :ok,
        message: "Voted successfully",
        data: {
          voteCount: review_vote_count
          }
        })
    else
      render(json: { status: :unprocessable_entity, message: vote.errors })
    end
  end

  def initialize_user
    @user = User.find(params[:user_id])
  end

end
