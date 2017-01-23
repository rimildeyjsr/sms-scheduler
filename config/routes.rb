Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/home', to: 'home#index'
  get '/home/new', to: 'home#new'
  get 'home/:id', to: 'home#show'
  post '/home', to: 'home#create', as: :homes
end
