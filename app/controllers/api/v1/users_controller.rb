module Api
    module V1
        class UsersController < ApplicationController
            def create
                user = User.create(user_params)
                if user.valid?
                    payload = {user_id: user.id}
                    token = encode_token(payload)
                    render json: {user: user, jwt: token}
                else
                    render json: {errors: user.errors.full_messages}, status: :not_acceptable
                end
            end
            def login
                user = User.find_by(email: params[:email])
                if user && user.authenticate(params[:password])
                    payload = {user_id: user.id}
                    token = encode_token(payload)
                    render json: {user: user, jwt: token, success: "Welcome, #{user.email}"}
                else
                    render json: {failure: "log in failed"}
                end
            end
            def auto_login
                if session_user
                    render json: session_user
                else
                    render json: { errors: "No user logged in"}
                end
            end
            
            private
            def user_params
                params.permit(:name, :email, :phone, :password)
            end
        end
    end
end