import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allAuth: (_) =>
			getRequest(URL, ''),
		AuthById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
	},
	Mutation: {
		createAuth: (_, { auth }) =>
			generalRequest(`${URL}/`, 'POST', auth),
		updateAuth: (_, { id, auth }) =>
			generalRequest(`${URL}/${id}`, 'PUT', auth),
		deleteAuth: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'DELETE')
	}
};

export default resolvers;
