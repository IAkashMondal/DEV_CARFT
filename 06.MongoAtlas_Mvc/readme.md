
### MVC (Model-View-Controller):

        - To maintain an MVC (Model-View-Controller) structure in your Node.js project, you should organize your files and directories in a way that separates the different components of your application. Here’s a recommended structure:

        Models: This is where you define your Mongoose schemas and models.
        Views: This is where you keep your frontend templates (if you are using a templating engine).
        Controllers: This is where you handle your business logic and interact with the models.
        Routes: This is where you define your application’s routes.
        Config: This can be used for configuration files such as your database connection.
        Index.js: This is your main entry point for the application.
        Here’s an example structure:

## STRUCTURE:
            project-root/
            │
            ├── config/
            │   └── db.js
            │
            ├── controllers/
            │   └── userController.js
            │
            ├── models/
            │   └── userModel.js
            │
            ├── routes/
            │   └── userRoutes.js
            │
            ├── views/
            │   └── userView.ejs
            │
            ├── .env
            ├── index.js
            ├── package.json
            └── README.md


