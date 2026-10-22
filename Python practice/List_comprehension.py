list = [x**2 for x in range(1,10)]
print(list)

# conditions in list comprehension
# filtering even numbers from a list
even_numbers = [num for num in range(1, 10) if num % 2 == 0 ]

print(even_numbers)

# Output: [2, 4, 6, 8]