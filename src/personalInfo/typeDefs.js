export const personalInfoTypeDef = `
  type EPS {
	idEPS:       Int!
	razonSocial: String!
	estadoEPS:   Boolean!
  }
  input EPSInput {
    razonSocial: String!
	estadoEPS:   Boolean!
  }
`;

export const personalInfoQueries = `
    allEPSs: [EPS]!
    EPSById(id: Int!): EPS!
`;

export const personalInfoMutations = `
    createEPS(eps: EPSInput!): String!
    updateEPS(id: Int!, eps: EPSInput!): String!
    deleteEPS(id: Int!): String!
`;
