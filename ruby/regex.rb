
=begin
	puts "Regex are cool".match? /\w{4, }/

    puts "Regex are cool".match? /\w{4}$/

    puts "Regex are cool".match /\w{3, }/

    puts 'do you like cats' =~ /like/

=end




def contains_vowel (str)

	return str =~ /[aeiou]/

end


puts contains_vowel('test')
puts contains_vowel('rhythm is') 

