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

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allDatos: (_) =>
			getRequest(`${URL}/${Datos}`, ''),
		datosById: (_, { student_id, study_plan_name }) =>
			generalRequest(`${URL}/${cFilter}`, 'GET'),
	},
	Mutation: {
		createDatos: (_, { datos }) =>
			generalRequest(`${URL}/${Datos}`, 'POST'),
		deleteDatos: (_, { student_id, study_plan_name }) =>
			generalRequest(`${URL}/${Datos}`, 'DELETE')
	}
};

export default resolvers;
