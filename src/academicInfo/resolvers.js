import { generalRequest, getRequest } from '../utilities';
import { 
	url, 
	port, 
	entryPoint, 
	Datos, 
	dFilter, 
	Course,
	cFilter,
	PutNota
} from './server';

const URL = `http://${url}/${entryPoint}`;
console.log(`${URL}/${dFilter}`);
const resolvers = {
	Query: {
		allDatos: (_) =>
			getRequest(`${URL}/${Datos}`, ''),
		datosById: (_, { datos }) =>
			generalRequest(`${URL}/${dFilter}`, 'GET', datos),
		allCourses: (_) =>
			getRequest(`${URL}/${Course}`, ''),
		coursesById: (_, { datos }) =>
			generalRequest(`${URL}/${cFilter}`, 'GET', datos)
	},
	Mutation: {
		createDatos: (_, { datos }) =>
			generalRequest(`${URL}/${Datos}`, 'POST', datos),
		deleteDatos: (_, { datos }) =>
			generalRequest(`${URL}/${Datos}`, 'DELETE', datos),

		createCourses: (_, { courses }) =>
			generalRequest(`${URL}/${Course}`, 'POST', courses),
		updateCourses: (_, { courses }) =>
			generalRequest(`${URL}/${Course}`, 'PUT', courses),
		updateNota: (_, { datos }) =>
			generalRequest(`${URL}/${PutNota}`, 'PUT', datos),
		deleteCourses: (_, { courses}) =>
			generalRequest(`${URL}/${Course}`, 'DELETE', courses)
	}
};

export default resolvers;
