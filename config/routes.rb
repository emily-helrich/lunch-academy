Rails.application.routes.draw do
  devise_for :users
  root "sandwiches#index"
  resources :sandwiches
end
