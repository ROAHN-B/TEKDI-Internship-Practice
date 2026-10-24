import numpy as np
a=np.array([[0,12,3,56],
           [89,61,20,34,],
           [95,56,1,7]])
print(a.shape)
print(a.ndim)
print(a.dtype.name)
print("Item size",a.itemsize)
print("Size: ",a.size)
print(type(a))

z=np.zeros((3,4)) # creating matrix of zeros
print(z)

o= np.ones((3,4)) # Creating array of ones
print(o)

range = np.arange(10,30,4)
print(range)

d= np.linspace(0,2,9) # Creating array of float values of specific difference
print(d)

x= np.linspace(0,2*3.14,100)
print(np.sin(x)) # sin of 100 values

a = np.arange(6)                    # 1d array
print(a)
b = np.arange(12).reshape(4, 3)     # 2d array
print(b)
c = np.arange(24).reshape(2, 3, 4)  # 3d array
print(c)

A = np.array([[1, 1],
              [0, 1]])
B = np.array([[2, 0],
              [3, 4]])
print("Element wise product: ",A * B)     # elementwise product
print("matrix product: ",A @ B)     # matrix product
print("dot product: ",A.dot(B))  # another matrix product

rg = np.random.default_rng(1)  # create instance of default random number generator
a = np.ones((2, 3), dtype=np.int_)
b = rg.random((2, 3))
a *= 3
print(a)
b += a
print(b)
# a += b  # b is not automatically converted to integer type
a = np.ones(3, dtype=np.int32)
b = np.linspace(0, 3.14, 3)
print(b.dtype.name)
c = a + b
print(c)
print(c.dtype.name)
d = np.exp(c * 1j)
print(d)
print(d.dtype.name)

b = np.arange(12).reshape(3, 4)
print(b)
print(b.sum(axis=0))     # sum of each column
print(b.min(axis=1))     # min of each row
print(b.cumsum(axis=1))  # cumulative sum along each row

a = np.floor(10 * rg.random((3, 4)))
print(a)
print(a.shape)

a.ravel()  # returns the array, flattened
a.reshape(6, 2)  # returns the array with a modified shape
print("Transpose of the array: ",a.T)  # returns the array, transposed
print(a.T.shape)
print(a.shape)

a = np.floor(10 * rg.random((2, 2)))
print(a)
b = np.floor(10 * rg.random((2, 2)))
print(b)
print("Vertical stack: \n",np.vstack((a, b)))
print("Horizontal stack: \n",np.hstack((a, b)))

palette = np.array([[0, 0, 0],         # black
                    [255, 0, 0],       # red
                    [0, 255, 0],       # green
                    [0, 0, 255],       # blue
                    [255, 255, 255]])  # white
image = np.array([[0, 1, 2, 0],  # each value corresponds to a color in the palette
                  [0, 3, 4, 0]])
print("Image: \n",palette[image])  # the (2, 4, 3) color image

a = np.arange(5)
print(a)
a[[1, 3, 4]] = 0
print(a)


# Indexing with boolean values
a= np.arange(12).reshape(3,4)
b=a>4
print("Boolean filtered values: ",b)


a = np.arange(12).reshape(3, 4)
b1 = np.array([False, True, True])         # first dim selection
b2 = np.array([True, False, True, False])  # second dim selection
print(a[b1, :])                                   # selecting rows
print(a[b1])                                      # same thing
print(a[:, b2])                                   # selecting columns
print(a[b1, b2])                                  # a weird thing to do


x = np.arange(0, 10, 2)
y = np.arange(5)
m = np.vstack([x, y])
print(m)
xy = np.hstack([x, y])
print(xy)


import numpy as np
rg = np.random.default_rng(1)
import matplotlib.pyplot as plt
# Build a vector of 10000 normal deviates with variance 0.5^2 and mean 2
mu, sigma = 2, 0.5
v = rg.normal(mu, sigma, 10000)
# Plot a normalized histogram with 50 bins
plt.hist(v, bins=50, density=True)       # matplotlib version (plot)
# Compute the histogram with numpy and then plot it
(n, bins) = np.histogram(v, bins=50, density=True)  # NumPy version (no plot)
plt.plot(.5 * (bins[1:] + bins[:-1]), n) 