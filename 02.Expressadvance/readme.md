# My Express.js[02.express advance]

### topics [middleware, headers, query, global catches, zod validation]

## Middleware

Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application's request-response cycle. Middleware functions can perform tasks like executing code, making changes to the request and response objects, ending the request-response cycle, and calling the next middleware function in the stack.

### User Middleware -[text](Middlewares/UsermiddleWare.js)

This middleware validates the username and password provided in the request headers. It checks if the username is "admin" and the password is also "admin". If the credentials are incorrect, it sends a 401 Unauthorized response.

### Kidney Validation Middleware -[text](Middlewares/KidneyValidationMiddleware.js)

This middleware validates the query parameters `kidneyid` and `kidneyhealth`. It checks if `kidneyid` is equal to "2" and `kidneyhealth` is equal to "good". If the parameters are incorrect, it sends a 400 Bad Request response.

### Calculate Request Middleware -[text](Middlewares/callculateNoOfReq.middleware.js)

This middleware counts the number of incoming requests and logs the count to the console.

### Time Taken Middleware -[text](Middlewares/TimeTaken.Middleware.js)

This middleware calculates the time taken to process each request and saves the request data to a file.

## Global Catches

Global catches are error-handling middleware functions that catch errors occurring in the application. They provide a centralized place to handle errors and send appropriate responses to the client.

- Exapmles
  [ //global catches--------------->
    app.use((err, req, res, next) => {
        res.status(500).json({
        msg: "bhai server fukgaya hain bad main ana",
    });
  });]

### Error Handling

Currently, global error handling middleware is commented out. Uncomment it to enable global error handling.

## Zod Validation

Zod is a TypeScript-first schema declaration and validation library. It provides a convenient way to define and validate data schemas.
- line[2,13-22,34-77]
### User Schema Validation

The `Userschema` validates the `email` and `password` fields of the request body. It ensures that the email is a valid email address and that the password meets certain criteria, such as minimum and maximum length, and includes at least one uppercase letter, one lowercase letter, one number, and one special character.

## Headers

Headers are key-value pairs sent in HTTP requests and responses. They provide additional information about the request or response, such as the content type, authorization credentials, and caching directives.

### Request Headers

The `userMiddleware` validates the `username` and `password` provided in the request headers. It expects the `username` to be "admin" and the `password` to also be "admin".

## Request Body

The request body contains data sent by the client to the server. It typically contains information needed to perform the requested action.

### Login Endpoint

The `/login` endpoint expects a JSON object containing `email` and `password` fields in the request body. It validates the provided credentials against the `Userschema` and sends a success response if the credentials are valid.

## Request Query

Request query parameters are key-value pairs appended to the end of a URL. They provide additional data to the server about the request.

### Health Endpoint

The `/health` endpoint expects query parameters `kidneyid` and `kidneyhealth`. It validates these parameters using the `kidneyMiddleware` and sends a success response if the parameters are correct.

### URLs
- http://localhost:3030/add
- http://localhost:3030/login
- http://localhost:3030//health
- http://localhost:3030/health?kidneyid=2&kidneyhealth=good

        
- **Protocol:** `http://`
  - This specifies the protocol used for communication between the client (browser) and the server. In this case, it's HTTP (Hypertext Transfer Protocol), which is a standard protocol used for transmitting data over the internet.

- **Hostname:** `localhost`
  - This is the domain name or IP address of the server. In this case, `localhost` refers to the current machine on which the client is running. It's commonly used for testing and development purposes.

- **Port:** `3030`
  - The port number indicates the specific endpoint on the server that the client wants to communicate with. Ports allow multiple services to run on the same machine. Here, the server is listening on port 3030.

- **Path:** `/health`
  - The path specifies the endpoint or resource on the server that the client wants to access. In this case, it's the `/health` endpoint, which may be responsible for checking the health status of some component (e.g., kidneys).

- **Query Parameters:** `kidneyid=2&kidneyhealth=good`
  - Query parameters are key-value pairs appended to the end of the URL, separated by `?` and `&`. They provide additional data to the server about the request.
  - `kidneyid=2`: This parameter indicates the ID of the kidney being checked. In this example, it's set to `2`.
  - `kidneyhealth=good`: This parameter specifies the health status of the kidney. Here, it's set to `good`.

- **login*:* 
  - sed the data via json format
  - `{
    "email":"a@gmail.com",
    "password":"25274@aU"
    }`

### strat the server with
- terminal
- cd directory
- npn start https://express-advance-backend.vercel.app

### Live link :

### Thankyou