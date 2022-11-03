export const financialInfoTypeDef = `
  type billsInfo {
    userId: String!,
    period: String!,
    year: String!
  }
  type billsDates{
    dateOfIssue: String!, 
    dateTimel: String!, 
    lateDate: String!
  }
  type billsValue{
    value: String!,
    discount: String!,
    totalValue: String!
  }
  type UsersBills {
    number: String!,
    info: billsInfo!,
    dates: billsDates!,
    paymentMethod: String!,
    enrolmentConcepts: String!,
    value: billsValue!,
    remarks: String!,
    status: String!
  }
  `;

export const financialInfoQueries = `
      getAllBills(id: String!): [UsersBills!]!      
      getTest: UsersBills!
  `;

  export const financialInfoMutations = `
      doNothing: [UsersBills]!
  `;


