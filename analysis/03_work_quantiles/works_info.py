import pandas as pd 
import matplotlib.pyplot as plt

df = pd.read_csv("./allworkdatecount2.csv")
print("done reading!")


df['quantiles'] = pd.qcut(df['dateCount'], q=6, precision=0, duplicates='drop')
# df['quantiles'] = pd.qcut(df['dateCount'], q=10, precision=0, duplicates='drop')
# df['quantiles'] = pd.qcut(df['dateCount'].rank(method='first'), 7, precision=0)
print (df.head())

df.to_csv('work_quantiles3.csv', mode='a', encoding='utf-8', index=False)