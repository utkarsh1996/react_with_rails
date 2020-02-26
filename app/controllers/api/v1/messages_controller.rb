module Api
  module V1
    class MessagesController < ApplicationController
      def index
        messages = Message.all
        render json: messages
      end
      def create
        message = Message.create(message_params)
        message.save
        render json: message
      end
      def destroy
        Message.destroy(params[:id])
      end
      def update
        message = Message.find(params[:id])
        message.update_attributes(message_params)
        render json: message
      end
      private
        def message_params
          params.require(:message).permit(:title, :message, :user_id)
        end
    end
  end
end