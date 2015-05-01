from math import randint
tracker = {2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0, 10:0, 11:0, 12:0}
dice = [1,2,3,4,5,6]

for i in range(500):
  roll = randint(1,6) + randint(1,6)
  tracker[roll] = tracker[roll]+1
  
  if tracker[2] == randint (1,6) + randint(1,6):
    print 2:0 + 0:1
  elif tracker[3] == randint(1,6) + randint(1,6):
    print 3.0 + 0.1
  else tracker[4] == randint(1,6) + randint(1,6):
    print 4.0 + 0.1
  
