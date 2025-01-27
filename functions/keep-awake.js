const axios = require('axios');
const { schedule } = require('@netlify/functions');

const handler = async (event, context) => {
	const res = await axios.get('https://mon-service.onrender.com/');
	return {
		statusCode: 200,
		body: 'Service is awake'
	};
};

exports.handler = schedule("*/10 * * * *", handler); // Exécution toutes les 10 minutes
