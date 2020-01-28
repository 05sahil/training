
class Overloading
  attr_accessor:arr
  def initialize (*num)
    @arr = num
  end
  def [] (x)
    return @arr[x] 
  end
  def []= (x,y)
    return @arr [x]= y 
  end
  def << (x)
    return @arr << x
  end
end

a = Overloading.new(2,4,6,8,10)

puts a [2]

puts a [0]= 10 

puts a[0]

print a << 12
