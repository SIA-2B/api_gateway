export const academicInfoTypeDef = `
  type datos {
      student_id: String!
      credits_id: String!
      papa: Float!
      pa: Float!
      papi: Float!
      study_plan_id: String!
      study_plan_name: String!
      facultad: String!
      active: Boolean!      
  }
  input datosInput {
      student_id: String!
      credits_id: String!
      study_plan_name: String!
      facultad: String!
  }
  type course {
      codigo_id: String!
      datos_id: String!
      name: String!
      credit: Int!
      periodo: String!
      nota: Int!
      plan: String!
  }
  input courseInput{
      codigo_id: String!
      datos_id: String!
      name: String!
      credit: Int!
      periodo: String!
      nota: Int!
      plan: String!
  }
  `;

export const academicInfoQueries = `
      alldatos: [datos]!
      allcourse: [course]!
      courseById(!): Category!
  `;

export const academicInfoMutations = `
    createCategory(category: CategoryInput!): Category!
    updateCategory(id: Int!, category: CategoryInput!): Category!
    deleteCategory(id: Int!): Int
`;
