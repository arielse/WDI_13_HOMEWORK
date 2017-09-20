require_relative "animal"
require_relative "client"
require "pry"


shelter = {
  clients: [Client.new('Harry', 3, 30), Client.new('Hermione', 2, 30)],
  animals: [Animal.new('Hedwig', 2, "female", "owl"), Animal.new('Crookshanks', 3, "female", "cat")]
}


binding.pry
puts "yay"
