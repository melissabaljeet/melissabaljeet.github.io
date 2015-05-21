from GoPiGo import
import time
import math
set_speed(75)


def move_forward(feet):
  mm = feet * 304.8
  motor_steps = int(mm / 11.34)
  enc_tgt(1,1,motor_steps)
  time.sleep(.1)
  fwd()
  time.sleep(feet*2)


def turn_left():
  enc_tgt(1,0, 2)
  time.sleep(.1)
  fwd()
  time.sleep(5)
  
  
def turn_right():
  enc_tgt(0,1,2)
  time.sleep(.1)
  fwd()
  time.sleep(5)

move_forward(4)
turn_right
move_forward(2)
turn_right
move_forward(4)
