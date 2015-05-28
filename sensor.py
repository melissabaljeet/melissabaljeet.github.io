us_dist(15)
from gopigo import *
def turn_right():
  enc_tgt(0,1,2)
  time.sleep(.1)
  fwd()
  time.sleep(5)
print us_dist(15)
while us_dist(15) >= 20:
  fwd() 
  turn_right
