Rails.application.routes.draw do
  devise_for :users
  root to: "pages#index"
  resources :sandwiches
  get '/sandwiches/:id/reviews', to: 'pages#reviews'

  namespace :api do
    namespace :v1 do
      resources :sandwiches, only: [:index, :show] do
        resources :reviews, only: [:index]
      end
    end
  end

end
