
def SortInOrder(unsorted)
  x = unsorted.sort.reverse
  y = unsorted.sort
  n = unsorted.length
  ar = Array.new
  i,a,b = 0,0,0

  while i<n do
  	if (i%2==0)
  	  ar[i] = x[a]
  	  a+=1
  	else 
  	  ar[i] = y[b]
  	  b+=1
  	end
	i+=1
  end
  return ar
end

res = SortInOrder([10,14,12,16,20,18])

res.each {|x| print x," "}
