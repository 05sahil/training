Rails.application.routes.draw do


  get 'home/index'
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
