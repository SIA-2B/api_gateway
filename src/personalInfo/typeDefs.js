export const personalInfoTypeDef = `
  type EPS {
    idEPS:       Int!
    razonSocial: String!
    estadoEPS:   Boolean!
  }
  input EPSInput {
    razonSocial: String!
	  estadoEPS:   Boolean!
  }

  type pais {
    idPais:       Int!
    nombrePais:   String!
    estadoPais:   Boolean!
  }
  input paisInput {
    nombrePais:   String!
    estadoPais:   Boolean!
  }

  type ciudad {
    idCiudad:       Int!
    nombreCiudad:   String!
    Pais_idPais:    Int!
    estadoCiudad:   Boolean!
  }
  input ciudadInput {
    nombreCiudad:   String!
    Pais_idPais:    Int!
    estadoCiudad:   Boolean!
  }

  type etnia {
    idEtnia:          Int!
    categoriaEtnica:  String!
    estadoEtnia:      Boolean!
  }
  input etniaInput {
    categoriaEtnica:  String!
    estadoEtnia:      Boolean!
  }

  type persona {
    idPersona:              Int!
    nombrePersona:          String!
    apellidoPersona:        String!
    tipoDocumento:          String!
    NUIPPersona:            Float!
    lugarNacimiento:        Int!
    lugarExpDocumento:      Int!
    estadoCivil:            Int!
    sexoBio:                String! 
    etnia:                  Int!
    correoPersonal:         String!
    telefonoMovil:          Float!
    telefonoFijo:           Float!
    fechaNacimiento:        String!
    EPS:                    Int! 
    grupoSangre:            String!
    nivelAcademico:         String!
    factorRH:               String!
    dirResidencia:          String!
    lugarResidencia:        Int!
    estratoSocioeconomico:  Int!
    libretaMilitar:         Boolean!
    fechaRegistroSistema:   String!
    estadoPersona:          Boolean!
  }
  input personaInput {
    nombrePersona:          String!
    apellidoPersona:        String!
    tipoDocumento:          String!
    NUIPPersona:            Float!
    lugarNacimiento:        Int!
    lugarExpDocumento:      Int!
    estadoCivil:            Int!
    sexoBio:                String! 
    etnia:                  Int!
    correoPersonal:         String!
    telefonoMovil:          Float!
    telefonoFijo:           Float!
    fechaNacimiento:        String!
    EPS:                    Int! 
    grupoSangre:            String!
    nivelAcademico:         String!
    factorRH:               String!
    dirResidencia:          String!
    lugarResidencia:        Int!
    estratoSocioeconomico:  Int!
    libretaMilitar:         Boolean!
    fechaRegistroSistema:   String!
    estadoPersona:          Boolean!
  }
`;

export const personalInfoQueries = `
    allEPSs: [EPS]!
    EPSById(id: Int!): EPS!

    allPaises: [pais]!
    paisById(id: Int!): pais!

    allCiudades: [ciudad]!
    ciudadById(id: Int!): ciudad!

    allEtnias: [etnia]!
    etniaById(id: Int!): etnia!

    allPersonas: [persona]!
    personaById(id: Int!): persona!
`;

export const personalInfoMutations = `
  createEPS(eps: EPSInput!): String!
  updateEPS(id: Int!, eps: EPSInput!): String!
  deleteEPS(id: Int!): String!

  createPais(pais: paisInput!): String!
  updatePais(id: Int!, pais: paisInput!): String!
  deletePais(id: Int!): String!

  createCiudad(ciudad: ciudadInput!): String!
  updateCiudad(id: Int!, ciudad: ciudadInput!): String!
  deleteCiudad(id: Int!): String!

  createEtnia(etnia: etniaInput!): String!
  updateEtnia(id: Int!, etnia: etniaInput!): String!
  deleteEtnia(id: Int!): String!

  createPersona(persona: personaInput!): String!
  updatePersona(id: Int!, persona: personaInput!): String!
  deletePersona(id: Int!): String!
`;
