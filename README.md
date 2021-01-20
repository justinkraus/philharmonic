# Random Night w/ Phil
[Final Visualization](https://justinkraus.github.io/philharmonic/)

This analysis is focused around reviewing the [NY Philharmonic's performance dataset](https://archives.nyphil.org/index.php/open-data). The NY Philharmonic played its first performance in 1842 and has gone onto per form over 20,000 times. 

## Iteration One
I initially set-out to determine which pieces or composers within the Philharmonic’s performance catalog are commonly performed together. To do this I utilized a combination of Python, Excel and the Network Graphing tool Gephi:

1.  Flatten using pandas [JSON normalize](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.json_normalize.html) the original philharmonic JSON file to a tabular format. 

INSERT LINK TO flat_phil1.py

Here is an example record from the original complete JSON showing the very first performance listed in the dataset. Within the works section are the Composer and workTitle that will be analyzed.

**Original JSON Structure**

```json
{
  "programs": [
    {
      "id": "00646b9f-fec7-4ffb-9fb1-faae410bd9dc-0.1",
      "programID": "3853",
      "orchestra": "New York Philharmonic",
      "season": "1842-43",
      "concerts": [
        {
          "eventType": "Subscription Season",
          "Location": "Manhattan, NY",
          "Venue": "Apollo Rooms",
          "Date": "1842-12-07T05:00:00Z",
          "Time": "8:00PM"
        }
      ],
      "works": [
        {
          "ID": "52446*",
          "composerName": "Beethoven,  Ludwig  van",
          "workTitle": "SYMPHONY NO. 5 IN C MINOR, OP.67",
          "conductorName": "Hill, Ureli Corelli",
          "soloists": []
        },
```
**New Tabular Format** 

|composerName| workTitle | Date |
|--|--|--|
| Beethoven,  Ludwig  van | SYMPHONY NO. 5 IN C MINOR, OP.67 | 1842-12-07T05:00:00Z |


2. Observing connections through a circular network graph
The premise of a network graph is that it illustrates relationships by drawing lines (edges) between points (nodes) based on a connection. For this network graph, I filtered on the top 145 composers as determined by the number of works performed which determines the size of the node. Composers are connected when their works are performed together, more shared performances mean thicker lines and a deeper shade of blue.  
   
Note: for further background on the construction of a network graph, see the [methodology document here](https://github.com/justinkraus/si_meta/blob/master/topics/README.md).
    

![](https://lh6.googleusercontent.com/I4LgoB9-7e4eNatCfSy-bUiNVKMAacO1VuW0wdFUS2yG6PTNskXJwB5cjnt6oCjPjeVlCZtruM6Wg2BmuogxJRhWlAl8Ch84MQtPdFbwRo6t37_-PM26dYX9qdElo33BwHbfAza4)

LINK TO 02_composers_Circle folder 

It's apparent that a select group of composers have a high number of performances and those composers tend to have works performed alongside other composers with a lot performances. In short, there wasn't an immediately apparent pattern to which composers are performed together. I began to hypothesize that there are additional factors the Philharmonic program organizers account for when considering a program or season schedule which is beyond the scope of the dataset.

## Iteration Two
I expanded the focus to look not just at individual composers but also works performed to determine which pieces are most frequently performed by the Philharmonic. Using Python/Pandas (Script Here) LINK TO works_info.py 

I created quantiles based on the total number of performance dates for individual works. **This revealed an interesting observation where a small set of works (~300) account for approximately half of all works performed by the Philharmonic**. On the opposite end of the spectrum, certain works are only performed as 'one-offs' or special commissions. While capturing the depth and variety of programming is near impossible, I set-out to create a fictitious program-generator for performances by the NY Philharmonic based on the quantiles version that creates a fictitious set of programming at the Philharmonic.

INSERT LINK TO phil_quants.png

Illustration of the three quantiles based on number of performances: 1 represents the ~300 distinct works that comprise the majority of works performed, 3 is comprised of the 'one-offs'.

Through my analysis I determined the average NY Philharmonic performance has 7 works performed 

For the final visual:

 - D3.js reads a csv of distinct works LINK TO works_quantileall1.csv with one of the three quantiles assigned to each work. 
 - On button press, a random selection of these works by quantile is assigned to the colored HTML elements
 - These HTML elements are weighted on how frequently works in that quantile are performed (there are an average of 7 works performed in one Philharmonic program).
 - Assignments overwrite text in an html element as well as continually adding new html elements of all the previous button clicks, gradually filling up the background.
 

![](https://lh4.googleusercontent.com/AeHSuRAy7K32IiuCEPnvlXLZJIiHVfEIyT7aHwyzbr6I0eKbaJOPsgLtOiC3kyL5FKTKghlbgu7peDGkQ_7YeTfTnRbvVwBFrxTR56RmtZWmp1YkEXeUa7MQeKCDVq0DFQVUtFg5)