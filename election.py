from random import randint
Candidate_1=0

for i in range(10000):
  regions= (0) #Checks to see the wins based on percentage with each region
  if randint(1,100) <= 87:
    regions += 1
  if randint(1,100) <= 65:
    regions += 1
  if randit(1,100) <= 17:
    regions += 1
  if regions >= 2:
    Candidate_1 += 1

print "The chances of winning are" + "Candidate_1/ 10000"
