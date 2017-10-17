Rails.application.routes.draw do
  root "sandwiches#index"
  resources :sandwiches
end
