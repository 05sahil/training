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
end
