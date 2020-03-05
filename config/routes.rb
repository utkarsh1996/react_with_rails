Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/home' => "messages#index"
  get '/signup' => "messages#signup"
  get '/profile' => "messages#profile"
  namespace :api do
    namespace :v1 do
      resources :users, only: [:create]
      # post "/login", to: "auth#login"
      # get "/auto_login", to: "auth#auto_login"
      # get "/user_is_authed", to: "auth#user_is_authed"
      resources :messages, only: [:index, :create, :destroy, :update]
      resources :comments, only: [:index, :create]
    end
  end
  root "messages#login"
end
