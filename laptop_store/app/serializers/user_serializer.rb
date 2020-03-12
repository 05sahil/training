class UserSerializer < ActiveModel::Serializer

  def attributes(*args)
  	data = super
  	data[:username] = object.username
  	data[:name] = object.name
  	data[:phoneno] = object.phoneno
  	data[:email] = object.email
  	data[:address] = object.address
  	data[:orders] = object.orders

  	data 
  end
end
