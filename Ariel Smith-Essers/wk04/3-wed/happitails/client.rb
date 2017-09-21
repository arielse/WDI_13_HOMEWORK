require "pry"
class Client
  def initialize(name, age, kids)
    @name = name
    @age = age
    @kids = kids
    @pets = []
  end
  def display_info
    puts "Name: #{@name}, Age: #{@age}, Number of children: #{@kids}, Pets: #{@pets[@name]}"
  end
  def add_pets(shelter)
    puts "Which pet do you want to adopt?"
    puts shelter[:animals]
    new_pet_index = gets.to_i
    new_pet = shelter[:animals][new_pet_index]
    @pets.push(new_pet)
    shelter[:animals].delete[new_pet_index]
  end
  def give_pets(shelter)
    puts "Which pet do you want to give away?"
    puts @pets.display_info
    give_pet_index = gets.to_i
    shelter[:animals].push(@pets[give_pet_index])
    give_pet = @pets.delete[give_pet_index]

  end
end
