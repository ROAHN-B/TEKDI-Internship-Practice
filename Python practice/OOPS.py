class parrot:
    name = ""
    age=""

parrot1 = parrot()
parrot1.name="blu"
parrot1.age=3

parrot2=parrot()
parrot2.name="woo"
parrot2.age=4

print(f"{parrot1.name} is {parrot1.age} years old")
print(f"{parrot2.name} is {parrot2.age} years old")


# ==============================================================================
# Inheritance
class Animal:
    def sleep(self):
        print("I can sleep")
    def eat(self):
        print("I can eat")

class Dog(Animal):
    def bark(self):
        print("I can bark")

dog1 = Dog()
dog1.eat()
dog1.sleep()
dog1.bark()

# ===============================================================================================================
# Encapsulation
class Computer:
    def __init__(self):
        self.__maxprice = 2000
    def sell(self):
        print("Selling at value: ",format(self.__maxprice))

    def setMaxPrice(self,price):
        self.__maxprice = price

computer1 = Computer()
computer1.sell()
computer1.setMaxPrice(5000)
computer1.__maxprice=3000


# =============================================================================================================================
# Polymorphism
class Polygon:
    
    def render(self):
        print("Rendering Polygon...")

class Square(Polygon):
  
    def render(self):
        print("Rendering Square...")

class Circle(Polygon):
    # renders circle
    def render(self):
        print("Rendering Circle...")
    

s1 = Square()
s1.render()


c1 = Circle()
c1.render()