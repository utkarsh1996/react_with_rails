module Api
    module V1
        class CommentsController < ApplicationController
            def index
                comments = Comment.all
                render json: comments
            end
            def create
                comment = Comment.create(comment_params)
                comment.save
                render json: comment
            end
            private
            def comment_params
                params.require(:comment).permit(:comment, :likes, :user_id, :message_id)
            end
        end
    end
end