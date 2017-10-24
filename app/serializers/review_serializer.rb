class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :sandwich_id, :rating, :body, :created_at, :updated_at
  belongs_to :user, serializer: ReviewAuthorSerializer
end