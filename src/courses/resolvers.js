import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

<<<<<<< HEAD
import {coursesInfo} from '../Micro';

// const URL = `http://${url}/${entryPoint}`;
const URL = `http://${coursesInfo}/${entryPoint}`;
=======
const URL = `http://${url}:${port}/${entryPoint}`;
>>>>>>> db8a05d00c471502732d204fb906564d2725bea4

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
