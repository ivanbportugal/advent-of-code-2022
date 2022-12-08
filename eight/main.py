
import re

trees = []
visible_count = 0

with open("./input.txt") as fp:
  for line in fp:
    characters = list(line)
    numbers = [int(x) for x in characters]
    trees.append(numbers)

def checkrow(i):
  tree_row = trees[i]
  prev_tree = tree_row[0]
  next_tree = len(tree_row) - 1

  done_with_left_right = False
  for j in range(len(tree_row) / 2):
    if j == 0:
      # Don't count first and last tree
      visible_count += 1
      continue

    if not done_with_left_right and prev_tree <= tree_row[j]:
      visible_count += 1
      prev_tree = tree_row[j]
    else:
      # All others to the halway are not visible left to right
      # Check top row
      done_with_left_right = True
      def recurse_up(curr_row):
        if curr_row == 0:
          return True
        if trees[curr_row][j] > tree_row[j]:
          return recurse_up(curr_row - 1)
        return False
      pass

  done_with_left_right = False
  for j in range(len(tree_row) - 1, len(tree_row) / 2, -1):
    if j == len(tree_row - 1):
      # Don't count first and last tree
      visible_count += 1
      continue

    if not done_with_left_right and next_tree <= tree_row[j]:
      visible_count += 1
      next_tree = tree_row[j]
    else:
      # All others to the halway are not visible left to right
      done_with_left_right = True
      break

# middle_trees_row_index = len(trees) / 2
next_row = len(trees) / 2

for i in range(len(trees) / 2):
  if i == 0:
    # Don't count the first and last row
    visible_count += len(trees)
    continue

  checkrow()

for i in range(len(trees) - 1, len(trees) / 2, -1):
  if i == len(trees - 1):
    # Don't count the first and last row
    visible_count += len(trees)
    continue

  checkrow()