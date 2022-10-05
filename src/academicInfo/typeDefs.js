export const academicInfoTypeDef = `
  type Datos {
      _id: String!
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

  type Crear {
      _id: String!
      papa: Float!
      pa: Float!
      papi: Float!
      
  }
  
  input DatosInput {
      student_id: String!
      credits_id: String!
      study_plan_name: String!
      facultad: String!
  }
  `;

export const academicInfoQueries = `
      allDatos: [Datos]!
      datosById(student_id: String!, study_plan_id: String!, study_plan_name: String!): Datos!
  `;

export const academicInfoMutations = `
    createDatos(datos: DatosInput!): String!
    deleteDatos(student_id: String!, study_plan_name: String!): String
`;