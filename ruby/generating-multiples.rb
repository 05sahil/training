def func(*arg)
  x = (arg.length)
  res = Array.new(x)
  print "Enter no. for multiplication:\t"
  no = gets.to_i   
  for i in 0...x
    res[i] = arg[i] * no
  end
  return res
end

result = func(6,7,8,9,10)

print result