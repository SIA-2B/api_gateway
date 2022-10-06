export const courseTypeDef = `
type Cursos{    
    id: String!
    nombre : String! 
    creditos : Int! 
    tipologia: String!
    sede: String!
    nivel_estudio :String!
    facultad : String!
    descripcion : String!
    pre_requisitos: String!
    codigo : Int!         
}    
input CursosInput {
    id: String!
    nombre : String! 
    codigo : Int!   
}
`;


export const courseQueries = `
      allCursos: [Cursos]!
      cursosById(id: String!): Cursos!
      cursosByPlan(idPlan: String!): [Cursos]!

  `;

export const courseMutations = `
  createCourses(cursos: CursosInput!): String!
  updateCourses(id: Int!, Cursos: CursosInput!): String!
  deleteCourses(id: Int!): String!
`;

export const groupTypeDef = `
type Grupos{    
    id: String!
    numero : Int! 
    id_profesor : String! 
    cupos: Int!
    horario: String!
    lugar :String!
    idCurso : String!       
}
input GruposInput {
    id: String!
    sum : Int!  
}  
  `;

export const groupQueries = `

  allGrupos: [Grupos]!
  gruposByCurso(idCurso: String!): [Grupos]!

`;

export const groupMutations = `

  plusGrupos(idGrupo: String!, suma: Int!): Grupos!

`;
