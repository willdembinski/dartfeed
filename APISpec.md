# DartFeed API Specification
 
### GET /api/articles

#### Parameters

Name | Description | Validation | Required?
-----|------------- | --------- | ---
popular | Popular articles | Bool | 
category | Articles of the specified categories | Array of Strings | 
page | Page # for newsfeed. 20 articles / page | Number | 

#### Examples

```json
curl -i http://127.0.0.1/api/articles?popular=true

```

### POST /api/articles

#### Payload

Array of articles with each article defined by:

Name | Description | Validation | Required?
-----|------------- | --------- |------
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

#### Parameters

Name | Description | Validation
-----|------------- | ---------

### POST /api/users  

#### Payload

Name | Description | Validation
-----|------------- | ---------
