from sklearn import cluster,datasets

iris=datasets.load_iris()

k=3
k_means = cluster.KMeans(k)

k_means.fit(iris.data)
print(k_means.labels_[::10])
print(iris.target[::10])