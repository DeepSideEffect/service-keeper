const webServiceName = 'smart-proxy';
const axios = require('axios');
const { schedule } = require('@netlify/functions');

const handler = async (_event, _context) => {
	await axios.get(`https://${webServiceName}.onrender.com/`);
	return {
		statusCode: 200,
		body: 'Service is awake'
	};
};

exports.handler = schedule("*/10 * * * *", handler); // Exécution toutes les 10 minutes
