from sklearn import svm
from sklearn import datasets

iris=datasets.load_iris()

clf = svm.LinearSVC()

# learning data
clf.fit(iris.data,iris.target)

# Prediction
clf.predict([[5.0,3.6,1.3,0.25]])

print(clf.coef_)