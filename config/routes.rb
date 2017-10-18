Rails.application.routes.draw do
  devise_for :users
  root to: "sandwiches#index"
  resources :sandwiches

  namespace :api do
    namespace :v1 do
        resources :sandwiches, only: [:index, :show]
    end
  end

end
