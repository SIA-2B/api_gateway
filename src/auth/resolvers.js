import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

import personalInfoResolvers from '../personalInfo/resolvers';

//const URL = `http://${url}:${port}/${entryPoint}`;
const URL = `http://${url}/${entryPoint}`;

const resolvers = {
	Query: {
		allAuth: (_) =>
			getRequest(URL, ''),
		AuthById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
	},
	Mutation: {
		createAuth: async (_, { auth }) =>{
			const responsePersonas = await personalInfoResolvers.Query.personaById(
				_,
				{id: 6}
			)
			if(responsePersonas['nombrePersona'] == "David"){
				const response = await generalRequest(`${URL}/`, 'POST', auth)
				return responsePersonas.error || responsePersonas === 404
				? responsePersonas
				: response;

			}			
			
		},
		updateAuth: (_, { id, auth }) =>
			generalRequest(`${URL}/${id}`, 'PUT', auth),
		deleteAuth: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'DELETE')
	}
};

export default resolvers;
