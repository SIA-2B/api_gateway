export const cursosTypeDef = `
type Cursos{    
    id: String!
    nombre : String! 
    creditos : String! 
    tipologia:String!
    sede:String!
    nivel_estudio :String!
    facultad : String!
    descripcion : String!
    prerequisitos: String!
    codigo : String!         
}    
  `;

export const cursosQueries = `
      allCursos: [Cursos]!
      cursosById(id: Int!): Cursos!
  `;

