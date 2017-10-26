class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :sandwich_id, :rating, :body, :created_at, :updated_at, :vote_count
  belongs_to :user, serializer: ReviewAuthorSerializer

  def vote_count
    object.vote_count
  end
end
