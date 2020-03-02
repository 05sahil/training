class User < ApplicationRecord
  has_many :orders
  has_many :order_products, through: :orders
  validates :username, :name, presence: true #:address, 
  validates :name, length: {minimum: 3, too_short:"must be more than %{count} characters"} 
  validates :email, presence: true, format: {with: /\A\w+\.?\w+@[a-z]+\.[a-z]+/, message: "Enter valid email address"}
  validates :phoneno, presence: true,length: {is: 10, message: "must be of 10 digits"}
  validates :password, presence:true, confirmation: {message: "password didn't match"}
  validates :password_confirmation, presence: true
  
end
