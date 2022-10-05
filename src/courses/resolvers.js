import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;


const resolvers = {
	Query: {
		allCursos: (_) =>
			getRequest(`${URL}/cursos`, ''),
		cursosById: (_, { id }) =>
			generalRequest(`${URL}/cursos/${id}`, 'GET'),
		cursosByPlan: (_, { idPlan }) =>
			generalRequest(`${URL}/cursos/cursosByPlan/${idPlan}`, 'GET'),
	},
	Mutation: {
		createCourses: (_, {cursos}) =>
			generalRequest(`${URL}/cursos`, 'POST', cursos),
		updateCourses: (_, { id, cursos }) =>
			generalRequest(`${URL}/cursos/${id}`, 'PUT', cursos),
		deleteCourses: (_, { id }) =>
			generalRequest(`${URL}/cursos/${id}`, 'DELETE'),
	}
};

export default resolvers;
