def armstrongno
  print "Enter a number:\t"
  x = gets.chomp
  ar = x.split(//)
  x = x.to_i
  sum = 0
  ar.each{|a|
    a = a.to_i  
    sum += a*a*a}
  if sum == x
    print "Armstrong Number\n"
  else 
    print "Not an Armstrong Number\n"
  end
end

armstrongno