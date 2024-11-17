import axios from 'axios';

export const cscApi = axios.create({
	baseURL: 'https://api.countrystatecity.in/v1',
	headers: {
		'Content-Type': 'application/json',
		'X-CSCAPI-KEY': 'Y0R5R3FWT0NoV3BOSUUwdzlIU3NwRTBFZlMyNU55eFYxd3dJdGVPWA==',
	},
});
