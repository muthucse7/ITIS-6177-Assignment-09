const express = require('express');
const axios = require('axios');

const app = express();
// Configure the port
const port = 3000;

app.get('/say', async(req, res) => {
    try{
        const keyword = req.query.keyword;
        // Configure the AWS service endpoint
        const response = await axios.get('https://wr3jorgv727zr5s6umrq7ad6we0ccdrg.lambda-url.us-east-1.on.aws/',{
            params: {
                keyword: keyword
            }
        });
        res.send(response.data);
    } catch (error) {
        // Handle error here
        console.error(error);
        res.status(500).send('Lambda function Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
