import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allEPSs: (_) =>
			getRequest(`${URL}/EPSs`, ''),
		EPSById: (_, { id }) =>
			generalRequest(`${URL}/EPS/${id}`, 'GET'),
	},
	Mutation: {
		createEPS: (_, { eps }) =>
			generalRequest(`${URL}/EPS`, 'POST', eps),
		updateEPS: (_, { id, eps }) =>
			generalRequest(`${URL}/EPS/${id}`, 'PUT', eps),
		deleteEPS: (_, { id }) =>
			generalRequest(`${URL}/EPS/${id}`, 'DELETE'),
	}
};

export default resolvers;