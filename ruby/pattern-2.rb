i=0
n=5

while i<n do
  j=0
  while j<(n-(i+1)) do
    print " "
    j+=1
  end
  k=0
  while k<((i*2)+1) do
    print "*"
    k+=1
  end
  print "\n"
  i+=1
end