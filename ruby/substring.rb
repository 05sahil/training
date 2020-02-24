ar = ['est','fest','best','rest']
res = Array.new
x = Array.new
c = 0

for i in 0...ar[0].length
  ele = ar[0][i]
  count = 1

  for j in 1...ar.length
  	if (ar[j].include?(ele))
  	  temp = ar[j].index(ele)
  	  
  	  if (x[j] == nil or x[j]+1 == temp)
  	  	x[j] = temp 
  	  	count += 1
  	  end
  	end
  end

  if count == ar.length
  	res[c] = ele
  	c += 1
  end
end

print res 