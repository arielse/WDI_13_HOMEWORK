require "sinatra"
require "sinatra/reloader"
require "pry"
require "yahoofinance"

get '/' do
@ticker = params[:ticker]
@result = YahooFinance::get_quotes(YahooFinance::StandardQuote, @ticker)
erb :index
# binding.pry
end

get '/result' do
  @ticker = params[:ticker]
  @result = YahooFinance::get_quotes(YahooFinance::StandardQuote, @ticker)
  @stock = @result[@ticker]
  @stock_name = @stock.name
  @date = @stock.date
  @open = @stock.open
  @last_trade = @stock.lastTrade
  @day_high = @stock.dayHigh
  @day_low = @stock.dayLow
  @day_range = @stock.dayRange
  @change_percent = @stock.changePercent
  @volume = @stock.volume
  erb :result
end
