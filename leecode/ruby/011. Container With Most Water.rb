def max_area(height)
  i, j, max = 0, height.length-1, 0
  while i < j
    v = height.values_at(i,j).min * (j - i)
    max = [max, v].max
    if height[i] < height[j]
      i += 1
    else
      j -= 1
    end
  end
  max
end