from sklearn import preprocessing
import numpy as np

X_train = np.array([[1.,-1.,2.],
                    [2.,0.,0.],
                    [0.,1.,-1.]])
scaler = preprocessing.StandardScaler().fit(X_train)
print(scaler)
print(scaler.mean_)

x_scaled = scaler.transform(X_train)
print(x_scaled)

print(x_scaled.mean(axis=0))
print(x_scaled.std(axis=0))
