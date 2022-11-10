export const interfaceTypeDef = `
  type grades {
    group_id: String!,
    student_name: String!,
    final_grade: String!,
    absences: String!,
    approved: String!
  }

  type course {
    courseName: String!,
    teacherName: String!,
    currentDate: String!,
    gradesList: [grades]!
  }

  type results {
    result: course!
  }
  `;
export const interfaceQueries = `
      allUNcademy: results!
  `;

export const interfaceMutations = `
`;