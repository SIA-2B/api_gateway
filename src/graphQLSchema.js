import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

import {
	gradeMutations,
	gradeQueries,          
	gradeTypeDef
} from './grades/typeDefs';

import {
	courseMutations,        
	courseQueries,
	courseTypeDef
} from './courses/typeDefs';

import {
	academicInfoMutations,        
	academicInfoQueries,
	academicInfoTypeDef
} from './academicInfo/typeDefs';

import {
	authMutations,        
	authQueries,
	authTypeDef
} from './auth/typeDefs';

import {
	financialInfoMutations,        
	financialInfoQueries,
	financialInfoTypeDef
} from './financialInfo/typeDefs';

import {
	inscriptionMutations,        
	inscriptionQueries,
	inscriptionTypeDef
} from './inscription/typeDefs';

import {
	personalInfoMutations,        
	personalInfoQueries,
	personalInfoTypeDef
} from './personalInfo/typeDefs';

import gradeResolvers from './grades/resolvers';  

import courseResolvers from './courses/resolvers';

import academicInfoResolvers from './academicInfo/resolvers';

import authResolvers from './auth/resolvers';

import financialInfoResolvers from './financialInfo/resolvers';

import inscriptionResolvers from './inscription/resolvers';

import personalInfoResolvers from './personalInfo/resolvers';



// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		gradeTypeDef,
		courseTypeDef,
		academicInfoTypeDef,
		authTypeDef,
		financialInfoTypeDef,
		inscriptionTypeDef,
		personalInfoTypeDef      
	],
	[
		gradeQueries,         
		courseQueries,
		academicInfoQueries,
		authQueries,
		financialInfoQueries,
		inscriptionQueries,
		personalInfoQueries
	],
	[
		gradeMutations,
		courseMutations,
		academicInfoMutations,
		authQueriesMutations,
		financialInfoMutations,
		inscriptionMutations,
		personalInfoMutations      
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		gradeResolvers,
		courseResolvers,
		academicInfoResolvers,
		authResolvers,
		financialInfoResolvers,
		inscriptionResolvers,
		personalInfoResolvers          
	)
});
