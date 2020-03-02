class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def index
    @users = User.all
  end

  def create
    @user = User.new(user_params)
    if @user.save
      redirect_to users_path
    # else 
    #   render :new
    end
  end

  def edit
  end

  def update
  end

  def show
    @user = User.find(params[:id])
  end

  def destroy
    @user = User.find(params[:id])
    if @user.delete
      redirect_to users_path
    else 
      render :show
    end
  end

  private 
    def user_params
      params.require(:user).permit(:name,:username,:password,:email,:phoneno,:address,:password_confirmation)
    end

end
