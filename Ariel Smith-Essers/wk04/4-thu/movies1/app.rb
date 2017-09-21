require "sinatra"
require "sinatra/reloader"
require "pry"
require "httparty"



get '/' do
  @movie_title = params[:movie_title]
  @result = HTTParty.get("http://omdbapi.com/?t=#{@movie_title}&apikey=2f6435d9")
  erb :index
end

get '/about' do
  @movie_title = params[:movie_title]
  @result = HTTParty.get("http://omdbapi.com/?t=#{@movie_title}&apikey=2f6435d9")
  @movie = @result.parsed_response
  @title = @movie["Title"]
  @year = @movie["Year"]
  @rating = @movie["Rated"]
  @runtime = @movie["Runtime"]
  @plot = @movie["Plot"]
  @director = @movie["Director"]
  @actors = @movie["Actors"]
  @poster = @movie["Poster"]
  erb :about
end
