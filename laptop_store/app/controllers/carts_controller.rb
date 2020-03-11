class CartsController < ApplicationController
  def show
    if session[:user_id]!=''	
      @user_id = session[:user_id]
  	  @products_info = User.find(@user_id).orders.find_by("payment_status != 'received'").order_products
 	  @products = Array.new(@products_info.length){Hash.new}  #@product_info.length
 	  @products_info.each{|p| 
 	    @products[@products_info.index(p)]['name'] = Laptop.find(p.laptop_id).name
 	    @products[@products_info.index(p)]['price'] = Laptop.find(p.laptop_id).price
 	    @products[@products_info.index(p)]['quantity'] = p.quantity 
 	  } 
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
