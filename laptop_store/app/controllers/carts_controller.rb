class CartsController < ApplicationController
  def show
    if session[:user_id]!=''
      @user_id = session[:user_id]	
      find_products(@user_id)
  	else
  	  redirect_to user_login_path
  	end	
  end
  def destroy
    @name = params[:product_name]
    @user_id = session[:user_id]
    @product_id = Laptop.find_by(name: @name).id
    User.find(@user_id).orders.find_by("payment_status != 'received'").order_products.find_by(laptop_id: @product_id).delete
    redirect_to user_cart_path
  end
end
