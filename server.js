const express = require('express'); // Import Express.js
const app = express(); // Create an Express application
const PORT = process.env.PORT || 3000; // Define the port (default: 3000)

// Define a route for the root URL ("/")
app.get('/', (req, res) => {
    res.send('Hello, World! Welcome to my Node.js app.');
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
