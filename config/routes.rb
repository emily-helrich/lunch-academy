Rails.application.routes.draw do
  devise_for :users
  root to: "pages#index"
<<<<<<< HEAD
  get '/:id', to: 'pages#show'
=======
  resources :sandwiches
>>>>>>> c3944655e7cdc052e8e51d6ce9b5fc168f1c7a58

  namespace :api do
    namespace :v1 do
        resources :sandwiches, only: [:index, :show]
    end
  end

end
