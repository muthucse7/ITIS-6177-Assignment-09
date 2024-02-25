// Node.js 16.x support 
module.exports.handler = async (event, context) => {
  try {
    // Check if the required query parameter 'keyword' is present
    const keyword = event['queryStringParameters'] && event['queryStringParameters']['keyword'];

    if (!keyword) {
      throw new Error('Missing required query parameter: keyword');
    }

    const response = {
      statusCode: 200,
      body: JSON.stringify('Muthu Selvam says ' + keyword),
    };

    return response;
  } catch (error) {
    // Handle errors
    console.error('Error:', error.message);

    const response = {
      statusCode: 400,
      body: JSON.stringify({ error: error.message }),
    };

    return response;
  }
};
