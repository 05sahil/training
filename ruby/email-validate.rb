def email_validate (email)
  return email.match? (/^\w+\.?\w+@[a-z]+\.[a-z]+/)
end

if (email_validate('sahil.jha@berylsystems.com'))
  puts "This is a valid email address."
else 
  puts "This is not a valid email address."
end