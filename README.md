# INTERNLY — Internship Management System

INTERNLY is a full-stack Node.js + MySQL-based internship management system built for students and companies to manage internship listings, applications and more.

**Note:**
This was a collaborative academic group project built as part of our assignment. Contributions were made by four team members including myself.

##  Features

###  Student Portal
- Register, log in, and manage profile
- Browse internships with filters
- Apply to internships
- Upload CV/resume (stored server-side)

###  Company Portal
- Register, log in, and manage profile
- Post internships with custom details
- Update and delete internships
- View and manage student applications
- View uploaded resumes

##  Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js
- **Database**: MySQL
- **File Upload**: [Formidable](https://www.npmjs.com/package/formidable)
- **Session Management** (simple Node.js session)
- **Environment Config**: `.env`

## Future Works

- Move to Express.js with express-session for better routing and session handling
- Allow students to edit/delete applications before the deadline

##  Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Hami-K/Internly.git
cd Internly
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file by copying the template:

```bash
cp .env.example .env
```

Then fill in your DB details in `.env`:

```
DB_HOST=localhost
DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password
```

---

### 4. Initialize the Database

Make sure your MySQL server is running.

Dont worry running the server will automatically create all the database tables.

### 5. Start the Server

```bash
node server.js
```

Then open [http://localhost:8080](http://localhost:8080) in your browser.

---

##  Folder Structure

```
Internly/
├── actions.js                # Main app routing and logic
├── db_creation.js            # Auto-creates DB and tables
├── server.js                 # HTTP server with all routes
├── session.js                # Session handling module
├── .env.example              # Sample env file
├── css/                      # Static assets (CSS)
├── uploads/                  # Uploaded resumes stored here
├── js/
├── images/                   
├── views/                    # HTML frontend pages
│   ├── student/
│   └── companies/
├── package.json
└── README.md
```



