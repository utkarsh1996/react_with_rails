Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/home' => "messages#index"
  get '/signup' => "messages#signup"
  namespace :api do
    namespace :v1 do
      resources :messages, only: [:index, :create, :destroy, :update]
      resources :comments, only: [:index, :create]
    end
  end
  root "messages#login"
end
