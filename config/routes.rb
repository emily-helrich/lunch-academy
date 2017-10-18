Rails.application.routes.draw do
  devise_for :users
  root to: "sandwiches#index"
  resources :sandwiches
end
