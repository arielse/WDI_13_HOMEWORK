require "pry"
class Client
  def initialize(name, kids, age)
    @name = name
    @kids = kids
    @age = age
    @pets = []
  end
  def add_pets(shelter)
    puts "Which pet do you want to adopt?"
    puts shelter[:animals]
    new_pet = shelter[:animals][gets.to_i]
    @pets.push(new_pet)
  end
  def give_pets(shelter)
    puts "Which pet do you want to give away?"
    puts @pets
    give_pet = @pets[gets.to_i].pop

  end
end
