require 'pry'
# Arrays

planeteers = ["Earth", "Wind", "Captain Planet", "Fire", "Water"]

planeteers[1]
planeteers.push("Heart")
planeteers = planeteers - ["Captain Planet"]

rangers = ["Red", "Blue", "Pink", "Yellow", "Black"]

heroes = rangers + planeteers
alphabet_heroes = heroes.sort
shuffle_heroes = heroes.shuffle

# Hashes

ninja_turtle = {
  name: 'Michelangelo',
  weapon: 'Nunchuks',
  radical: true
}

ninja_turtle[:age] = 17

ninja_turtle.delete(:radical)

ninja_turtle[:pizza_toppings] = ["cheese", "pepperoni", "peppers"]

ninja_turtle[:pizza_toppings][0]
ninja_arr = ninja_turtle.keys
ninja_turtle.each { |key, value| puts "#{key} is equal to #{value}" }

binding.pry
puts 'yay'
