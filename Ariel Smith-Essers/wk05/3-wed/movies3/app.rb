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
  @result = Movie.find_by(imdbid: "#{params[:imdb_id]}")
  if !@result
    @result = HTTParty.get("http://omdbapi.com/?i=#{params[:imdb_id]}&apikey=#{ENV['OMDP_API_KEY']}")
    @movie = @result.parsed_response
    @result = Movie.create(title: @movie["Title"], year: @movie["Year"], rating: @movie["Rated"], plot: @movie["Plot"], poster: @movie["Poster"], imdbid: @movie["imdbID"])
  end
  erb :about
end

get '/titles_list' do
  @movie_title = params[:movie_title]
  @result = HTTParty.get("http://omdbapi.com/?s=#{@movie_title}&apikey=#{ENV['OMDP_API_KEY']}")
  if @result["Response"]=="False"
    @message = "Movie title not found"
    redirect '/'
  else
    @search = @result.parsed_response["Search"]
    erb :titles_list
  end
end
