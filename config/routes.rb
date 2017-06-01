Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'pigs#index'
  get 'pigs/:name', to: 'pigs#show'

  get 'toppings/index'
  get 'toppings/create'
end
