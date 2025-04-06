require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');



const app = express();
const PORT = process.env.PORT || 5000;
const SECRET_KEY = process.env.SECRET_KEY || "your_secret_key";



app.use(cors({
  origin: 'http://localhost:8080', // Your frontend URL
  credentials: true
}));
app.use(bodyParser.json());
app.use(cookieParser());
// Dummy user storage (for testing only)
let users = [
  {
    //add user for test
    id: 1,
    username: "admin",
    password: "admin123", // admin123

  }
];

// Middleware for Protected Routes
const authenticateToken = (req, res, next) => {
  const token = req.headers["authorization"]?.split(' ')[1] || req.cookies?.token;
  if (!token) return res.status(401).json({ message: "Access Denied" });
  
  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid Token" });
    req.user = user;
    next();
  });
};

// AUTHENTICATION ENDPOINTS

// Register Route
app.post("/api/auth/register", async (req, res) => {
  try {
    const { username, password, email } = req.body;
    
    // Validation
    if (!username || !password || !email) {
      return res.status(400).json({ 
        success: false,
        message: "All fields are required" 
      });
    }
    
    // Check if user exists
    if (users.find(user => user.username === username)) {
      return res.status(400).json({ 
        success: false,
        message: "Username already exists" 
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const userId = users.length + 1;
    
    // Create new user
    const newUser = { 
      id: userId,
      username, 
      password: password,
      email,
      displayName: username
    };
    
    users.push(newUser);
    
    // Generate token
    const token = jwt.sign(
      { id: userId, username },
      SECRET_KEY,
      { expiresIn: "24h" }
    );

    // Return user info (without password)
    const userResponse = { 
      id: newUser.id,
      username: newUser.username,
      email: newUser.email,
      displayName: newUser.displayName
    };
    
    res.json({
      success: true,
      message: "User registered successfully",
      user: userResponse,
      token
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ success: false, message: "Server error during registration" });
  }
});

// Login Route
app.post("/api/auth/login", async (req, res) => {
  
  try {
    const { username, password } = req.body;
    
    const user = users.find(user => user.username === username);
    
    // Check if user exists and password matches
    if (!user || !(await compare(password, user.password))) {
      return res.status(401).json({ 
        success: false,
        message: "Invalid username or password" 
      });
    }

    // Generate token
    const token = jwt.sign(
      { id: user.id, username: user.username },
      SECRET_KEY,
      { expiresIn: "24h" }
    );

    // Return user info (without password)
    const userResponse = { 
      id: user.id,
      username: user.username,
      email: user.email,
      displayName: user.displayName
    };

    res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Only use HTTPS in production
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
      });
    
    res.json({
      success: true,
      user: userResponse,
      token
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ success: false, message: "Server error during login" });
  }
});

// Logout Route
app.post("/api/auth/logout", (req, res) => {
  // With JWT, the client should discard the token
  // Server-side we just confirm the logout action
  res.clearCookie('token');
  res.json({ success: true, message: "Logged out successfully" });
});

// Get Current User
app.get("/api/auth/me", authenticateToken, (req, res) => {
  const user = users.find(u => u.id === req.user.id);
  
  if (!user) {
    return res.status(404).json({ 
      success: false,
      message: "User not found" 
    });
  }

  // Return user info (without password)
  const userResponse = { 
    id: user.id,
    username: user.username,
    email: user.email,
    displayName: user.displayName
  };
  
  res.json({
    success: true,
    user: userResponse
  });
});

// EXISTING ENDPOINTS

// Fetch Users Route
app.get("/users", (req, res) => {
  res.json(users); // Hide passwords
});

// Protected Route Example
app.get("/protected", authenticateToken, (req, res) => {
  res.json({ message: "This is a protected route", user: req.user });
});

// Add a test user for development (remove in production)
const createTestUser = async () => {
  if (users.length === 0) {
    const hashedPassword = await bcrypt.hash("demo123", 10);
    users.push({
      id: 1,
      username: "demo",
      password: hashedPassword,
      email: "demo@example.com",
      displayName: "Demo User"
    });
    console.log("Test user created: demo / demo123");
  }
};

// Start Server
app.listen(PORT, async () => {
  await createTestUser();
  console.log(`Server running on http://localhost:${PORT}`);
});