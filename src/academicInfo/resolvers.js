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
	credit,
	doble
} from './server';
import personalInfoResolvers from '../personalInfo/resolvers';
import courseResolvers from '../courses/resolvers';
import gradeResolvers from '../grades/resolvers';
import {RabbitMQ} from '../consumerRMQ';

const URL = `http://${url}/${entryPoint}`;

const resolvers = {
	Query: {
		// Datos de todos los estudiantes
		allDatos: (_) =>
			getRequest(`${URL}/${Datos}`, ''),
		// 
		datosById: async (_, { datos }) => {
			return await RabbitMQ(datos.student_id) ? generalRequest(`${URL}/${dFilter}`, 'GET', datos) : null},
		// 
		callingById: async (_, {datos}) => {
			return await RabbitMQ(datos.student_id) ? generalRequest(`${URL}/${doble}`, 'GET', datos) : null},
		// 
		allCourses: (_) =>
			getRequest(`${URL}/${Course}`, ''),
		// 
		coursesById: async (_, { datos }) =>{
			return await RabbitMQ(datos.student_id) ? generalRequest(`${URL}/${cFilter}`, 'GET', datos) : null},
			// 
		creditsById: async (_, { datos }) =>{
			return await RabbitMQ(datos.student_id) ? generalRequest(`${URL}/${credit}`, 'GET', datos) : null},
	},
	Mutation: {
		//
		createDatos: (_, { datos }) =>
			generalRequest(`${URL}/${Datos}`, 'POST', datos),
		//
		deleteDatos: (_, { datos }) =>
			generalRequest(`${URL}/${Datos}`, 'DELETE', datos),
		//
		createCourses: async (_, { courses }) =>{
			if(await RabbitMQ(courses.student_id)){
				const Materias = await gradeResolvers.Query.allGradesByStudent(_,{id: parseInt(courses.student_id)})
				Materias.forEach(async function(materia) {
					const plan = await courseResolvers.Query.cursosById(_,{id:`${materia.courseId}`})
					console.log(plan)
					const curso = {
						"student_id": courses.student_id,
					    "study_plan_name": courses.study_plan_name,
					    "codigo_id": `${materia.courseId}`,
					    "name": materia.courseName,
					    "credit": plan.creditos,
					    "periodo": materia.gradePeriod,
					    "nota": materia.gradeFinal,
					    "plan": plan.tipologia
					}
					generalRequest(`${URL}/${Course}`, 'POST', curso)
				})
				return "Cursos adicionados"
			}else {return null}
		},	
		//
		updateCourses: async (_, { courses }) => {
			if(await RabbitMQ(courses.student_id)){
				const Materias = await gradeResolvers.Query.allGradesByStudent(_,{id: parseInt(courses.student_id)})
				Materias.forEach(async function(materia) {
					const plan = await courseResolvers.Query.cursosById(_,{id:`${materia.courseId}`})
					console.log(plan)
					const curso = {
						"student_id": courses.student_id,
					    "study_plan_name": courses.study_plan_name,
					    "codigo_id": `${materia.courseId}`,
					    "name": materia.courseName,
						"periodo": materia.gradePeriod,
						"nota": materia.gradeFinal
					}
					generalRequest(`${URL}/${Course}`, 'PUT', curso)
				})
				return "Cursos actualizados"
			}else {return null}
		},
		//
		updateNota: async (_, { datos }) => {//update tabla datos
			return await RabbitMQ(datos.student_id) ? generalRequest(`${URL}/${PutNota}`, 'PUT', datos) : null},
		//
		deleteCourses: (_, { courses}) =>
			generalRequest(`${URL}/${Course}`, 'DELETE', courses)
	}
};

export default resolvers;
