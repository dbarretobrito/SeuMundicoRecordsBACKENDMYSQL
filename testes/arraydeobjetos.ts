interface ProductImages {
  front: string;  // Imagem obrigatória
  back?: string;
  detail?: string;
  detail2?: string;
}

export interface Product {
  id: number;
  name: string;
  images: ProductImages;
  description: string;
  price: number;
  year?: number; // Novo campo para o ano de lançamento
  tags?: string[]; // Tags para busca (ocultas para o usuário)
}

export const products: Product[] = [
  {
    id: 1, 
    name: 'Antônio Adolfo e a Brazuca', 
    images: { 
      front: AntonioAdolfoEABrazucaFRONT, 
      back: AntonioAdolfoEABrazucaBACK,
      detail: AntonioAdolfoEABrazucaDETAIL,},
    description: "",
    price: 115,
    year: 1971,
    tags: ['Antônio Adolfo e a Brazuca', '1971', 'MPB']
  },
  {
    id: 2, 
    name: 'Clara Crocodilo', 
    images: { 
      front: ClaraCrocodiloLIFESTYLE2,
      back: ClaraCrocodiloLIFESTYLE,
      detail: ClaraCrocodiloLVerdeIFESTYLE,},
    description: "",
    price: 115,
    year: 1980,
    tags: ['Arrigo Barnabé', 'Clara Crocodilo', 'Sabor de Veneno', '1980', 'MPB', 'Vanguarda Paulistana']
  },
  {
    id: 3, 
    name: 'Loki', 
    images: { 
      front: ArnaldoBaptistaLokiOUTDOOR2,
      back: ArnaldoBaptistaLokiFRONT,},
    description: "",
    price: 115,
    year: 1974,
    tags: ['Arnaldo Baptista', 'Loki', '1974', 'MPB', 'Rock Nacional']
  },
  {
    id: 4, 
    name: 'Beastie Boys (Hello Nasty)', 
    images: { 
      front: HelloNastyAmarelaFRONT2,
      back: HelloNastyBrancoFRONT2,
      },
    description: "",
    price: 115,
    year: 1998,
    tags: ['Beastie Boys', 'Hello Nasty', '1998']
  },
  {
    id: 5, 
    name: "Bob Dylan (Don't Look Back)", 
    images: { 
      front: DontLookBackFRONT3,
      back: DontLookBackFRONT,
      },
    description: "",
    price: 115,
    year: 1967,
    tags: ['Bob Dylan', "Don't Look Back", '1967']
  },
  {
    id: 6, 
    name: "Magical Mistery Tour", 
    images: { 
      front: MagicalDETAILS,
      back: MagicalBACK,
      detail: MagicalLIFESTYLE3,
      },
    description: "",
    price: 115,
    year: 1967,
    tags: ['The Beatles', "Magical Mistery Tour", '1967', 'John', 'Paul', 'George']
  },
  {
    id: 7, 
    name: "Barão Vermelho (1982)", 
    images: { 
      front: BaraoVermelhoOUTDOOR3,
      back: BaraoVermelhoOUTDOOR2,},
    description: "",
    price: 115,
    year: 1982,
    tags: ['Barão Vermelho', "Cazuza", '1982', 'Frejat', 'Rock Nacional']
  },
  {
    id: 15, 
    name: "Maior Abandonado", 
    images: { 
      front: MaiorAbandonadoOUTDOOR4,
      back: MaiorAbandonadoFRONT,},
    description: "",
    price: 115,
    year: 1984,
    tags: ['Barão Vermelho', "Cazuza", '1984', 'Frejat', 'Rock Nacional']
  },
  {
    id: 8, 
    name: "Só se for a Dois", 
    images: { 
      front: SoseforaDoisFRONT3,
      back: SoseforaDoisBACK
      },
    description: "",
    price: 115,
    year: 1987,
    tags: ['Barão Vermelho', "Cazuza", '1987', 'Frejat', 'Rock Nacional']
  },
  {
    id: 9, 
    name: "Quando o Carnaval Chegar", 
    images: { 
      front: CarnavalLIFESTYLE6,
      back: CarnavalLIFESTYLE7,
      },
    description: "",
    price: 115,
    year: 1972,
    tags: ['Chico Buarque', "Carnaval", '1972', 'Nara', 'Maria', 'Samba', 'MPB']
  },
  {
    id: 58, 
    name: "Construção", 
    images: { 
      front: ConstrucaoDETAILS,
      back: ConstrucaoBACK,
      detail: ConstrucaoOUTDOOR5
      },
    description: "",
    price: 115,
    year: 1971,
    tags: ['Chico Buarque', "Carnaval", '1971', 'Samba', 'MPB', 'Construção']
  },
  {
    id: 10, 
    name: "Nação", 
    images: { 
      front: NacaoFRONT2,
      },
    description: "",
    price: 115,
    year: 1982,
    tags: ['Clara Nunes', "Nação", '1982', 'MPB']
  },
  {
    id: 11, 
    name: "Deftones", 
    images: { 
      front: DeftonesFRONT3,
      },
    description: "",
    price: 115,
    tags: ['Deftones', 'Metal']
  },
  {
    id: 12, 
    name: "Fuehrer's Face", 
    images: { 
      front: FuehrersFaceFRONT2,
      },
    description: "",
    price: 115,
    year: 1943,
    tags: ['Disney', 'Animação', 'Desenho Animado', '1943']
  },
  {
    id: 13, 
    name: "Zé Carioca", 
    images: { 
      front: ZeCariocaRosaFRONT2,
      back: ZeCariocaFRONT2,
      },
    description: "",
    price: 115,
    tags: ['Disney', 'Zé Carioca', 'Animação', 'Desenho Animado', 'Arte']
  },
  {
    id: 14, 
    name: "Pernas (Shigeo Fukuda)", 
    images: { 
      front: PernasLIFESTYLE2,
      back: Pernas2,
      },
    description: "",
    price: 115,
    tags: ['Shigeo Fukuda', 'Pernas', 'Ilustração', 'Surrealismo', 'Arte']
  },
  {
    id: 16, 
    name: "O Canto da Cidade", 
    images: { 
      front: OCantoDaCidadeFRONT2
      },
    description: "",
    price: 115,
    year:1992,
    tags: ['Daniela Mercury', 'Axé', 'Bahia', 'MPB', '1992']
  },
  // {
  //   id: 16, 
  //   name: "Banda dos Contentes", 
  //   images: { 
  //     front: BandaDosContentesFRONT2,
  //     back: BandaDosContentesBACK2
  //     },
  //   description: "",
  //   price: 115,
  //   year:1976,
  //   tags: ['Erasmo', 'Banda dos Contentes', 'Jovem Guarda', 'MPB', '1976']
  // },
  {
    id: 17, 
    name: "Elis & Tom", 
    images: { 
      front: ElisETomLIFESTYLE4,
      back: ElisETomLIFESTYLE5
      },
    description: "",
    price: 115,
    year:1974,
    tags: ['Elis Regina', 'Tom Jobim', 'Antônio Carlos Jobim', 'Bossa Nova', 'MPB']
  },
  {
    id: 18, 
    name: "Engenheiros", 
    images: { 
      front: EngenheirosFRONT,
      back: EngenheirosBACK
      },
    description: "",
    price: 115,
    tags: ['Engenheiros do Hawaii', 'Rock Nacional']
  },
  {
    id: 19, 
    name: "Ooh La La", 
    images: { 
      front: OohLaLaBACK,
      back: OohLaLaLIFESTYLE3,
      detail: OohLaLaDETAILS
      },
    description: "",
    price: 115,
    year:1973,
    tags: ['The Faces', 'Rod Stewart', 'Ooh La La']
  },
  {
    id: 20, 
    name: "Gal (1969)", 
    images: { 
      front: GCosta1969OUTDOORFRONT2,
      back: GCosta1969OUTDOORBACK2,
      detail: GCosta1969AmarelaLIFESTYLE7,
      detail2:GCosta1969AmarelaLIFESTYLE8
      },
    description: "",
    price: 115,
    year:1969,
    tags: ['Tropicalia', 'Gal Costa', '1969', 'MPB']
  },
  {
    id: 21, 
    name: "Guilherme Lamounier (1973)", 
    images: { 
      front: GuilhermeLamounierVerdeFRONT2,
      back: GuilhermeLamounierBACK,
      detail: GuilhermeLamounierAmareloFRONT2,
      detail2:GuilhermeLamounierFRONT2
      },
    description: "",
    price: 115,
    year:1973,
    tags: ['Guilherme Lamomnier', '1973']
  },
  {
    id: 22, 
    name: "Galos de Briga", 
    images: { 
      front: GalosDeBrigaLIFESTYLE3,
      back: GalosDeBrigaAmarela,
      detail: GalosDeBrigaVerdeEstornado,
      },
    description: "",
    price: 115,
    year:1976,
    tags: ['João Bosco', 'Aldir Blanc', '1976', 'MPB']
  },
  {
    id: 23, 
    name: "Pérola Negra", 
    images: { 
      front: PerolaNegraFRONT2,
      back: PerolaNegraBACK,
      },
    description: "",
    price: 115,
    year:1973,
    tags: ['Luiz Melodia', '1973', 'Pérola Negra', 'MPB', 'Black Music']
  },
  {
    id: 24, 
    name: "Mac DeMarco", 
    images: { 
      front: MacDeMarLIFESTYLE4,
      back: MacDeMarLIFESTYLE3,
      },
    description: "",
    price: 115,
    tags: ['Mac DeMarco']
  },
  {
    id: 25, 
    name: "Racional", 
    images: { 
      front: RacionalLIFESTYLE3,
      back: RacionalLIFESTYLE4,
      detail: RacionalFRONT2
      },
    description: "",
    price: 115,
    year:1975,
    tags: ['Tim Maia', 'Racional', '1975', 'Black Music']
  },
  {
    id: 26, 
    name: "Milton (1970)", 
    images: { 
      front: MiltonFRONT2,
      back: MiltonBACK,
      },
    description: "",
    price: 115,
    year:1970,
    tags: ['Milton Nascimento', '1970', 'MPB']
  },
  {
    id: 27, 
    name: "Ah! E o Som Imaginário", 
    images: { 
      front: EOSomImaginarioLIFESTYLE2,
      back: EOSomImaginarioAmarelaLIFESTYLE3,
      },
    description: "",
    price: 115,
    year:1970,
    tags: ['Milton Nascimento', 'Som Imaginário','1970', 'MPB']
  },
  {
    id: 28, 
    name: "Fullgás", 
    images: { 
      front: FullgasLIFESTYLE4,
      back: FullgasFRONT2,
      },
    description: "",
    price: 115,
    year:1984,
    tags: ['Marina Lima', 'MPB','1984']
  },
  {
    id: 29, 
    name: "Barulhinho Bom", 
    images: { 
      front: BarulhinhoBom1FRONT,
      back: BarulhinhoBom1BACK,
      detail: BarulhinhoBom2FRONT,
      detail2: BarulhinhoBom2BACK
      },
    description: "",
    price: 115,
    year:1996,
    tags: ['Marisa Monte', 'MPB','1996']
  },
  {
    id: 30, 
    name: "Verde, Anil, Amarelo, Cor-de-Rosa e Carvão", 
    images: { 
      front: VerdeAnilLIFESTYLE4,
      back: VerdeAnilFRONT2,
      },
    description: "",
    price: 115,
    year:1994,
    tags: ['Marisa Monte', 'MPB','1994']
  },
  {
    id: 31, 
    name: "Caia na Estrada", 
    images: { 
      front: CaiaNaEstradaFRONT2,
      back: CaiaNaEstradaBACK,
      },
    description: "",
    price: 115,
    year:1976,
    tags: ['Novos Baianos', 'MPB','1976', 'Moraes', 'Baby', 'Pepeu']
  },
  {
    id: 32, 
    name: "Oasis", 
    images: { 
      front: OasisPretaFRONT,
      back: OasisBrancaFRONT2,
      },
    description: "",
    price: 115,
    tags: ['Oasis']
  },
  // {
  //   id: 33, 
  //   name: "Krishnanda", 
  //   images: { 
  //     front: KrishnandaBACK2,
  //     back: KrishnandaBACK2,
  //     },
  //   description: "",
  //   price: 115,
  //   year:1968,
  //   tags: ['Pedro Santos', 'MPB', '1968', 'Krishnanda']
  // },
  {
    id: 34, 
    name: "Piper at the Gates of Dawn", 
    images: { 
      front: PiperFRONT3,
      back: PiperBACK,
      },
    description: "",
    price: 115,
    year:1967,
    tags: ['Pink Floyd', '1967', 'Piper at the Gates of Dawn']
  },
  {
    id: 35, 
    name: "Another Day", 
    images: { 
      front: AnotherDay,
      },
    description: "",
    price: 115,
    year:1971,
    tags: ['Paul McCartney', 'The Beatles', '1971', 'Wings']
  },
  {
    id: 36, 
    name: "Red Rose Speedway", 
    images: { 
      front: RedRoseSpeedwayFRONT2,
      back: RedRoseSpeedwayBACK,
      },
    description: "",
    price: 115,
    year:1972,
    tags: ['Paul McCartney', 'The Beatles', '1972', 'Wings']
  },
  {
    id: 37, 
    name: "Wild Life", 
    images: { 
      front: WildLifeLIFESTYLE2,
      back: WildLifeBACK,
      detail: WildLifeFRONT,
    },
    description: "",
    price: 115,
    year:1971,
    tags: ['Paul McCartney', 'The Beatles', '1971', 'Wings']
  },
  {
    id: 38, 
    name: "Jazz", 
    images: { 
      front: JazzDETAILS,
      back: JazzBACK,
      detail: JazzLIFESTYLE,
      detail2: JazzLIFESTYLE3
    },
    description: "",
    price: 115,
    year:1978,
    tags: ['Queen', 'Freddie', '1978']
  },
  {
    id: 39, 
    name: "Fruto Proibido", 
    images: { 
      front: FrutoProibidoLIFESTYLE,
      back: FrutoProibidoLIFESTYLE2,
    },
    description: "",
    price: 115,
    year:1975,
    tags: ['Rita Lee', 'Tutti Frutti','Rock Nacional', '1975', 'MPB']
  },
  {
    id: 40, 
    name: "Mania de Você", 
    images: { 
      front: ManiaDeVoceLIFESTYLE,
    },
    description: "",
    price: 115,
    year:1979,
    tags: ['Rita Lee', '1979', 'Rock Nacional', 'MPB']
  },
  {
    id: 41, 
    name: "Máquina Voadora", 
    images: { 
      front: MaquinaVoadoraFRONT,
    },
    description: "",
    price: 115,
    year:1970,
    tags: ['Ronnie Von', '1970', 'Rock Nacional', 'MPB']
  },
  {
    id: 42, 
    name: "A Misteriosa Luta do Reino de Parassempre...", 
    images: { 
      front: MisteriosaFRONT,
    },
    description: "",
    price: 115,
    year:1968,
    tags: ['Ronnie Von', '1968', 'Rock Nacional', 'MPB']
  },
  {
    id: 43, 
    name: "Ronnie Von (1968)", 
    images: { 
      front: RVon1968FRONT,
      back: RVon1968LIFESTYLE2,
      detail: RVon1968LIFESTYLE3,
    },
    description: "",
    price: 115,
    year:1968,
    tags: ['Ronnie Von', '1968', 'Rock Nacional', 'MPB']
  },
  {
    id: 44, 
    name: "Secos & Molhados", 
    images: { 
      front: SecosAzulFRONT3,
      back: SecosAzulBACK,
      detail: SecosLIFESTYLE2,
      detail2: SecosLIFESTYLE3,
    },
    description: "",
    price: 115,
    year:1973,
    tags: ['Secos e Molhados', 'Ney Matogrosso', '1973', 'Rock Nacional', 'MPB']
  },
  {
    id: 45, 
    name: "Secos & Molhados 2", 
    images: { 
      front: SecosFRONT3,
      back: SecosBACK,
    },
    description: "",
    price: 115,
    year:1973,
    tags: ['Secos e Molhados', 'Ney Matogrosso', '1973', 'Rock Nacional', 'MPB']
  },
  {
    id: 46, 
    name: "Som Imaginário", 
    images: { 
      front: SomImaginarioLIFESTYLE,
      back: SomImaginarioBACK,
      detail:SomImaginarioFRONT2,
    },
    description: "",
    price: 115,
    year:1970,
    tags: ['Som Imaginário', '1970', 'Rock Nacional', 'MPB']
  },
  {
    id: 47, 
    name: "Sá, Rodrix & Guarabyra (Terra)", 
    images: { 
      front: TerraFRONT,
      back: TerraBACK,
      detail: TerraLIFESTYLE,
    },
    description: "",
    price: 115,
    year:1973,
    tags: ['Sá, Rodrix e Guarabyra', '1973', 'Rock Nacional', 'MPB']
  },
  {
    id: 49, 
    name: "Eu Quero É Botar meu Bloco na Rua", 
    images: { 
      front: BlocoNaRuaLIFESTYLE2,
      back: BlocoNaRuaBACK,
      detail: BlocoNaRuaFRONT,
    },
    description: "",
    price: 115,
    year:1973,
    tags: ['Sérgio Sampaio', '1973', 'MPB']
  },
  {
    id: 50, 
    name: "Signed, Sealed, Delivered (I'm Yours)", 
    images: { 
      front: SSDALT2,
      back: SSDFRONT2,
      detail: SSDBACK,
    },
    description: "",
    price: 115,
    year:1970,
    tags: ['Stevie Wonder', '1970', 'Black Music']
  },
  {
    id: 51, 
    name: "Honeyburst", 
    images: { 
      front: HoneyburstLIFESTYLE2,
      back: HoneyburstDETAILS,
    },
    description: "",
    price: 115,
    year:2003,
    tags: ['Tim Christensen', '2003']
  },
  {
    id: 52, 
    name: "Sunflower", 
    images: { 
      front: SunflowerFRONT3,
      back: SunflowerBACK,
    },
    description: "",
    price: 115,
    year:1970,
    tags: ['Beach Boys', '1970']
  },
  {
    id: 53, 
    name: "Qualquer Coisa", 
    images: { 
      front: QualquerCoisaFRONT2,
      back: QualquerCoisaBACK,
      detail: QualquerCoisaOUTDOOR2,
    },
    description: "",
    price: 115,
    year:1975,
    tags: ['Caetano Veloso', '1975', 'MPB']
  },
  {
    id: 54, 
    name: "Caetano (1968)", 
    images: { 
      front: Velo1968OUTDOOR7,
      back: Velo1968OUTDOOR8,
    },
    description: "",
    price: 115,
    year:1968,
    tags: ['Caetano Veloso', '1968', 'MPB', 'Tropicalia']
  },
  {
    id: 55, 
    name: "Velo", 
    images: { 
      front: VeloDETAIL,
      back: VeloLIFESTYLE8,
      detail: VeloLIFESTYLE5
    },
    description: "",
    price: 115,
    year:1984,
    tags: ['Caetano Veloso', '1984', 'MPB']
  },
  {
    id: 56, 
    name: "Viva O Gordo e Abaixo o Regime", 
    images: { 
      front: VivaOGordoFRONT,
      back: VivaOGordoLIFESTYLE2,
    },
    description: "",
    price: 115,
    tags: ['Jô Soares']
  },
  {
    id: 57, 
    name: "Ziraldo", 
    images: { 
      front: Ziraldo,
    },
    description: "",
    price: 115,
    tags: ['Ziraldo']
  },
]