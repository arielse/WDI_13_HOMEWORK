class Monkey
  def initialize(name, species)
    @name = name
    @species = species
    @foods_eaten = []
  end

  def eat(food)
    @foods_eaten.push(food)
  end

  def introduce
    puts "Hi I'm #{@name}, I am a #{@species}. Today I have eaten: #{@foods_eaten.join(" & ")}."
  end
end
