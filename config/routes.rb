Rails.application.routes.draw do
  devise_for :users
  root to: "pages#index"
  
  resources :sandwiches do
    resources :reviews
  end


  get '/:id', to: 'pages#show'

  resources :sandwiches
  get '/sandwiches/:id/reviews', to: 'pages#reviews'

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
