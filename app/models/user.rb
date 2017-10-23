class User < ApplicationRecord
	has_many :reviews
	has_many :votes
	has_many :sandwiches, through: :reviews

	validates :email, presence: true, uniqueness: true
	validates :encrypted_password, presence: true
	validates :reset_password_token, uniqueness: true
	validates :sign_in_count, presence: true

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end
