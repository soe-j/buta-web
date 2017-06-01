Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'butas#index'
  get 'butas/:name', to: 'butas#show'
end
