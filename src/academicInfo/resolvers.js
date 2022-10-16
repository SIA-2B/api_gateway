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
import gradeResolvers from '../grades/resolvers';  

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

		createCourses: async(_, { courses }) =>{
			const student_id = courses['student_id']
			const Periodo = courses['periodo'] //Periodo academicInfo
			const course_id = courses['codigo_id']
			const responsePersonas = await personalInfoResolvers.Query.personaById(
				_,
				{id:student_id}
			)
			if(responsePersonas['idPersona'] == student_id){
				const Materia = await gradeResolvers.Query.allGrades()
				for(let i = 0; i< Materia.length; i++){
					const Materia_id =  Materia[i]
					const materia_student_id = Materia_id['studentId'] 
					const materia_grade_period = Materia_id['gradePeriod']//Periodo Grade_ms
					const materia_course_id = Materia_id['courseId']
					if(materia_student_id == student_id &&  materia_grade_period == Periodo && materia_course_id == course_id){
						//console.log(Materia[i])
						courses['nota'] = Materia_id['gradeFinal']
						//Falta la parte de Christian (nombreAsig, creditos, tipologia, plan)
						const response = await generalRequest(`${URL}/${Course}`, 'POST', courses)

						return responsePersonas.error || responsePersonas === 404
						? responsePersonas
						: response;
					}					
				}
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
