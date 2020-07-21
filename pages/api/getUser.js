import getData from '../../utils/getData';

const api = async (request, response) => {
	const data = await getData('sineto');
	response.send(data);
};

export default api;
