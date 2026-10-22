import os
# f=open("demo.txt")
# print(f.read())

with open("demo.txt") as f:
    print(f.readline())
    print(f.readline())
    print(f.read(1))
    f.close()

#  appending a line in a file
with open("demo.txt","a") as f:
    f.write("\nThis is appended line!")
    f.close()

with open("demo.txt") as f:
    print(f.read())
    f.close()

# Overwriting a line in file
with open("demo.txt","w") as f:
    f.write("OOPS! this is a overwrite")

if os.path.exists("demo.txt"):
    print(f"File demo.txt exists")
else:
    print("demo.txt dosen't exist")

    