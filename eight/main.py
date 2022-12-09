
# import re

trees = []
visible_count = 0

with open("./input.txt") as fp:
  for line in fp:
    characters = list(line)
    numbers = [int(x) for x in characters if x != '\n']
    trees.append(numbers)

def right_visible(i, j):
  for k in range(j, len(trees[i]) - 1):
    if trees[i][k] < trees[i][k + 1]:
      return False
  return True

def left_visible(i, j):
  for k in range(j, 0, -1):
    if trees[i][k] < trees[i][k - 1]:
      return False
  return True

def bottom_visible(i, j):
  for l in range(i, len(trees) - 1):
    if trees[l][j] < trees[l + 1][j]:
      return False
  return True

def top_visible(i, j):
  for l in range(i, 0, -1):
    if trees[l][j] < trees[l - 1][j]:
      return False
  return True

visible_count += (len(trees) * 2)
visible_count += (len(trees[0]) * 2 - 2)

for i in range(1, len(trees) - 1):
  for j in range(1, len(trees[i]) - 1):
    if top_visible(i, j) or left_visible(i, j) or bottom_visible(i, j) or right_visible(i, j):
      visible_count += 1

print(visible_count)
