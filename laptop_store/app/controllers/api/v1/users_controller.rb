module Api
  module V1
  	class UsersController < ApplicationController
  	  def index
  	  	users = User.all
  	  	render json: {status: 'loaded all users', message: 'all users', data: users}, status: :ok
  	  end  
  	end
  end
end