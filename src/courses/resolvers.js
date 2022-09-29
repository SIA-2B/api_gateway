import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allCursos: (_) =>
			getRequest(URL, ''),
		cursosById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
	}
};

export default resolvers;
