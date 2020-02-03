def url_validate (url)
  return url.match? (/^(http|https):\/\/.+/)
end

puts url_validate('https://localhost:3001')