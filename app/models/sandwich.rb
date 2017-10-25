class Sandwich < ApplicationRecord
	has_many :reviews
	has_many :users, through: :reviews

	validates :name, presence: true, uniqueness: true
	validates :description, presence: true
	validates :image_url, presence: true

	def reviews_by_vote_count
		reviews = Sandwich.find(id).reviews
		reviews.sort { |a,b| b.vote_count <=> a.vote_count }
	end
end
