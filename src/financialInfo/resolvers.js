import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';
import personalInfoResolvers from '../personalInfo/resolvers';

const URL = `http://${url}:${port}/${entryPoint}`;
//import {finalcialInfo} from '../Micro';

// const URL = `http://${url}/${entryPoint}`;
//const URL = `http://${finalcialInfo}/${entryPoint}`;

const test = [{"_id":"633876b21dd0f7077a76431f","number":"1000000000","info":{"userId":"1234567890","period":"1","year":"2022"},"dates":{"dateOfIssue":"01-01-2022","dateTimely":"15-01-2022","lateDate":"25-01-2022"},"paymentMethod":"N/A","enrolmentConcepts":"N/A","value":{"value":"1000000","discount":"N/A","totalValue":"1000000"},"remarks":"N/A","status":"Pagado"}];


const resolvers = {
	Query: {
		//allBills: (_) =>getRequest(URL, ''),
		getAllBills: async (_, {id}) => {
			const responsePersonas = await personalInfoResolvers.Query.personaById(
				_,
				{id}
			)

			if(responsePersonas['idPersona'] == id){
				const response = await generalRequest(`${URL}/${id}`, 'GET')
				return responsePersonas.error || responsePersonas === 404
				? responsePersonas
				: response;

			}
			
		},
		getTest: (_) => test,			
	}
};

export default resolvers;
