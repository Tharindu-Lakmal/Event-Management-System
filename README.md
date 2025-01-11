<h1>Event Management System</h1>
<p>A robust Event Management System built with React (Frontend), Spring Boot (Backend), and MySQL as the database. This system focuses on maintainability, scalability, and user-friendly design, adhering to best practices in software development.</p>

---

## Features

### Backend
- **Event Management**: Create, update, delete, and fetch events.

### Frontend
- **Reusable Components**:
  - Button, and Input.
- **Pages**:
  - **Event List Page**: Displays all events.
  - **Event Detail Page**: Shows detailed event information.
  - **Event Creation Page**: Form for creating new events.
  - **Event Update Page**: Editable form for updating existing events.
- **Responsive Design**:
  - Fully optimized for desktop, tablet, and mobile screens.

---

## Tech Stack
- **Frontend**: React with CSS Modules/SCSS
- **Backend**: Spring Boot
- **Database**: MySQL Database

---

## Detailed Instructions to Set Up and Run the Application Locally

### Prerequisites
- Node.js: Download and install **Node.js** (includes npm).
- Install **MySQL** for Database.
- Install **Java** (for Spring Boot).
- Maven: Install **Maven** if not bundled with your Spring Boot project.

---

### Setting Up the Backend (Spring Boot)

1. Navigate to the `backend` directory:
   ```bash
   cd emsbackend
   
2. Create an environment file:
  In the project’s root directory, create a .env file and add the following environment variables
   ```bash
   DB_URL=jdbc:postgresql://localhost:5432/your_database_name
   DB_USERNAME=your_database_username
   DB_PASSWORD=your_database_password
   
3. Load the environment variables in Spring Boot:
  Add the **spring-boot-dotenv** dependency to **pom.xml** to enable **.env** file support:
   ```bash
   <dependency>
    <groupId>io.github.cdimascio</groupId>
    <artifactId>spring-boot-dotenv</artifactId>
    <version>3.1.0</version>
   </dependency>
   
4. Run the Spring Boot application:
   ```bash
   ./mvnw spring-boot:run

---

### Setting Up the Frontend (React)

1. Navigate to the `frontend` directory:
   ```bash
   cd emsfrontend
   
2. Install dependencies:
  Run the following command to install required packages
   ```bash
   npm install
   
3. Start the React development server:
   ```bash
   npm run dev

---
### Setting Up the Database (MySQL)
- Create a new database **EMS** in MySQL.

---

### Test the Application Locally

---

### ScreenShots

<img src="https://github.com/Tharindu-Lakmal/Tharindu-Lakmal/blob/main/images/listEvent.png" alt="html5" width="600"/> 
<img src="https://github.com/Tharindu-Lakmal/Tharindu-Lakmal/blob/main/images/eventDetail2.png" alt="html5" width="600"/> 
<img src="https://github.com/Tharindu-Lakmal/Tharindu-Lakmal/blob/main/images/addEvent.png" alt="html5" width="600"/> 
<img src="https://github.com/Tharindu-Lakmal/Tharindu-Lakmal/blob/main/images/updateEvent.png" alt="html5" width="600"/>
<img src="https://github.com/Tharindu-Lakmal/Tharindu-Lakmal/blob/main/images/updateDelete.png" alt="html5" width="600"/> 
