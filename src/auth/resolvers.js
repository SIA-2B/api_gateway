import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

import personalInfoResolvers from '../personalInfo/resolvers';
import {authInfo} from '../Micro';

//const URL = `http://${url}:${port}/${entryPoint}`;
// const URL = `http://${url}/${entryPoint}`;
const URL = `http://${authInfo}/${entryPoint}`;

const resolvers = {
	Query: {
		allAuth: (_) =>
			getRequest(URL, ''),
		AuthById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
	},
	Mutation: {
		createAuth: async (_, { auth }) =>{
			const username = auth.username
			const responsePersonas = await personalInfoResolvers.Query.allPersonas()
			let existsUsername = responsePersonas.find(user => user.usernamePersona === username)
			//console.log(existsUsername)
			if(existsUsername){				
				const response = await generalRequest(`${URL}/`, 'POST', auth)
				//console.log(response.data,"Esto es lo que llega del personlaInfo")
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
