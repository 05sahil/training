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
  	  def show 
  	  	user = User.find(params[:id])
  	  	render json: {status: 'SUCCESS', message: 'loaded user', data: user}, status: 302 	
  	  end 
  	  def destroy
  	  	user = User.find(params[:id])
  	  	render json: {status: 'SUCCESS', message: 'user deleted', data: user}, status: 200
  	  end	
  	  private 

  	  def user_params
        params.require(:user).permit(:name,:username,:password,:email,:phoneno,:address,:password_confirmation)
      end
  	end
  end
end