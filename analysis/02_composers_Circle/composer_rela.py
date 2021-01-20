from dask.distributed import Client
import dask.bag as db
import json
import s3fs
import time
import numpy as np
import pandas as pd
import pickle
import base64
import csv
from itertools import combinations


#create combined df with just museum and topics
df = pd.read_csv("./top_works_edges.csv")
print("done reading!")

def combine(batch):
    """Combine all products within one batch into pairs"""
    return pd.Series(list(combinations(set(batch), 2)))

edges = df.groupby('programID')['workTitle'].apply(combine).value_counts()
edges = edges.reset_index()
edges = pd.concat([edges, edges['index'].apply(pd.Series)], axis=1)
edges.drop(['index'], axis=1, inplace=True)
edges.columns = 'Weight','Source','Target'

print(edges.head(20))
edges.to_csv('top_works_connections.csv', mode='a', encoding='utf-8', index=False)


#pivot data and add combinations of 



#save to csv
# df_g.to_csv('df_g_topics.csv', mode='a')
# print(df_g.head(20))

###############################################
#attempt at reading pkl
# df = pd.read_pickle("./df_test.pkl")

# print(df.info(verbose=True, null_counts=True))

# print(df['topics'].value_counts())

#attempt at converting pickle to csv
# your_pickle_obj = pickle.loads(open('./df_test.pkl', 'rb').read())
# with open('df_test.csv', 'a', encoding='utf8') as csv_file:
#     wr = csv.writer(csv_file, delimiter='|')
#     pickle_bytes = pickle.dumps(your_pickle_obj)            # unsafe to write
#     b64_bytes = base64.b64encode(pickle_bytes)  # safe to write but still bytes
#     b64_str = b64_bytes.decode('utf8')          # safe and in utf8
#     wr.writerow(['id',
# 				'unitCode',
# 				'title',
# 				'record_ID',
# 				'title_sort',
# 				'guid',
# 				'media_count',
# 				'topics',
# 				'setName',
# 				'associated person',
# 				'media_id', 
# 				b64_str])

