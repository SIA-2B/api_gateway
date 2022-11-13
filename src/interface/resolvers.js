import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';
import personalInfoResolvers from '../personalInfo/resolvers';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		//allBills: (_) =>getRequest(URL, ''),
		allUNcademy: (_) =>
			getRequest(`${URL}/uncademy`, ''),		
	}
};

export default resolvers;
