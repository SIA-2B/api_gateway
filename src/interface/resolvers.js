import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';
import personalInfoResolvers from '../personalInfo/resolvers';

<<<<<<< HEAD
const URL = `http://${url}:${port}/${entryPoint}`;
=======
//const URL = `http://${url}:${port}/${entryPoint}`;
//import {finalcialInfo} from '../Micro';

const URL = `http://${url}/${entryPoint}`;
//const URL = `http://${finalcialInfo}/${entryPoint}`;
>>>>>>> 9a7a9e18f08ee7bb03d59de95477090e2a404171

const resolvers = {
	Query: {
		//allBills: (_) =>getRequest(URL, ''),
		allUNcademy: (_) =>
			getRequest(`${URL}/uncademy`, ''),		
	}
};

export default resolvers;
