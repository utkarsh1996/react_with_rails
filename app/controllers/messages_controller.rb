class MessagesController < ApplicationController
    # skip_before_action :require_login, :only => [:signup, :login]
    before_action :authenticate_user!, :only => [:login, :signup]
    def index
    end
    def login
    end
    def profile
    end
    def signup
    end
end