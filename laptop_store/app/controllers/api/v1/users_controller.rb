module Api
  module V1
  	class UsersController < ApplicationController
  	  def index
  	  	users = User.all
  	  	render json: {status: 'SUCCESS', message: 'loaded all users', data: users}, status: :ok
  	  end  

  	  def create
  	  	user = User.new(user_params)
  	  	if user.save
  	  	  render json: {status: 'SUCCESS', message: 'user saved', data: user}, status: :ok
  	  	else
  	  	  render json: {status: 'FAILURE', message: 'user not saved', data: user.errors}, status: 422
  	  	end
  	  end

  	  private 

  	  def user_params
        	params.require(:user).permit(:name,:username,:password,:email,:phoneno,:address,:password_confirmation)
      end
  	end
  end
end