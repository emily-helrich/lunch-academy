require 'rails_helper'

RSpec.describe Api::V1::SandwichesController, type: :controller do
  include Devise::Test::ControllerHelpers

  let!(:sandwich_one){ Sandwich.create(id:1, name:"reuban", description: "delicious", image_url: "www.google.com" )}
  let!(:sandwich_two){ Sandwich.create(id:2, name:"grilled cheese", description: "gooey", image_url: "www.yahoo.com" )}

  describe "GET#index" do
    before do
      get :index

    end



    it "returns http success" do
      expect(response).to have_http_status(:success)
    end

    it "response with JSON body containing a list of Sandwiches" do
      # binding.pry
      hash_body = nil
      expect { hash_body = JSON.parse(response.body).with_indifferent_access }.not_to raise_exception

      expect(hash_body).to match({
        "sandwiches": [
          {
            "id":1,
            "name":"reuban",
            "description":"delicious",
            "image_url":"www.google.com"
          },
          {
            "id":2,
            "name":"grilled cheese",
            "description":"gooey",
            "image_url":"www.yahoo.com"
          }
        ]

        })
      end
    end
end
