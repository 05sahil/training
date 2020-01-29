a1 = [8,10,13,22,66,78]
a2 = [9,79,34,55,65,89]

i,j=0,0

n = a1.length

while i<n do 
  x = a1[i] - 1
  y = a1[i] + 1

  if(a2[j]==x or a2[j]==y)
    print "(#{a1[i]},#{a2[j]})\t"
    i+=1
    j = 0
    next
  end

  j+=1
  if(j==n-1)
  	j=0
  	i+=1
  end
end


#considering lengths of both array is equal
