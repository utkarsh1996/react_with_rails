class ApplicationController < ActionController::Base
    protect_from_forgery with: :null_session
    def index
    end
    # def encode_token(payload)
    #     JWT.encode(payload,Rails.application.secrets.secret_key_base)
    # end
    # def session_user
    #     decoded_hash = decoded_token
    #     if !decoded_hash.empty?
    #         user_id = decoded_hash[0]['user_id']
    #         @user = User.find_by(id: usr_id)
    #     else
    #         nil 
    #     end
    # end
    # def auth_header
    #     request.headers['Authorization']
    # end
    # def decoded_token
    #     if auth_header
    #         token = auth_header.split(' ')[1]
    #         begin
    #             JWT.decode(token, Rails.application.secrets.secret_key_base, true, algorithm: 'HS256')
    #         rescue JWT::DecodeError
    #             []
    #         end
    #     end
    # end
    # before_action :require_login
    # def logged_in?
    #     !!session_user
    # end
    # def require_login
    #     render json: {message: 'please login'}, status: :unauthorized unless logged_in?
    # end
end
