require "pry"

users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}

# How would you access Jonathan's Twitter handle (i.e. the string "tronathan")?
users["Jonathan"][:twitter]

# How would you add the number 7 to Erik's favorite numbers?
users["Erik"][:favorite_numbers].push(7)

# How would you add yourself to the users hash?
users["Ariel"]= { :twitter => "arielherself", :favorite_numbers => [26, 24, 12] }

# How would you return the array of Erik's favorite numbers?
users["Erik"][:favorite_numbers]

# How would you return the smallest of Erik's favorite numbers?
eriks_nums = users["Erik"][:favorite_numbers].sort
eriks_nums[0]

# How would you return an array of Anil's favorite numbers that are also even?
anils_nums = users["Anil"][:favorite_numbers]
anils_nums.select do |num|
  num.even?
end
# How would you return an array of the favorite numbers common to all users?


# How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?

binding.pry
puts 'yay'
