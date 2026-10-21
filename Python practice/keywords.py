# Void function
def function(a,b):
    c=a+b
x=function(1,2)
print(x)


#improper function
def improper_function(a):
    if(a%2==0):
        return True
y=improper_function(3)
print(y)

#assertion used for debugging
# a=4
# assert a>5, "The value is too small"


import asyncio

async def Async_function():
    print("Task: 1")
    await asyncio.sleep(1)
    print("task: 3")

asyncio.run(Async_function())

#break and continue
for i in range(1,11):
    if (i==5):
        break
    print(i)

for i in range(1,11):
    if (i==5):
        continue
    print(i)


#A class is used to repersent a realworld scenario
class ExampleClass():
    def example_function1():
        pass
    def example_function2():
        pass


#if, else, elseif
def if_example(a):
    if a == 1:
        print('One')
    elif a == 2:
        print('Two')
    else:
        print('Something else')

if_example(2)
if_example(4)
if_example(1)

#Exception handling in python ===> except, raise and try
def reciprocal(num):
    try:
        r=1/num
    except:
        print("Input should be from 1-infinity!")
        return 
    return r

print(reciprocal(10))
print(reciprocal(0))

# Raise is used to raise a exception
# def raise_exception(num):
#     if (num==0):
#         raise ZeroDivisionError("Number cannot be 0")

# raise_exception(0)


# For is also use to loop through lists
names = ["Rohan","Karan","Arjun"]

for i in names:
    print("hello: ",i)


#lambda function
a=lambda x:x*2
for i in range(1,6):
    print(a(i))
