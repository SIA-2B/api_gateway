import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

//holaMundo
const resolvers = {
	Query: {
		allCursos: (_) =>
			getRequest(`${URL}/cursos`, ''),
		cursosById: (_, { id }) =>
			generalRequest(`${URL}/cursos/${id}`, 'GET'),
		cursosByPlan: (_, { idPlan }) =>
			generalRequest(`${URL}/cursos/cursosByPlan/${idPlan}`, 'GET'),
		allGrupos: (_) =>
			generalRequest(`${URL}/grupos`, 'GET'),
		gruposByCurso: (_, { idCurso }) =>
			generalRequest(`${URL}/grupos/${idCurso}`, 'GET'),
		allPlanes: (_) =>
			generalRequest(`${URL}/planEstudios`, 'GET'),
	},
	Mutation: {
		createCourses: (_, {cursos}) =>
			generalRequest(`${URL}/cursos`, 'POST', cursos),
		updateCourses: (_, { id, cursos }) =>
			generalRequest(`${URL}/cursos/${id}`, 'PUT', cursos),
		deleteCourses: (_, { id }) =>
			generalRequest(`${URL}/cursos/${id}`, 'DELETE'),
		plusGrupos: (_, { idGrupo, suma }) =>
			generalRequest(`${URL}/grupos/updateCupo/${idGrupo}/${suma}`, 'PUT','GET'),
	}
};

export default resolvers;
