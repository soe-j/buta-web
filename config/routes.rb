Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'pigs#index'
  get 'pigs/:name', to: 'pigs#show'

  get  'pigs/:pig_name/topping_logs', to: 'topping_logs#index'
  get  'pigs/:pig_name/topping_logs/first', to: 'topping_logs#first'
  post 'pigs/:pig_name/topping_logs', to: 'topping_logs#create'
end
