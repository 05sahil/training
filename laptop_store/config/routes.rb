Rails.application.routes.draw do
  
  delete "user/cart", to: "carts#destroy", as: "user_cart_delete_item"
  get 'user/cart', to: "carts#show", as: "user_cart"
  get "login", to: "sessions#new", as: "user_login"
  post "login", to: "sessions#create"
  get "users/:id/soft_delete", to: "users#soft_delete", as: "user_soft_delete"
  get "logout", to: "sessions#log_out", as: "user_logout"
  resources :laptops do
  	resources :laptop_specs #name of controller
  end
  
  root "laptops#index"

  resources :users
=begin
  get 'laptop_specs/new'
  get 'laptop_specs/create'
  get 'laptop_specs/edit'
  get 'laptop_specs/update'
  get 'laptops/new'
  get 'laptops/create'
  get 'laptops/index'
  get 'laptops/show'
  get 'laptops/edit'
  get 'laptops/update'
  get 'laptops/destroy'
=end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
