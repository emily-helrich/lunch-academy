require 'rails_helper'

time = Time.new(2017)

RSpec.describe Api::V1::ReviewsController, type: :controller do
  include Devise::Test::ControllerHelpers


  let!(:user_one){ User.create(id:1, email: "one@gmail.com", password: "password1")}
  let!(:sandwich_one){ Sandwich.create(id:1, name:"reuban", description: "delicious", image_url: "www.google.com" )}
  let!(:review_one){ Review.create(user_id:1, sandwich_id:1, rating:5, body:"so good!", created_at: time, updated_at: time)}
  let!(:review_two){ Review.create(user_id:1, sandwich_id:1, rating:4, body:"just ok", created_at: time, updated_at: time)}

  describe "GET#index" do
    before do
      get :index, params: { sandwich_id: sandwich_one.id }
    end

    it "returns http success" do
      expect(response).to have_http_status(:success)
    end

    it "response with JSON body containing a list of Reviews" do
      hash_body = nil
      expect { hash_body = JSON.parse(response.body).with_indifferent_access }.not_to raise_exception

      expect(hash_body).to match({
        reviews: [
          {
            id: review_one.id,
            user_id: 1,
            sandwich_id: 1,
            rating: 5,
            body: "so good!",
            created_at: time,
            updated_at: time
          },
          {
            id: review_two.id,
            user_id:1,
            sandwich_id:1,
            rating:4,
            body:"just ok",
            created_at: time,
            updated_at: time
          }
        ]
      })
    end
  end
end
