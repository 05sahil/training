str = 'working at beryl systems'

a = 'beryl'

j,i,sum=0,0,0

while i<str.length do
  if (str[i]==a[j])
  	sum+=1
  	j+=1
    if sum==5
      break
    end
  else
  	sum = 0
  	j=0
  end

  i+=1
end

if (sum == a.length)
  puts "#{a} is present in the string."
else 
  puts "#{a} is not present in the string."
end


