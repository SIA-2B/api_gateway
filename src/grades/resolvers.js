import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

//const URL = `http://${url}:${port}/${entryPoint}`;
const URL = `http://${url}/${entryPoint}`;

const resolvers = {
	Query: {
		allGrades: (_) =>
			generalRequest(`${URL}/grades`, 'GET'),
		gradeById: (_, { id }) =>
			generalRequest(`${URL}/grades/${id}`, 'GET'),
		allSchedules: (_) =>
			generalRequest(`${URL}/schedules`, 'GET'),
		scheduleById: (_, { id }) =>
			generalRequest(`${URL}/schedules/${id}`, 'GET')
	},
	Mutation: {
		createGrade: (_, { grade }) =>
			generalRequest(`${URL}/grades`, 'POST', grade),
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
