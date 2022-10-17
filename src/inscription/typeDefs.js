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

    type Inscription {
        citation_id: Int!
        student_id: Int!
        inscription_date: String!
        total_credits: Int!
        active: Int!
    }

    type Course {
        id: Int!
        credits: Int!
    }

    input InscritionInput {
        citation_id: Int!
        student_id: Int!
        courses: [Course]!
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
    registerInscription(data: InscriptionInput!): Inscription!
`;
