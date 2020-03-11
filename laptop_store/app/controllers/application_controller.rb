class ApplicationController < ActionController::Base
  helper_method :current_user
  helper_method :logged_in?
  helper_method :find_products

  def current_user
  	User.find_by(id: session[:user_id])
  end

  def logged_in?
    !current_user.nil?
  end

  def find_products(user_id)
  	@products_info = User.find(user_id).orders.find_by("payment_status != 'received'").order_products
 	@products = Array.new(@products_info.length){Hash.new}  #@product_info.length
 	@products_info.each{|p| 
 	  @products[@products_info.index(p)]['name'] = Laptop.find(p.laptop_id).name
 	  @products[@products_info.index(p)]['price'] = Laptop.find(p.laptop_id).price
 	  @products[@products_info.index(p)]['quantity'] = p.quantity 
 	}   	
  end
end
