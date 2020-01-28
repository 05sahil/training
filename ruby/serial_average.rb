# serial_average('002-10.00-20.00')
#{}"002-15.00"

def serial_average(x)

  c = ((x[4..8].to_f + x[10..14].to_f)/2).round(2).to_s

  return "#{x[0..2]}-#{c}" 

end

puts serial_average('001-12.43-56.78')

puts serial_average('002-10.00-20.00')
 