require "sinatra"
require "sinatra/reloader"
require "pry"
require "httparty"
require_relative "db_config"
require_relative "models/movie"


get '/' do
  @movie_title = params[:movie_title]
  @result = HTTParty.get("http://omdbapi.com/?s=#{@movie_title}&apikey=#{ENV['OMDP_API_KEY']}")

  erb :index
end

# if movie title already in database, get info from database, if not, look up on omdb then store in database
get '/about' do
  if Movie.find_by(title: "#{params[:movie_title]}")
    @result = Movie.find_by(title: params[:movie_title])
  else
    @movie_title = params[:movie_title]
    @result = HTTParty.get("http://omdbapi.com/?t=#{@movie_title}&apikey=#{ENV['OMDP_API_KEY']}")
    @movie = @result.parsed_response
    Movie.create(title: @movie["Title"], year: @movie["Year"], rating: @movie["Rated"], plot: @movie["Plot"], poster: @movie["Poster"])
    @result = Movie.find_by(title: params[:movie_title])
  end
  erb :about
end

get '/titles_list' do
  @movie_title = params[:movie_title]
  @result = HTTParty.get("http://omdbapi.com/?s=#{@movie_title}&apikey=#{ENV['OMDP_API_KEY']}")
  @search = @result.parsed_response["Search"]
  erb :titles_list
end
