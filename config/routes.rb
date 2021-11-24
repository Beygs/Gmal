Rails.application.routes.draw do
  root 'emails#index'
  resources 'emails', only: [:index, :create]

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
