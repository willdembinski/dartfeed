# DartFeed API Specification
 
### GET /api/articles


#### Parameters

Name | Description | Validation | Notes |
-----|------------- | --------- | ----- |
popular | Popular articles | Bool | Not currently used by app |
offset | To get article <offset> and onwards | Number | Needs to be implemented |
limit | Limit the number of articles returned | Number | Needs to be implemented |

#### Examples

```json
curl -i http://127.0.0.1:8000/api/articles?popular=true
```

### POST /api/articles


#### Payload

Array of articles with each article defined by:

Name | Description | Validation | 
-----|------------- | --------- |
title | Article title | String | 
linkURL | Link to article | String |  
summary | Snippet/summary | String | 
source | Publisher | String | 
imgURL | Image URL for article | String | 
date | Date of publication | ISO:8601 String (use Date.prototype.toJSON()) | 
categories | Our assigned categories | Array of Strings | 

#### Examples

```json

curl -i http://127.0.0.1:8000/api/articles -H "Content-Type: application/json" -d '[{"title":"TensorFlow and Monetizing Intellectual Property","linkURL":"test","summary":"test","source":"bleh","imgURL":"gah","date":"1995-12-17T11:24:00.000Z","categories":["Startups","bleh","Money","JavaS"]},{"title":"Another Article","linkURL":"test","summary":"test","source":"bleh","imgURL":"gah","date":"1995-12-17T11:24:00.000Z","categories":["Startups","bleh","x"]}]';

```

### GET /api/users

#### Examples
```json
curl -i http://127.0.0.1:8000/api/users
```




### GET /api/user:id

#### Examples
```json
curl -i http://127.0.0.1:8000/api/user/56453c61deffcac712aadc6b
```

### GET /api/categories


#### Examples
```json
curl -i http://http://localhost:8000/api/categories
```

### PUT /api/categories


#### Examples
```json
curl -i -X PUT -H "Content-Type: application/json" http://localhost:8000/api/categories -d '{"categories" : {"category":"C"}}'
```




