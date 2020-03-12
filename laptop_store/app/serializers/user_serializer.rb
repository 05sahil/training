class UserSerializer < ActiveModel::Serializer
  attributes :name, :username, :email, :phoneno
end
