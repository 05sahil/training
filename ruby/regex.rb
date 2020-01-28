
=begin
	puts "Regex are cool".match? /\w{4, }/

    puts "Regex are cool".match? /\w{4}$/

    puts "Regex are cool".match /\w{3, }/

    puts 'do you like cats' =~ /like/

    puts "5a5 9a9 2.9 1.5".match /\d.\d\s\d.\d\s\d\.\d\s\d\.\d/


=end




def contains_vowel (str)

	return str =~ /[aeiou]/

end


#puts contains_vowel('test')
#puts contains_vowel('rhythm is') 



def contains_number (str)

	return str =~ /\d/

end

#puts contains_number ('test 1234')

#puts contains_number ('no number ')


def ip_address? (str)
	return str.match? /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/
end

puts ip_address?('1.1.1.2')
puts ip_address?('123.134.156.23')
puts ip_address?('12.134')


