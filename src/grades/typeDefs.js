export const gradeTypeDef = `
  type Grade {
    gradeId: Int!
    studentId: Int!
    courseId: Int!
    courseName: String!
    gradeFinal: Float!
    gradePeriod: String!
  }
  type Schedule {
    scheduleId: Int!
    studentId: Int!
    time: String!
    day: String!
    courseId: Int!
    teacherId: Int!
  }
  input GradeInput {
    studentId: Int!
    courseId: Int!
    courseName: String!
    gradeFinal: Float!
    gradePeriod: String!
  }
  input ScheduleInput {
    studentId: Int!
    time: String!
    day: String!
    courseId: Int!
    teacherId: Int!
  }`;

export const gradeQueries = `
    allGrades: [Grade]!
    gradeById(id: Int!): Grade!
    allGradesByStudent(id: Int!): [Grade]!
    allSchedules: [Schedule]!
    scheduleById(id: Int!): Schedule!
    allSchedulesByStudent(id: Int!): [Schedule]!
  `;

export const gradeMutations = `
    createGrade(grade: GradeInput!): Grade!
    updateGrade(id: Int!, grade: GradeInput!): Grade!
    deleteGrade(id: Int!): Int
    createSchedule(schedule: ScheduleInput!): Schedule!
    updateSchedule(id: Int!, schedule: ScheduleInput!): Schedule!
    deleteSchedule(id: Int!): Int
`;