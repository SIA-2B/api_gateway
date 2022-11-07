import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';
import resolversCourses from '../courses/resolvers';

const URL = `http://${url}:${port}/${entryPoint}`;
//import {gradesInfo} from '../Micro';

// const URL = `http://${url}/${entryPoint}`;
//const URL = `http://${gradesInfo}/${entryPoint}`;

const resolvers = {
	Query: {
		allGrades: (_) =>
			generalRequest(`${URL}/grade`, 'GET'),
		gradeById: (_, { id }) =>
			generalRequest(`${URL}/grade/${id}`, 'GET'),
		allGradesByStudent: (_, { id }) =>
			generalRequest(`${URL}/grade/byStudentId/${id}`, 'GET'),
		allSchedules: (_) =>
			generalRequest(`${URL}/schedule`, 'GET'),
		scheduleById: (_, { id }) =>
			generalRequest(`${URL}/schedule/${id}`, 'GET'),
		allSchedulesByStudent: (_, { id }) =>
			generalRequest(`${URL}/schedule/byStudentId/${id}`, 'GET'),
	},
	Mutation: {
		createGrade: async (_, { grade }) => {
			const response = await generalRequest(`${URL}/grade`, 'POST', grade);
			if (response.error) return response;
			const responseCourse= await resolversCourses.Query.cursosById(
				_,
				{ id: grade.courseId }
			);
			return responseCourse.error || responseCourse === 404
				? responseCourse
				: response;
		},
		updateGrade: (_, { id, grade }) =>
			generalRequest(`${URL}/grades/${id}`, 'PUT', grade),
		deleteGrade: (_, { id }) =>
			generalRequest(`${URL}/grades/${id}`, 'DELETE'),
		createSchedule: (_, { grade }) =>
			generalRequest(`${URL}/schedules`, 'POST', grade),
		updateSchedule: (_, { id, grade }) =>
			generalRequest(`${URL}/schedules/${id}`, 'PUT', grade),
		deleteSchedule: (_, { id }) =>
			generalRequest(`${URL}/schedules/${id}`, 'DELETE')
	}
};

export default resolvers;
