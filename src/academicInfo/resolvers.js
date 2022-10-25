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
		createDatos: (_, { datos }) =>
			generalRequest(`${URL}/${Datos}`, 'POST', datos),
		deleteDatos: (_, { datos }) =>
			generalRequest(`${URL}/${Datos}`, 'DELETE', datos),

		createCourses: async (_, { courses }) =>{
			// const responsePersonas = await personalInfoResolvers.Query.personaById(
			// 	_,
			// 	{id:student_id}
			// )
			const student_id = parseInt(courses.student_id)
			if(await RabbitMQ(student_id)){
				const Materia = await gradeResolvers.Query.gradeById(_,{student})
				console.log(Materia)
				return "vista de cursos"
				// for(let i = 0; i< Materia.length; i++){
				// 	const Materia_id =  Materia[i]
				// 	const materia_student_id = Materia_id['studentId'] 
				// 	const materia_grade_period = Materia_id['gradePeriod']//Periodo Grade_ms
				// 	const materia_course_id = Materia_id['courseId']


					// if(materia_student_id == student_id &&  materia_grade_period == Periodo && materia_course_id == course_id){
					// 	//console.log(Materia[i])
					// 	courses['nota'] = Materia_id['gradeFinal']
					// 	//Falta la parte de Christian (nombreAsig, creditos, tipologia, plan)
					// 	const response = await generalRequest(`${URL}/${Course}`, 'POST', courses)

					// 	return responsePersonas.error || responsePersonas === 404
					// 	? responsePersonas
					// 	: response;
					// }					
				// }
			}			
		},
			
		updateCourses: (_, { courses }) =>
			generalRequest(`${URL}/${Course}`, 'PUT', courses),
		updateNota: (_, { datos }) => //update tabla datos
			generalRequest(`${URL}/${PutNota}`, 'PUT', datos),
		deleteCourses: (_, { courses}) =>
			generalRequest(`${URL}/${Course}`, 'DELETE', courses)
	}
};

export default resolvers;
