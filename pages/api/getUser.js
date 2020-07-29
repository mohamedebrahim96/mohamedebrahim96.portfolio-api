import getData from '../../utils/getData';

const api = async (request, response) => {
	const data = await getData('mohamedebrahim96');
	response.send(data);
};

export default api;
