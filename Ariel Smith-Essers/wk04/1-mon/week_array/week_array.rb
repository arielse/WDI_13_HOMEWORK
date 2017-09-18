days_of_week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
# removes sunday from end of array and stores in a variable
sunday = days_of_week.pop
# adds sunday to the start of the array
days_of_week.unshift(sunday)


all_days = [['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], ['Saturday', 'Sunday']]
# deletes array index of 1
all_days.delete_at(1)
# sorts array alphabetically
all_days.sort
