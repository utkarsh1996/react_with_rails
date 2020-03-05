module Api
    module V1
        class UsersController < ApplicationController
            def index
                users = User.all
                render json: users
            end
            # def create
            #     user = User.create(user_params)
            #     if user.valid?
            #         payload = {user_id: user.id}
            #         token = encode_token(payload)
            #         render json: {user: user, jwt: token}
            #     else
            #         render json: {errors: user.errors.full_messages}, status: :not_acceptable
            #     end
            # end
            # def login
            #     user = User.find_by(email: params[:email])
            #     if user && user.authenticate(params[:password])
            #         payload = {user_id: user.id}
            #         token = encode_token(payload)
            #         render json: {user: user, jwt: token, success: "Welcome, #{user.email}"}
            #     else
            #         render json: {failure: "log in failed"}
            #     end
            # end

            private
            def user_params
                params.permit(:name, :email, :phone, :password)
            end
        end
    end
end