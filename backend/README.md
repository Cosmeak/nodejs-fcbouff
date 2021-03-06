# Api - Nodejs-fcbouff

## Installation
```
npm install
```

## Open server

Run server
```
npm start 
```
Run nodemon
```
npm run dev
```

## How to use ?

All response are in json.

___

### User

**Index** [GET] : ```/api/user```
>**Request Headers:**
>- Authorization : your token

>**Request Body:**
>- userId

>**Response:**
>- Status (Success or Failure)
>- Data (if success) = array of object user / Reason (if error)


**Create** [POST] : ```/api/user```
>**Request Body:** 
>- username
>- email
>- password

>**Response:**
>- Status (Success or Failure)
>- Data (if success) = object user / Reason (if error)


**Show** [GET] : ```/api/user/:id```
>**Request Headers:**
>- Authorization : your token

>**Request Header Parameter:**
> - :id (in url)

>**Request Body:**
>- userId

>**Response:**
>- Status (Success or Failure)
>- Data (if success) = object user / Reason (if error)


**Update** [PUT, PATCH] : ```/api/:id```
>**Request Headers:**
>- Authorization : your token

>**Request Header Parameter:**
> - :id (in url)

>**Request Body:**
>- username
>- email
>- password
>- userId

>**Response:**
>- Status (Success or Failure)
>- Data (if success) = object user / Reason (if error)


**Destroy** [DELETE] : ```/api/user/:id```
>**Request Headers:**
>- Authorization : your token

>**Header Parameter:**
> - :id (in url)

>**Request Body:**
>- userId

>**Response:**
>- Status (Success or Failure)
>- Data (if success) = object user / Reason (if error)


**Login** [POST] : ```/api/login```
>**Request Body:**
>- email
>- password

>**Response:**
>- Status (Success or Failure)
>- Data (if success) = object user / Reason (if error)

___

### Message

**Index** [GET] : ```/api/message```
>**Request Headers:**
>- Authorization : your token

>**Request Body:**
>- userId

>**Response:**
>- Status (Success or Failure)
>- Data (if success) = array of object message / Reason (if error)


**Create** [POST] : ```/api/message```
>**Request Headers:**
>- Authorization : your token

>**Request Body:**
>- userId
>- message

>**Response:**
>- Status (Success or Failure)
>- Data (if success) = object message / Reason (if error)


**Show** [GET] : ```/api/message/user/:id```
>**Request Headers:**
>- Authorization : your token

>**Request Header Parameter:**
> - :id (in url)

>**Response:**
>- Status (Success or Failure)
>- Data (if success) = array object message of this user / Reason (if error)


**Update** [PUT, PATCH] : ```/api/message/:id```
>**Request Headers:**
>- Authorization : your token

>**Request Header Parameter:**
> - :id (in url)

>**Request Body:**
>- message
>- userId

>**Response:**
>- Status (Success or Failure)
>- Data (if success) = object message / Reason (if error)


**Destroy** [DELETE] : ```/api/message/:id```
>**Request Headers:**
>- Authorization : your token

>**Header Parameter:**
> - :id (in url)

>**Request Body:**
>- userId

>**Response:**
>- Status (Success or Failure)
>- Data (if success) = object message / Reason (if error)

