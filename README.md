# API DESIGN - FORUM APP

An app where you can keep connect with your club member forum.

## Requirement

- As a user, I want to be able to register.
- As a user, I want to be able to login.
- As a user, I want to be able to logout.
- As a user, I want to be able to create a new thread.
- As a user, I want to be able to create a new reply on a thread.
- As a user, I want to be able to update my profile.
- As a user, I want to be able to bookmark threads.
- As a user, I want to be able to unbookmark threads.

## Core Entity

- User (id, name, email, password, avaUrl)
- Thread (id, title, content, userId)
- Reply (id, reply, userId, threadId)
- Bookmark (id, threadId, userId)

## API Doc

### User

#### Authentication Register

```http
  POST /register
```

- Request Body
  | Parameter | Type | Description |
  | :-------- | :------- | :------------------------- |
  | `name` | `String` | Required |
  | `email` | `String` |Required |
  | `password` | `String` | Required |
- Response Body

  ```http
  {
      "status": 201,
      "message": "A new user is registered",
      "data": []
  }
  ```

- Error Response
  ```http
  {
      "status": 401,
      "message": "Error registering a user"
  }
  ```

#### Authentication Login

```http
  POST /login
```

- Request Body
  | Parameter | Type | Description |
  | :-------- | :------- | :------------------------- |
  | `email` | `String` |Required |
  | `password` | `String` | Required |

- Response Body

  ```http
  {
      "status": 201,
      "message": "string",
      "user": {
      "id": "string",
      "name": "string",
      "email": "string",
  }
  ```

- Error Response

  ```http
  {
      "status": 401,
      "message": "Username or password is invalid"
  }

  ```

#### Update Profile

```http
  PATCH /api/users
```

- Request Body
  | Parameter | Type | Description |
  | :-------- | :------- | :------------------------- |
  | `name` | `String` | Required |
  | `email` | `String` |Required |
  | `avaUrl` | `String` | Optional |

- Response Body

  ```http
  {
      "status": 201,
      "message": "Profile is just updated!",
      "data": {
          "id": "String",
          "name": "String",
          "email": "String",
          "avaUrl": "String",
  }
  ```

- Error
  ```http
  {
      "status": 401,
      "message": "Error updating profile"
  }
  ```

### Thread

#### Create Thread

```http
  POST /api/threads
```

- Request Body
  | Parameter | Type | Description |
  | :-------- | :------- | :------------------------- |
  | `title` | `String` | Required |
  | `content` | `String` |Required |

- Response Body

  ```http
  {
      "status": 201,
      "message": "Thread is created!",
      "data": {
      "id": "String",
      "title": "String",
      "content": "String",
        "userId": "String",
  }
  ```

- Error Response

  ```http
  {
      "status": 401,
      "message": "Error creating a thread"
  }

  ```

### Reply

#### Create a Reply

```http
  POST /api/replies
```

- Request Body
  | Parameter | Type | Description |
  | :-------- | :------- | :------------------------- |
  | `reply` | `String` | Required |
  | `userId` | `String` |Required |
  | `threadId` | `String` | Required |

- Response Body

  ```http
  {
      "status": 201,
      "message": "A reply is just posted!",
      "data": {
          "reply": "String",
          "threadId": "String",
          "userId": "String",
  }
  ```

- Error
  ```http
  {
      "status": 401,
      "message": "Error creating a thread"
  }
  ```

### Bookmark

#### Bookmark Threads

```http
  POST /api/bookmarks
```

- Request Body
  | Parameter | Type | Description |
  | :-------- | :------- | :------------------------- |
  | `userId` | `String` |Required |
  | `threadId` | `String` | Required |

- Response Body

  ```http
  {
      "status": 201,
      "message": "Just bookmarked a thread!",
      "data": {
          "userId": "String",
          "threadId": "String"
  }

  ```

- Error
  ```http
  {
      "status": 401,
      "message": "Error bookmarking a thread"
  }
  ```

#### Unbookmark Threads

```http
  DELETE /api/bookmarks
```

- Request Body
  | Parameter | Type | Description |
  | :-------- | :------- | :------------------------- |
  | `userId` | `String` | Required |
  | `threadId` | `String` |Required |

- Response Body

  ```http
  {
      "status": 201,
      "message": "Just unbookmarked a thread!",
      "data": {}
  }
  ```

- Error
  ```http
  {
      "status": 401,
      "message": "Error unbookmarking a thread!"
  }
  ```
