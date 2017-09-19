require 'pry'
def get_num_lines
  puts "What file would you like to count?"
  # asks for file name, removes "enter" from end of input
  file_name = gets.chomp
  # Not really sure how this works. I know it's getting the input/output, reading the file and then getting the size of the file or something like that.
  count = IO.readlines(file_name).size
end
puts("#{get_num_lines} line(s)")
