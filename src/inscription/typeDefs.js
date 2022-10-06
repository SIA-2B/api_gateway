export const inscriptionTypeDef = `
    type Citation {
        id: Int!
        student_id: Int!
        curriculum_id: Int!
        date: String!
        initial_time: String!
        final_time: String!
        pending: Int!
    }

    type PendingCitations {
        pendingCitations: [Citation]!
    }

    type HistoricCitations {
        historicCitations: [Citation]!
    }
    
  `;

export const inscriptionQueries = `
      getPendingCitations(student_id: Int!): PendingCitations!
      getPendingCitationsByCurriculum(student_id: Int!, curriculum_id: Int!): PendingCitations!
      getHistoricCitations(student_id: Int!): HistoricCitations!
  `;

export const inscriptionMutations = `
    doNothing: Citation!
`;
