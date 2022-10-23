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
      nota: Float!
      plan: String!
  }

  type Credits {
      _id: String!
      dis_op: Int!
      dis_ob: Int!
      fund_op: Int!
      fund_ob: Int!
      libre: Int!
      trabajo: Int!
      nivelacion: Int!
      cur_dis_op: Int!
      cur_dis_ob: Int!
      cur_fund_op: Int!
      cur_fund_ob: Int!
      cur_libre: Int!
      cur_trabajo: Int!
      cur_nivelacion: Int!
      excedente: Int!
      cancelados: Int!
      avance: Int!
      disponible: Int!
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
      datosById(datos: DatosView!): Datos

      allCourses: [Courses]!
      coursesById(datos: DatosView!): Courses
      creditsById(datos: DatosView!): Credits
  `;

export const academicInfoMutations = `
    createDatos(datos: DatosInput!): String!
    deleteDatos(datos: DatosView!): String!

    createCourses(courses: CourseInput!): String!
    updateCourses(courses: CourseSearch!): String!
    updateNota(datos: DatosViews!): String!
    deleteCourses(courses: CourseSearch!): String!
`;
