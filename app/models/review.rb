class Review < ApplicationRecord
	belongs_to :user
	belongs_to :sandwich
	has_many   :votes

	validates :user_id, presence: true
	validates :sandwich_id, presence: true
	validates :rating, presence: true
	validates :body, presence: true
end
