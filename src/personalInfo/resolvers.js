import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

import {personaInfo} from '../Micro';

const URL = `http://${url}:${port}/${entryPoint}`;
//const URL = `http://${personaInfo}/${entryPoint}`;

const resolvers = {
	Query: {
		allEPSs: (_) =>
			getRequest(`${URL}/EPSs`, ''),
		EPSById: (_, { id }) =>
			generalRequest(`${URL}/EPS/${id}`, 'GET'),

		allPaises: (_) =>
			getRequest(`${URL}/paises`, ''),
		EPSById: (_, { id }) =>
			generalRequest(`${URL}/pais/${id}`, 'GET'),

		allCiudades: (_) =>
			getRequest(`${URL}/ciudades`, ''),
		ciudadById: (_, { id }) =>
			generalRequest(`${URL}/ciudad/${id}`, 'GET'),

		allEtnias: (_) =>
			getRequest(`${URL}/etnias`, ''),
		etniaById: (_, { id }) =>
			generalRequest(`${URL}/etnia/${id}`, 'GET'),

		allPersonas: (_) =>
			getRequest(`${URL}/personas`, ''),
		personaById: (_, { id }) =>
			generalRequest(`${URL}/persona/${id}`, 'GET'),
		personaByNUIP: (_, { nuip }) =>
			generalRequest(`${URL}/persona/nuip/${nuip}`, 'GET'),
		personaByUsername: (_, { username }) =>
			generalRequest(`${URL}/persona/user/${username}`, 'GET'),
	},
	Mutation: {
		createEPS: (_, { eps }) =>
			generalRequest(`${URL}/EPS`, 'POST', eps),
		updateEPS: (_, { id , eps }) =>
			generalRequest(`${URL}/EPS/${id}`, 'PUT', eps),
		deleteEPS: (_, { id }) =>
			generalRequest(`${URL}/EPS/${id}`, 'DELETE'),

		createPais: (_, { pais }) =>
			generalRequest(`${URL}/pais`, 'POST', pais),
		updatePais: (_, { id , pais }) =>
			generalRequest(`${URL}/pais/${id}`, 'PUT', pais),
		deletePais: (_, { id }) =>
			generalRequest(`${URL}/pais/${id}`, 'DELETE'),

		createCiudad: (_, { ciudad }) =>
			generalRequest(`${URL}/ciudad`, 'POST', ciudad),
		updateCiudad: (_, { id , ciudad }) =>
			generalRequest(`${URL}/ciudad/${id}`, 'PUT', ciudad),
		deleteCiudad: (_, { id }) =>
			generalRequest(`${URL}/ciudad/${id}`, 'DELETE'),

		createEtnia: (_, { etnia }) =>
			generalRequest(`${URL}/etnia`, 'POST', etnia),
		updateEtnia: (_, { id , etnia }) =>
			generalRequest(`${URL}/etnia/${id}`, 'PUT', etnia),
		deleteEtnia: (_, { id }) =>
			generalRequest(`${URL}/etnia/${id}`, 'DELETE'),

		createPersona: (_, { persona }) =>
			generalRequest(`${URL}/persona`, 'POST', persona),
		updatePersona: (_, { id , persona }) =>
			generalRequest(`${URL}/persona/${id}`, 'PUT', persona),
		deletePersona: (_, { id }) =>
			generalRequest(`${URL}/persona/${id}`, 'DELETE'),
	},
};

export default resolvers;