# Project README

Welcome to our project! Below you'll find instructions on how to set up and use this project, as well as an overview of its code structure.

## Getting Started

To start this project, follow these steps:

1. **Navigate to Project Directory**: If the project is not in the current folder, use the `cd` command to navigate to the project directory.

    ```bash
    cd "Your project"
    ```

2. **Install Dependencies**: Install project dependencies using npm.

    ```bash
    npm install
    ```

3. **Run Development Server**: Start the development server.

    ```bash
    npm run dev
    ```

## Administrator Access

To access the administrator functionalities, navigate to the following URL in your web browser:

[http://localhost:3000/administrator/login](http://localhost:3000/administrator/login)

You'll need to provide the credentials provided in the `administratorLogin.txt` file to log in. Once logged in, you can add or delete users associated with the tenant.

## Code Structure

The project has the following code structure:

```
└── 📁src
    └── 📁app
        └── 📁auth
            └── 📁admin
                └── page.tsx
            └── 📁administrator
                └── 📁dashboard
                    └── page.tsx
                └── 📁deleteTenant
                    └── page.tsx
                └── 📁login
                    └── page.tsx
            └── 📁dashboard
                └── page.tsx
            └── 📁forgot-password
                └── page.tsx
            └── 📁login
                └── page.tsx
            └── 📁manager
                └── page.tsx
            └── 📁register
                └── page.tsx
            └── 📁reset-password
                └── 📁[email]
                    └── page.tsx
        └── 📁api
            └── 📁auth
                └── 📁administrator
                    └── 📁dashborad
                        └── route.ts
                    └── 📁login
                        └── route.ts
                └── 📁createRoles
                    └── route.ts
                └── 📁forgot-password
                    └── route.ts
                └── 📁login
                    └── route.ts
                └── 📁register
                    └── route.ts
                └── 📁reset-password
                    └── route.ts
                └── 📁[...nextauth]
                    └── options.ts
                    └── route.ts
        └── favicon.ico
        └── globals.css
        └── layout.tsx
        └── page.tsx
        └── 📁provider
            └── sessionProvider.tsx
    └── 📁components
        └── homeHere.tsx
        └── RemoveButton.tsx
        └── signoutButton.tsx
        └── Toast.tsx
    └── 📁config
        └── env.ts
        └── mail.ts
    └── 📁database
        └── mongo.config.ts
    └── 📁emails
        └── ForgotPasswordEmail.tsx
    └── middleware.ts
    └── 📁models
        └── User.ts
    └── types.ts
    └── 📁validator
        └── authValidationSchema.ts
        └── ErrorReporter.ts
```

This structure organizes the project into different directories based on their functionality, making it easier to navigate and maintain.

I had already put some of the data for the manager,admin etc of a particular organisation. To have a particular page to be protected for the user
