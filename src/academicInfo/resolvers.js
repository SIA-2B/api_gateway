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
import {academicInfo} from '../Micro';
// const URL = `http://${url}/${entryPoint}`;
//const URL = `http://${academicInfo}/${entryPoint}`
const URL = `http://${url}:${port}/${entryPoint}`;
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
		createDatos: (_, { datos }) => {
			return await RabbitMQ(datos.student_id) ? generalRequest(`${URL}/${Datos}`, 'POST', datos) : null},
		//
		deleteDatos: (_, { datos }) => {
			return await RabbitMQ(datos.student_id) ? generalRequest(`${URL}/${Datos}`, 'DELETE', datos) : null},
		//
		createCourse: async (_, { courses }) =>{
			if(await RabbitMQ(courses.student_id)){
				const Materias = await gradeResolvers.Query.allGradesByStudent(_,{id: parseInt(courses.student_id)})
				Materias.forEach(async function(materia) {
					const plan = await courseResolvers.Query.cursosById(_,{id:`${materia.courseId}`})
					const curso = {
						"student_id": courses.student_id,
					    "study_plan_name": courses.study_plan_name,
					    "codigo_id": `${materia.courseId}`,
					    "name": materia.courseName,
					    "credit": plan.creditos,
					    "periodo": materia.gradePeriod,
					    "nota": materia.gradeFinal,
					    "plan": tipologia(plan.tipologia.toUpperCase())
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
		deleteCourses: (_, { courses}) => {
			return await RabbitMQ(courses.student_id) ? generalRequest(`${URL}/${Course}`, 'DELETE', courses) : null}
	}
};

function tipologia(tipo) {
	switch (tipo) {
		case "DISCIPLINARIA OPTATIVA":
			return "dis_op"
			break;
		case "DISCIPLINARIA OBLIGATORIA":
      		return "dis_ob";
			break;
		case "FUNDAMENTAL OPTATIVA":
      		return "fund_op";
			break;
		case "FUNDAMENTAL OBLIGATORIA":
      		return "fund_ob";
			break;
		case "LIBRE ELECCION":
      		return "libre";
			break;
		case "TRABAJO DE GRADO":
      		return "trabajo";
			break;
		case "NIVELATORIA" || "NIVELACION":
      		return "nivelacion";
			break;
		default:
			return "libre";
			break;
	}
}

export default resolvers;
