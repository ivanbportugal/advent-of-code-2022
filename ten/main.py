def doit(input_file):
  with open(input_file, "r+") as f:
    lines = f.readlines()

  total = 0
  cycle = 1
  x     = 1
  for instr in lines:
    cycle += 1

    if instr.startswith('addx'):
      if cycle % 40 == 20:
        total += cycle * x

      cycle += 1
      x     += int(instr[5:])

    if cycle % 40 == 20:
      total += cycle * x

  return (x, total)

print(doit("input.txt"))
