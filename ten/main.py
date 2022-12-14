def doit(input_file):
  with open(input_file, "r+") as f:
    lines = f.readlines()

  total = 0
  cycle = 1
  x     = 1

  crt = []
  row = ''
  for instr in lines:
    if x <= cycle % 40 <= x + 2:
      row += '#'
    else:
      row += ' '
    cycle += 1

    if instr.startswith('addx'):
      if cycle % 40 == 20:
        total += cycle * x
      elif cycle % 40 == 1:
        crt.append(row)
        row = ''

      if x <= cycle % 40 <= x + 2:
        row += '#'
      else:
        row += ' '


      cycle += 1
      x     += int(instr[5:])

    if cycle % 40 == 20:
      total += cycle * x
    elif cycle % 40 == 1:
      crt.append(row)
      row = ''

  return '\n'.join(crt)

print(doit("input.txt"))
