Rails.application.routes.draw do
  devise_for :users
  root to: "pages#index"
  get '/:id', to: 'pages#show'
<<<<<<< HEAD

=======
>>>>>>> 8de27a8c1cd36c10c1cc8f161cc40f5e2cd682c9
  resources :sandwiches

  namespace :api do
    namespace :v1 do
        resources :sandwiches, only: [:index, :show]
    end
  end
end
