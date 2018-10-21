import pandas as pd
import numpy as np
from sklearn.linear_model import LogisticRegression
from sklearn.externals import joblib

df = pd.read_csv('Machine_Learning/train.tsv', sep='\t', nrows=20000)

df['location'] = pd.Series(np.random.randint(6, size=20000), index=df.index)


X = df[['quantity', 'location']].copy()

price_list = df[['price']].astype(int)


y = price_list
lr = LogisticRegression()
lr.fit(X, y)
joblib.dump(lr, 'lr_model.joblib')

print(lr.predict([[5,2]]))

print('Model Saved')
