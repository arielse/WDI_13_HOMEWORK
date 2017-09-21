require "sinatra"
require "sinatra/reloader"
require "pry"
require "httparty"

results = HTTParty.get('http://api.fixer.io/latest')
# if you type: results.parsed_response in the terminal it will show the results.
binding.pry
