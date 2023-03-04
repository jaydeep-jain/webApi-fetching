
const express = require('express')
const axios = require('axios')

const app = express()

app.get('/users/:userId', async (req, res) => {
    const userId = req.params.userId;
  
    try {
      const response = await axios.get(`https://dummyjson.com/users/${userId}`)
      const user = {
        id: response.data.id,
      
      };
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching data from API')
    }
  });


  
  app.get('/:startUserId/:endUserId', async (req, res) => {
    const startUserId = (req.params.startUserId);
    const endUserId = (req.params.endUserId);
    const results = [];
  
    try {
      for (let userId = startUserId; userId <= endUserId; userId++) {
        const response = await axios.get(`https://dummyjson.com/users/${userId}`);
        results.push(response.data);
      }
  
      res.json(results);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error');
    }
  });
  

  
  

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

