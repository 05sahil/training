
class Person
  attr_accessor:name,:age
  def initialize(name,age)
    @name = name
    @age = age
  end
  def display_p
    puts "#{@name} is #{@age} years old"
  end
end

class Student < Person
  attr_accessor:rollno,:stream
  def initialize(name,age,rollno,stream)
    super(name,age)
    @rollno = rollno
    @stream = stream
  end
  def + (b)
    name = "#{self.name} #{b.name}"
    stream = "#{self.stream} & #{b.stream}"
    return Student.new(name,29,9,stream)
  end
  def < (b)
     return self.name.length < b.name.length
  end 
end 


s2 = Student.new('Durnden',11,8,'Science')
s3 = Student.new('Tyler',11,8,'Science')

puts s3<s2

puts s2<s3
  