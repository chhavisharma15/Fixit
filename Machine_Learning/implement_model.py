from sklearn.externals import joblib
from sklearn.linear_model import LogisticRegression
lr = joblib.load('lr_model.joblib')

quantity = input("quantity of orders:")

locality = input("locality:")

print("The price based on the above quantity of orders and locality is:")
print(lr.predict([[int(quantity),int(locality)]]))
