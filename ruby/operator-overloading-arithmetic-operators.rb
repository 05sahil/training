
class Calculate
  attr_accessor:num
  def initialize (num)
    @num = num
  end
  def + (b)
    return self.num + b.num
  end
  def - (b)
    return self.num - b.num
  end
  def * (b)
    return self.num * b.num
  end
  def / (b)
    return self.num / b.num
  end
  def % (b)
    return self.num % b.num
  end
  def ** (b)
    return self.num ** b.num
  end
end


a = Calculate.new(10)

b = Calculate.new(4)

puts a + b

puts a - b

puts a * b
 
puts a / b

puts a % b

puts a ** b