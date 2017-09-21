require_relative "animal"
require_relative "client"
require "pry"


shelter = {
  clients: [Client.new('Harry', 30, 3), Client.new('Hermione', 30, 2)],
  animals: [Animal.new('Hedwig', 2, "female", "owl"), Animal.new('Crookshanks', 3, "female", "cat")]
}

def add_animals(shelter)
  puts "Name of animal:"
  name = gets.chomp
  puts "Age of animal:"
  age = gets.chomp
  puts "Gender of animal:"
  gender = gets.chomp
  puts "Species of animal:"
  species = gets.chomp

  shelter[:animals].push(Animal.new(name, age, gender, species))
end

def add_clients(shelter)
  puts "Name of client:"
  name = gets.chomp
  puts "Age of client:"
  age = gets.chomp
  puts "Number of children:"
  kids = gets.chomp

  shelter[:clients].push(Client.new(name, age, kids))
end

def adopt_animals(shelter, animal, client)
  puts "Name of client:"
  client_index = client
  # gets client name
  # displays all pets up for adoption
  # selects pet client wanted to adoption and puts into variable
  # deletes pet from shelter
  # adds pet into client pet array.
end

binding.pry
puts "yay"
