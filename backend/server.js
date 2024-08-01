const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express(); // creates express application
const port = 8080;

// cors is used to handle frontend requests for the server
app.use(cors()); // applies cors to app & allows frontend on different port

// get the image based on keyword
// req is the request object with info on http request, res is the response object to client
app.get('/get/image', (req, res) => {
    const keyword = req.query.keyword; // retrieves keyword query parameter
    
    // logic to determine the image URL based on the keyword
    let imageUrl = '';
    if (keyword === 'string') {
      imageUrl = 'http://localhost:8080/images/stringdiagram.png';
    } 
    else if (keyword === 'list'){
      imageUrl = 'http://localhost:8080/images/listdiagram.png';
    }
    else {
      return res.status(404).json({ error: 'Image not found' });
    }
  
    res.json({ imageUrl }); // sends a json response containing the imageUrl
  });
  
  // serve static files from the 'public' directory
  app.use('/images', express.static(path.join(__dirname, 'public/images')));
  
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });