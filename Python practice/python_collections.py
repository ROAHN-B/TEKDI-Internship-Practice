thislist = ["apple","banana","orange"] # Lists are mutable
# print(thislist)


# to count numbe4r of items in list
#print(len(thislist))


print(type(thislist)) # List is a class in python hence its type is <class 'list'>

#python collections
list = ["rohan","karan","steve","payal"] # this is a list
tuple = {"Apple","orange","banana"} # this is a tuple (they are immutable)
set = ("one","two","three") # a set contains only unique values
dictionary = {"one":1,"two":2,"three":3} # it stores values in key and value pair

print(list,tuple,set,dictionary)

#===============================================================================================================

thisdict = {
  "brand": "Ford",
  "electric": False,
  "year": 1964,
  "model":"Yamaha",
  "colors": ["red", "white", "blue"] # a dictionary can have a list inside it.
}

print(thisdict)


car = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}

x = car.keys()

print(x) #before the change

car["color"] = "white"

print(x) #after the change

print(thisdict.values())

if "model" in thisdict:
    print("Found")


# we can update the dictionary
thisdict.update({"year": 2020})

# we can remove value from dictionary
thisdict.pop("model")
print(thisdict)

# looping a dictionary
for x in thisdict:
    print(x)
    print(thisdict[x])

# we can access both the values
for x,y in thisdict.items():
    print(x,y)

# copying a dictionary
mydict = thisdict.copy()
print(mydict)

# ==========================================================================================================
# TUPLES - Immutable data structure
mytuple = ("apple", "banana", "cherry")
print(type(mytuple))

# Negative indexing
print(mytuple[-1])

print(mytuple[2:5])


# to make changes in tuple convert it into list then back to tuple
# x = ("apple", "banana", "cherry")
# y = list(x)
# y[1] = "kiwi"
# x = tuple(y)

# print(x)


# Unpacking the tuple
(val1,val2,val3) = mytuple
print(val1,val2,val3)

(val4,*val5) = mytuple
print(val4,val5)


# =========================================================================================
# SET - this collection can't have duplicate values
thisset = {"apple", "banana", "cherry", "apple"}
print("SET: ",thisset)

# add an item in set
thisset.add("papaya")

# Union of two sets
set1 = {"a", "b", "c"}
set2 = {1, 2, 3}

set3 = set1 | set2 #union
set4 = set1 & set2 #intersection
set5 = set1 - set2 # difference
set6 = set1 ^ set2 # symmetric difference

print(set3)
print(set4)
print(set5)

# Immutable version of SET
x = frozenset({"apple", "banana", "cherry"})
print(x)
print(type(x))