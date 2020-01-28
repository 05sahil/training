
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
end


s1 = Student.new('Tyler',12,1,'Arts')
s2 = Student.new('Durden',12,1,'Science')

s3 = s1 + s2

puts s3.name