### Authebtications

### Questins :
- allow only signin users to fetch the resuls 
### npm instal:
- npm i
- npm i express nodemon jesonwebtoken
### start server:
- cd directory
- npm start

### Topics:
 ## 1.Hashing:
    -  it's critical to never store passwords in plain text. This is because if a hacker gains access to your database, they could easily steal user credentials.

    Hashing provides a secure way to store passwords. A hashing function takes a password as input and generates a unique, fixed-length string of characters called a hash. This hash cannot be easily reversed back into the original password, making it much more difficult for attackers to exploit even if they breach your database.
    we Encrypit to save data and Dycript to acess data
    - example
        password : `fagH6@90`
        Maybe hash: `$2y$10$abcdefghijklmno$pqlmnkojigfedcba`
    **bcrypt**: A Popular Choice for Password Hashing, alway use async and await for hashing
 ## 2. JWT:
   - JWT, or JSON Web Token, is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between two parties as a JSON object. It's often used for authorization purposes in web applications.

        Key Components of a JWT:

        JSON Object: The core information in a JWT is structured as a JSON object with two main parts:

        Header: This contains metadata about the token, such as the signing algorithm used (e.g., HMAC SHA-256).
        Payload: This carries the actual claims, which are pieces of information about the user or the application. These claims can include user ID, username, roles, permissions, expiration time, and more.
        Digital Signature: The JWT is digitally signed using a cryptographic algorithm and a secret key. This signature ensures the integrity of the claims within the payload and prevents unauthorized modification.
 - it token is inrocet status code will be 403

## 3. Local storage:
 -Local storage is a feature provided by web browsers that allows websites to store data on the user's device. This data persists even after the browser window is closed or the user navigates to a different page on the same website. Here's how it works with an example:

<<<<<<< HEAD
### thankyou 
=======
### thankyou 
>>>>>>> 3e56e6c71c042aeecbd2aeef5cc95de2a07d99dc
