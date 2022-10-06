export const gradeTypeDef = `
  type Grade {
      id: Int!
      studentId: Int!
      courseId: Int!
      teacherId: Int!
      gradeFinal: Float!
      gradePeriod: String!
  }
  type Schedule {
    scheduleMonday: String!
    scheduleTuesday: String!
    scheduleWednesday: String!
    scheduleThursday: String!
    scheduleFriday: String!
    scheduleSaturday: String!
    scheduleClassroomMonday: String!
    scheduleClassroomTuesday: String!
    scheduleClassroomWednesday: String!
    scheduleClassroomThursday: String!
    scheduleClassroomFriday: String!
    scheduleClassroomSaturday: String!
}
  input GradeInput {
      studentId: Int!
      courseId: Int!
      teacherId: Int!
      gradeFinal: Float!
      gradePeriod: String!
  }
  input ScheduleInput {
      scheduleMonday: String!
      scheduleTuesday: String!
      scheduleWednesday: String!
      scheduleThursday: String!
      scheduleFriday: String!
      scheduleSaturday: String!
      scheduleClassroomMonday: String!
      scheduleClassroomTuesday: String!
      scheduleClassroomWednesday: String!
      scheduleClassroomThursday: String!
      scheduleClassroomFriday: String!
      scheduleClassroomSaturday: String!
  }`;

export const gradeQueries = `
      allGrades: [Grade]!
      gradeById(id: Int!): Grade!
      allSchedules: [Schedule]!
      scheduleById(id: Int!): Schedule!
  `;

export const gradeMutations = `
    createGrade(grade: GradeInput!): Grade!
    updateGrade(id: Int!, grade: GradeInput!): Grade!
    deleteGrade(id: Int!): Int
    createSchedule(schedule: ScheduleInput!): Schedule!
    updateSchedule(id: Int!, schedule: ScheduleInput!): Schedule!
    deleteSchedule(id: Int!): Int
`;
