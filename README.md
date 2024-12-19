# React and .NET CRUD Operations Application

This is a full-stack CRUD (Create, Read, Update, Delete) application developed using React.js for the frontend, .NET Core 6 for the backend, and MySQL as the database. The application allows users to manage details like Name, Address, State, District, Date of Birth, and Language.

## Project Setup Instructions

### Step 1: Clone the Repository
#### 1. Clone the repository to your local system:
   git clone https://github.com/your-repo-url
   cd your-repo-folder

### Step 2: Backend Setup
#### 1. Navigate to the backend folder:
   cd dotnet-crud-api
#### 2. Install backend dependencies:
   dotnet restore
#### 3. Configure the MySQL database:
   Open the appsettings.json file in the dotnet-crud-api folder.
   Update the connection string under the ConnectionStrings section to match your MySQL credentials:<br>
   "ConnectionStrings": {
  "DefaultConnection": "Server=localhost;Database=user_form_db;User=root;Password=your_password;"
   }
  <br> Replace your_password with your MySQL password.
#### 4. Apply database migrations to create the required tables:
   dotnet ef database update
#### 5. Run the backend server:
   dotnet run
   The server will start on a default port (e.g., http://localhost:64404).
   <br>Ensure the backend API is accessible by visiting http://localhost:64404/api/v1/users in your browser or Postman (this should return a list of users, if any).

### Step 3: Frontend Setup
#### 1.Navigate to the frontend folder:<br>
     cd react-crud-app
#### 2. Install frontend dependencies:<br>
     npm install
#### 3. Start the React development server:<br>
    npm start
   The frontend server will start on http://localhost:3000.
#### 4. Access the application:
   Open your browser and go to http://localhost:3000 to interact with the application.    



    
