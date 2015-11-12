# DartFeed API Specification
 
### GET /api/articles

#### Parameters

Name | Description | Validation
-----|------------- | ---------
popular | Popular articles | Bool
category | Articles of the specific category | String ?

#### Examples

```json
curl -i http://127.0.0.1/api/articles?popular=true

```

### POST /api/articles

#### Payload

Name | Description | Validation
-----|------------- | ---------
title | Article title | String
linkURL | Link to article | String
summary | Snippet/summary | String
source | Publisher | String
imgURL | Image URL for article | String
date | Date of publication | ??
categories | Our assigned categories | ??
metadata | ?? | ???

#### Examples

```json

curl -i http://127.0.0.1/api/articles -H "Content-Type: application/json" -d '{"title":"TensorFlow and Monetizing Intellectual Property","linkURL":"https://stratechery.com/2015/tensorflow-and-monetizing-intellectual-property/","summary":"<p>Google has said repeatedly that machine learning is key to their future. Why, then, did they open source the secret sauce? Is it a mistake, or are there lessons to be learned for IP creators everywhere.</p> <p>The post <a rel="nofollow" href="https://stratechery.com/2015/tensorflow-and-monetizing-intellectual-property/">TensorFlow and Monetizing Intellectual Property</a> appeared first on <a rel="nofollow" href="https://stratechery.com">Stratechery by Ben Thompson</a>.</p>"","source":"Stratechery","imgURL":"test.jpg","date":"???","categories":"???",
"metadata":"???"}'

```


### GET /api/users  

#### Parameters

Name | Description | Validation
-----|------------- | ---------

### POST /api/users  

#### Payload

Name | Description | Validation
-----|------------- | ---------
