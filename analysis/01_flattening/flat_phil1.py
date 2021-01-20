import json 
import pandas as pd 
from pandas.io.json import json_normalize #package for flattening json in pandas df

#load json object
with open('./phil_complete.json',"r") as file:
    d = json.load(file)

print("Type", type(d))

# nycphil = json_normalize(d['programs'])
# print(type(nycphil))
# nycphil.head(3)

# works_data = json_normalize(data=d['programs'], record_path='works', 
#                             meta=['id', 'orchestra','programID', 'season'])
# works_data.head(3)

# concerts_data = json_normalize(data = d["programs"], record_path="concerts", meta=['id', 'orchestra','programID', 'season'])
# concerts_data.head(3)

# soloist_data = json_normalize(data=d['programs'], record_path=['works', 'soloists'], 
#                               meta=['id'])
# soloist_data.head(3)


intermediate_level1_1 = json_normalize(data = d["programs"], record_path = "works", meta = ['id', 'orchestra', 'season', 'programID'])
intermediate_level1_1.head(3)


intermediate_level2 = json_normalize(data=d["programs"], record_path=["works", "soloists"], meta=['id'])
intermediate_level2.head(20)

intermediate_level1_combined = intermediate_level1_1.merge(intermediate_level2, how="inner", on=['id'])
intermediate_level1_combined.head(6)

intermediate_level1_2 = json_normalize(data=d['programs'], record_path='concerts', meta=['id'])
intermediate_level1_2.head(20)

total = intermediate_level1_combined.merge(intermediate_level1_2, how="inner", on="id")
total.head(10)

total.to_csv('phil_flat.csv', index=False, encoding='utf-8')