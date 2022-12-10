def doit(input_file):
  with open(input_file, "r+") as f:
    lines = f.readlines()

print(doit("input.txt"))
