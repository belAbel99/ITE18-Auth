# ITE18-Auth-Midterm Project-SILMARO
# Login-Logout Authentication

### This is my guide on how to implement login-logout authentication in a React application with a Strapi backend.

# Prerequisites

#### Basic knowledge of React and Strapi
#### Node.js and NPM installed on your computer
#### A running Strapi backend
#### Technologies Used
#### React
#### Strapi
#### Axios
#### React Router DOM
#### Bootstrap
#### Reactstrap
#### JWT
#### Setup

## Install the dependencies using NPM:

#### npm install //on client and server folder

## Create a .env file in the root of your project with the following contents:

#### REACT_APP_API_URL=http://localhost:1337
##### Replace http://localhost:1337 with the URL of your Strapi backend.

## Run the development server:

#### npm start
##### Open your web browser and navigate to http://localhost:3000 to view the application.

### For strapi

#### npm run develop
#### Open your web browser and navigate to http://localhost:1337/admin to manage you backend/server.

## Procedure

#### 1. Create a login page component with a form that allows users to enter their username and password.
#### 2. On form submission, send a POST request to the Strapi authentication endpoint /auth/local with the user's credentials.
#### 3. If the login is successful, store the JWT token in local storage and redirect the user to the home page.
#### 4. Implement a protected route component that checks if the user is authenticated by verifying the JWT token in local storage.
#### 5. If the user is not authenticated, redirect them to the login page.
#### 6. Create a logout button that removes the JWT token from local storage and redirects the user to the login page.

## Process

### Login

#### 1. Create a login page component with a form that has input fields for username and password.
#### 2. Import axios and toast to send requests and display notifications, respectively.
#### 3. Create a handleSubmit function that prevents the default form submission behavior, and sends a POST request to the Strapi authentication endpoint /auth/local with the user's credentials.
#### 4. If the login is successful, the Strapi backend will respond with a JWT token. Store this token in local storage using the localStorage.setItem() method.
#### 5. Redirect the user to the home page using the useHistory.push() method.
#### 6. If there is an error during login, display an error message using toast.error().

### Protected Routes

#### 1. Create a ProtectedRoute component that takes a Component prop and renders it only if the user is authenticated.
#### 2. Use the userData function from helpers.js to retrieve the JWT token from local storage.
#### 3. If the JWT token is not present, redirect the user to the login page using the useNavigate() hook.
#### 4. Otherwise, render the Component prop passed to the ProtectedRoute component.

### Logout

#### 1. Create a logout button component.
#### 2. Import toast and useNavigate().
#### 3. Create a handleLogout function that removes the JWT token from local storage using the localStorage.removeItem() method.
#### 4. Display a success message using toast.success().
#### 5. Redirect the user to the login page using the useNavigate() hook.
