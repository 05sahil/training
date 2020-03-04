class SessionsController < ApplicationController
  def new
  end

def create
    @user = User.find_by(username: params[:username])
    if (@user and @user.username == params[:username] and @user.password == params[:password])
    	session[:user_id] = @user.id
    	redirect_to users_path
    else 
    	render :new
    end
  end
end
