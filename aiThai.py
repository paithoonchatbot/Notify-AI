from sklearn import tree

features = [[115, 70], [180, 100], [159, 99], [139, 89], [120, 80]]
labels = ["STORNGE /NORMAL", "HYPERTENSION /WEAKNESS", "HYPERTENSION WEAK", "WEAKNESS", "NORMAL "]
classifier = tree.DecisionTreeClassifier()
classifier = classifier.fit(features, labels)

print(classifier.predict([[115, 70]]))
