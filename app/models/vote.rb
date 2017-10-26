class Vote < ApplicationRecord
	belongs_to :review
	belongs_to :user

	validates :user_id, presence: true
	validates :review_id, presence: true
	validates :vote, numericality: { only_integer: true,
		 															 greater_than_or_equal_to: -1,
		 															 less_than_or_equal_to: 1}
end
