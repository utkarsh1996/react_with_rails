class MessagesController < ApplicationController
    skip_before_action :require_login, :only => [:signup, :login]
    def index
    end
    def login
    end
    def signup
    end
end