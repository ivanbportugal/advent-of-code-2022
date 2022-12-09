def doit(input_file):
  with open(input_file, "r+") as f:
    lines = f.readlines()

  offset = {"L": (-1, 0), "R": (1, 0), "U": (0, 1), "D": (0, -1)}

  rope = [(0, 0)] * 10
  visited = set()
  xh = 0
  yh = 0
  # For previous step
  xt = 0
  yt = 0
  for line in lines:
    line_array = line.split(' ')
    direction = line_array[0]
    amount = line_array[1]

    dx, dy = offset[direction]

    for _ in range(int(amount)):
      # Set head
      xh, yh = rope[0]
      rope[0] = xh + dx, yh + dy

      for i in range(1, len(rope)):
        prev_x, prev_y = rope[i - 1]
        curr_x, curr_y = rope[i]
      
        # Same as before logic, but dragging rope
        while max(abs(curr_x - prev_x), abs(curr_y - prev_y)) > 1:
          if abs(curr_x - prev_x) > 0:
              curr_x += 1 if prev_x > curr_x else -1
          if abs(curr_y - prev_y) > 0:
              curr_y += 1 if prev_y > curr_y else -1
        
        rope[i] = curr_x, curr_y
      # Only add the last one
      visited.add(rope[-1])

  return len(visited)

print(doit("input.txt"))
