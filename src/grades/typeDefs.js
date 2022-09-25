export const gradeTypeDef = `
  type Grade {
      id: Int!
      studenId: Int!
      courseId: Int!
      teacherId: Int!
      gradeFinal: Float!
      gradePeriod: String!
  }
  input GradeInput {
      studenId: Int!
      courseId: Int!
      teacherId: Int!
      gradeFinal: Float!
      gradePeriod: String!
  }`;

export const gradeQueries = `
      allGrades: [Grade]!
      gradeById(id: Int!): Grade!
  `;

export const gradeMutations = `
    createGrade(grade: GradeInput!): Grade!
    updateGrade(id: Int!, grade: GradeInput!): Grade!
    deleteGrade(id: Int!): Int
`;
