us_dist(15)
from gopigo import *
def turn_right():
  enc_tgt(0,1,2)
  time.sleep(.1)
  fwd()
  time.sleep(5)
def turn_left():
  enc_tgt(1,0, 2)
  time.sleep(.1)
  fwd()
  time.sleep(5)
print us_dist(15)
for i in range(1, 10):
  while us_dist(15) >= 20:
    servo(90)
    fwd() 
  if us_dist(15) > 20:
    servo(180)
    turn_right()
  else us_dist(15) < 20:
    servo(0)
    turn_left()
