require 'pry'

def number_guess()
  num = rand(0..11)
  puts 'Guess a number between 0 and 10'
  # gets the input, chomps off the "enter" and turns the string into an integer
  guess = gets.chomp.to_i
  while num != guess
    puts 'Your guess is wrong'
    if num < guess
      puts 'Guess Lower'
    elsif num > guess
      puts 'Guess Higher'
    end
    puts 'Guess a number between 0 and 10'
    guess = gets.chomp.to_i
  end
  puts 'Your guess is correct!'
end

number_guess()
