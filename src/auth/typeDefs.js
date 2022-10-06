export const authTypeDef = `
  type Auth {
      token: String!
  }
  input AuthInput {
      username: String!
      password: String!
  }`;

export const authQueries = `
      allAuth: [Auth]!
      AuthById(id: Int!): Auth!
  `;

export const authMutations = `
    createAuth(auth: AuthInput!): Auth!
    updateAuth(id: Int!, auth: AuthInput!): Auth!
    deleteAuth(id: Int!): Int
`;
