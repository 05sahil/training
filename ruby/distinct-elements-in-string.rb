
str = 'BERYL SYSTEMS'

i,j,k=0,1,1
n = str.length
ar = Array.new(n)

ar[0] = str[0]

while j<n do
  if(ar[i] == str[j] or str[j]==" ")
    i=0
    j+=1
    next
  end
  i+=1
  if (i==k)
  	ar[i] = str[j]
  	j+=1
  	k+=1
  	i=0
  end
end

ar.each{|x| print x," "}