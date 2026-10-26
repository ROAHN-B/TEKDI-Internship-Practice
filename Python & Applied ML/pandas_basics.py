import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
s = pd.Series([1, 3, 5, np.nan, 6, 8])
print(s)

dates = pd.date_range("20130101",periods=6)
print(dates)

df2 = pd.DataFrame(
    {
        "A": 1.0,
        "B": pd.Timestamp("20130102"),
        "C": pd.Series(1, index=list(range(4)), dtype="float32"),
        "D": np.array([3] * 4, dtype="int32"),
        "E": pd.Categorical(["test", "train", "test", "train"]),
        "F": "foo",
    }
)

print("dataframe", df2)
print("datatypes of elements in dataframe: \n",df2.dtypes)

print(df2.to_numpy())

# describe statistics 
print("describe: ", df2.describe())

# viewing columns
print("Column A: \n",df2['A'])

print(df2.loc["20130102":"20130104", ["A", "B"]])

# select via position
print(df2.iloc[3:5,0:2])

#setting value by lable 
df2.at[dates[0],"A"]= 0

print(df2)
ts = pd.Series(np.random.randn(1000), index=pd.date_range("1/1/2000", periods=1000))
ts=ts.cumsum()
ts.plot()
df = pd.DataFrame(
  np.random.randn(1000, 4), index=ts.index, columns=["A", "B", "C", "D"]
 )


df = df.cumsum()

plt.figure();

df.plot();

plt.legend(loc='best');

