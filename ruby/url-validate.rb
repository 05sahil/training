def url_validate (url)
  return url.match? (/^(http|https):(\/\/).+/)
end

if (url_validate('http:/beryl.com'))
  puts "This is a valid URL."
else 
  puts "This is not a valid URL."
end