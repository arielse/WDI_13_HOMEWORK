require "active_record"

options = {
  adapter: 'postgresql',
  database: 'filmsearch_db'
}

# this is how to activate, must be at the bottom of the page.
ActiveRecord::Base.establish_connection(options)
