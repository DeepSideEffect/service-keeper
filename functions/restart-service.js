const axios = require('axios');
const { schedule } = require('@netlify/functions');

const handler = async (_event, _context) => {
	const res = await axios(`https://api.render.com/v1/services/${process.env.RENDER_SERVICE_ID}/deploys`, {
		method: 'post',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + process.env.RENDER_SERVICE_TOKEN
		},
		data: {}
	});
	const src = res.data;
	return {
		statusCode: 200,
		body: JSON.stringify(src)
	};
};

exports.handler = schedule("30 3 * * *", handler); // Exécution quotidienne à 3h30 UTC (soit 4h30 du matin en hiver et 5h30 du matin en été pour la France)
