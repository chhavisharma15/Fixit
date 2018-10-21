import pandas as pd
import numpy as np
from sklearn.linear_model import LogisticRegression

df = pd.read_csv('Machine_Learning/train.tsv', sep='\t', nrows=100000)

df['location'] = pd.Series(np.random.randint(6, size=100000), index=df.index)


X = df[['train_id','quantity', 'location']].copy()

price_list = df[['price']].astype(int)


y = price_list
lr = LogisticRegression()
lr.fit(X, y)
preds = lr.predict(X)


print(preds)
