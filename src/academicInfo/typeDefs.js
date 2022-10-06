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
  
  input DatosInput {
      student_id: String!
      study_plan_name: String!
      facultad: String!
  }

  input DatosView {
      student_id: String!
      study_plan_name: String!
  }

  type Courses {
      _id: String!
      datos_id: String!
      codigo_id: String!
      name: String!
      credit: String!
      periodo: String!
      nota: String!
      plan: String!
  }

  input DatosViews {
      student_id: String!
      study_plan_name: String!
      periodo: String!    
  }

  input CourseInput {
      student_id: String!
      study_plan_name: String!
      codigo_id: String!
      name: String!
      credit: Int!
      periodo: String!
      nota: Int!
      plan: String!
  }

  input CourseSearch {
      student_id: String!
      study_plan_name: String!
      codigo_id: String!
      name: String!
      periodo: String!
      nota: Int!
  }
  `;

export const academicInfoQueries = `
      allDatos: [Datos]!
      datosById(datos: DatosView!): Datos!

      allCourses: [Courses]!
      coursesById(datos: DatosView!): Courses!
  `;

export const academicInfoMutations = `
    createDatos(datos: DatosInput!): String!
    deleteDatos(datos: DatosView!): String!

    createCourses(courses: CourseInput!): String!
    updateCourses(courses: CourseSearch!): String!
    updateNota(datos: DatosViews!): String!
    deleteCourses(courses: CourseSearch!): String!
`;
