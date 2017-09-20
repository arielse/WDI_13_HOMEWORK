require_relative "monkey"
require "pry"

kong = Monkey.new("King Kong", "Giant Gorilla")
kong.eat("camera man")
kong.eat("director")
kong.introduce

binding.pry
