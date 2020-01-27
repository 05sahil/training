def got
  a = gets.to_i
  b = gets.to_i
  c = gets.to_i
  small = a
    if b>small
    small = b
  end
  if c>small
    small = c
  end
  puts "Greatest no. is #{small}"
end

got