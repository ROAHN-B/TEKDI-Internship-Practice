try:
    numerator = 10
    denominator = 1
    divide = numerator/denominator
    print(divide)
except ZeroDivisionError:
    print("Division by zero is not allowed")
finally:
    print("please continue")


#  Incorporating else
# program to print the reciprocal of even numbers

try:
    num = int(input("Enter a number: "))
    assert num % 2 == 0
except:
    print("Not an even number!")
else:
    reciprocal = 1/num
    print(reciprocal)