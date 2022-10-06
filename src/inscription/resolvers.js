import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}/${entryPoint}`;

const resolvers = {
	Query: {
		getPendingCitations: (_, {student_id}) => 
			generalRequest(`${URL}/getPendingCitations/?student_id=${student_id}`, ''),
		getPendingCitationsByCurriculum: (_, {student_id, curriculum_id}) => 
			generalRequest(`${URL}/getPendingCitationsByCurriculum/?student_id=${student_id}&curriculum_id=${curriculum_id}`, ''),
		getHistoricCitations: (_, {student_id}) => 
			generalRequest(`${URL}/getHistoricCitations/?student_id=${student_id}`, ''),
	},
	Mutation: {
		
	}
};

export default resolvers;
