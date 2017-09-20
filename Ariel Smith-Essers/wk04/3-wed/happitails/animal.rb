require "pry"
class Animal
  def initialize(name, age, gender, species)
    @name = name
    @age = age
    @gender = gender
    @species = species
    @toys = []
  end
  def add_toys(new_toy)
    @toys.push(new_toy)
  end
end
