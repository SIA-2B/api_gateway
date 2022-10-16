import { generalRequest, getRequest } from '../utilities';
import { 
	url, 
	port, 
	entryPoint, 
	Datos, 
	dFilter, 
	Course,
	cFilter,
	PutNota,
	credit
} from './server';
import personalInfoResolvers from '../personalInfo/resolvers';

const URL = `http://${url}/${entryPoint}`;
console.log(`${URL}/${dFilter}`);
const resolvers = {
	Query: {
		allDatos: (_) =>
			getRequest(`${URL}/${Datos}`, ''),
		datosById: async (_, { datos }) =>{
			const student_id = datos['student_id']
			const responsePersonas = await personalInfoResolvers.Query.personaById(
				_,
				{id:student_id}
			)
			if(responsePersonas['idPersona'] == student_id){
				const response = await generalRequest(`${URL}/${dFilter}`, 'GET', datos)
				return responsePersonas.error || responsePersonas === 404
				? responsePersonas
				: response;

			}
		},
			
		allCourses: (_) =>
			getRequest(`${URL}/${Course}`, ''),
		coursesById: async (_, { datos }) =>{
			const student_id = datos['student_id']
			const responsePersonas = await personalInfoResolvers.Query.personaById(
				_,
				{id:student_id}
			)
			if(responsePersonas['idPersona'] == student_id){
				const response = await generalRequest(`${URL}/${cFilter}`, 'GET', datos)
				return responsePersonas.error || responsePersonas === 404
				? responsePersonas
				: response;

			}
		},			
		creditsById: (_, { datos }) =>
			generalRequest(`${URL}/${credit}`, 'GET', datos)
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
		updateNota: (_, { datos }) => //update tabla datos
			generalRequest(`${URL}/${PutNota}`, 'PUT', datos),
		deleteCourses: (_, { courses}) =>
			generalRequest(`${URL}/${Course}`, 'DELETE', courses)
	}
};

export default resolvers;
