Rails.application.routes.draw do
  devise_for :users
  root to: "pages#index"
  resources :sandwiches, only: [:new]
  get '/sandwiches',     to: 'sandwiches#index'
  get '/sandwiches/new', to: 'sandwiches#new'
  get '/sandwiches/:id', to: 'pages#show'
  get '/sandwiches/:id/reviews/new', to: 'reviews#new'

  resources :sandwiches do
    resources :reviews
  end

  namespace :api do
    namespace :v1 do
      resources :sandwiches, only: [:index, :show] do
        resources :reviews, only: [:index]
      end
      post 'votes/up'     => 'votes#up'
      post 'votes/down'   => 'votes#down'
      get  'votes/review' => 'votes#review_vote_count'
    end
  end
end
