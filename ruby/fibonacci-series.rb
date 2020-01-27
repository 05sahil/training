$x,$y,$temp,$c=1,1,0,1

def fib(no)
  if $c==1
    print $x," "
  end
  print $y, " "
  $temp = $x
  $x = $y
  $y = $x + $temp
  $c +=1
  if $c<no
    fib(no)
  end
end


fib(10)