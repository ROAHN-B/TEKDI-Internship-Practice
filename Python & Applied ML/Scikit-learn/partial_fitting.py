from sklearn.linear_model import SGDClassifier
import numpy as np

model = SGDClassifier()

for batch in range(10):
    X_batch = np.random.rand(1000,20)
    y_batch = np.random.randint(0,2,1000)
    model.partial_fit(X_batch,y_batch,classes=[0,1])
    