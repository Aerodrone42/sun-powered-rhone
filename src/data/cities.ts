export interface CityData {
  name: string;
  slug: string;
  department: string;
  population: number;
  latitude: number;
  longitude: number;
  description: string;
  ensoleillement: string;
  potentielSolaire: string;
  particularites: string[];
  projetsRealises?: string[];
}

export const cities: CityData[] = [
  {
    name: "Lyon",
    slug: "lyon",
    department: "Rhône",
    population: 522228,
    latitude: 45.7640,
    longitude: 4.8357,
    description: "Capitale économique de la région Auvergne-Rhône-Alpes, Lyon s'impose comme une ville pionnière de la transition énergétique. Avec ses 2000+ heures d'ensoleillement annuel et son engagement fort pour le développement durable, la ville offre un cadre idéal pour l'installation de panneaux solaires. Que vous soyez propriétaire d'une maison dans le 5ème arrondissement ou gérant d'un immeuble dans le quartier de la Part-Dieu, nos solutions photovoltaïques s'adaptent parfaitement au paysage urbain lyonnais.",
    ensoleillement: "2000+ heures/an",
    potentielSolaire: "Excellent (1200-1300 kWh/kWc/an)",
    particularites: [
      "Métropole de Lyon avec un plan climat ambitieux visant la neutralité carbone d'ici 2030",
      "Architecture variée : immeubles haussmanniens, tours modernes et maisons individuelles",
      "Forte densité urbaine avec 9 arrondissements aux spécificités uniques",
      "Écosystème économique dynamique favorisant l'innovation en énergies renouvelables",
      "Politique municipale incitative avec subventions locales pour le solaire",
      "Réseau de transport en commun électrifié créant une demande forte en bornes de recharge"
    ],
    projetsRealises: [
      "Plus de 800 installations photovoltaïques résidentielles réalisées depuis 2020",
      "Équipement de 15 parkings d'entreprises en bornes de recharge solaire",
      "Installation de systèmes d'autoconsommation collective dans 5 copropriétés",
      "Projet pilote de ferme solaire urbaine sur ancienne friche industrielle",
      "Partenariat avec la Métropole pour l'équipement de bâtiments publics"
    ]
  },
  {
    name: "Villeurbanne",
    slug: "villeurbanne",
    department: "Rhône",
    population: 151927,
    latitude: 45.7667,
    longitude: 4.8833,
    description: "Première commune du Rhône par sa population après Lyon, Villeurbanne incarne parfaitement l'évolution urbaine vers la durabilité. Cette ville universitaire de renom, abritant l'Université Claude Bernard Lyon 1 et l'INSA, se distingue par son engagement précoce dans les énergies renouvelables. Avec ses nombreux campus, résidences étudiantes et quartiers résidentiels en plein renouvellement, Villeurbanne offre un terrain d'expérimentation idéal pour les solutions solaires innovantes.",
    ensoleillement: "1950+ heures/an",
    potentielSolaire: "Très bon (1180-1280 kWh/kWc/an)",
    particularites: [
      "Campus universitaire de 60 000 étudiants avec projets solaires éducatifs",
      "Quartier Gratte-Ciel, ensemble architectural Art déco unique en Europe",
      "Zone de renouvellement urbain avec intégration systématique du solaire",
      "Laboratoires de recherche en énergies renouvelables et efficacité énergétique",
      "Politique municipale volontariste : objectif 100% énergies renouvelables d'ici 2030",
      "Nombreuses copropriétés et résidences étudiantes équipables"
    ],
    projetsRealises: [
      "Installation de 300+ systèmes photovoltaïques sur logements étudiants",
      "Projet solaire pilote sur le campus de la Doua (500 kWc)",
      "Équipement de 8 écoles municipales en panneaux solaires pédagogiques",
      "Installation de bornes de recharge solaire dans 5 parkings publics"
    ]
  },
  {
    name: "Vénissieux",
    slug: "venissieux",
    department: "Rhône",
    population: 65000,
    latitude: 45.7,
    longitude: 4.8833,
    description: "Ville industrielle en mutation vers les énergies vertes, Vénissieux offre de nombreuses opportunités pour le solaire.",
    ensoleillement: "1980+ heures/an",
    potentielSolaire: "Très bon (1200-1290 kWh/kWc/an)",
    particularites: [
      "Zone industrielle avec grandes toitures",
      "Projets de rénovation urbaine incluant le solaire",
      "Politique municipale favorable aux énergies renouvelables",
      "Accès facilité pour installations professionnelles"
    ]
  },
  {
    name: "Saint-Priest",
    slug: "saint-priest",
    department: "Rhône",
    population: 47000,
    latitude: 45.6942,
    longitude: 4.9431,
    description: "Commune dynamique de l'est lyonnais, Saint-Priest développe son parc solaire résidentiel et tertiaire.",
    ensoleillement: "2000+ heures/an",
    potentielSolaire: "Excellent (1220-1310 kWh/kWc/an)",
    particularites: [
      "Zone pavillonnaire importante",
      "Développement du tertiaire",
      "Proximité des axes de transport",
      "Commune engagée dans la transition énergétique"
    ]
  },
  {
    name: "Caluire-et-Cuire",
    slug: "caluire-et-cuire",
    department: "Rhône",
    population: 42000,
    latitude: 45.7975,
    longitude: 4.8517,
    description: "Commune résidentielle prisée, Caluire-et-Cuire présente un fort potentiel pour l'autoconsommation solaire.",
    ensoleillement: "1970+ heures/an",
    potentielSolaire: "Très bon (1190-1290 kWh/kWc/an)",
    particularites: [
      "Habitat pavillonnaire privilégié",
      "Revenus élevés favorisant l'investissement solaire",
      "Topographie vallonnée optimale pour l'exposition",
      "Forte demande en solutions d'autoconsommation"
    ]
  },
  {
    name: "Bron",
    slug: "bron",
    department: "Rhône",
    population: 40000,
    latitude: 45.7317,
    longitude: 4.9089,
    description: "Ville de l'est lyonnais, Bron combine habitat résidentiel et zones d'activités propices au développement solaire.",
    ensoleillement: "1990+ heures/an",
    potentielSolaire: "Très bon (1200-1300 kWh/kWc/an)",
    particularites: [
      "Aéroport Lyon-Bron avec projets solaires",
      "Zones résidentielles et d'activités",
      "Proximité de Lyon",
      "Développement de l'électromobilité"
    ]
  },
  {
    name: "Meyzieu",
    slug: "meyzieu",
    department: "Rhône",
    population: 31000,
    latitude: 45.7667,
    longitude: 5.0167,
    description: "Commune de l'est lyonnais en pleine expansion, Meyzieu mise sur les énergies renouvelables pour son développement.",
    ensoleillement: "2020+ heures/an",
    potentielSolaire: "Excellent (1230-1320 kWh/kWc/an)",
    particularites: [
      "Croissance démographique importante",
      "Nombreuses constructions neuves",
      "Zone d'activités économiques",
      "Politique environnementale volontaire"
    ]
  },
  {
    name: "Rillieux-la-Pape",
    slug: "rillieux-la-pape",
    department: "Rhône",
    population: 30000,
    latitude: 45.8167,
    longitude: 4.9,
    description: "Ville du nord de Lyon, Rillieux-la-Pape développe activement le solaire sur ses équipements publics et privés.",
    ensoleillement: "1960+ heures/an",
    potentielSolaire: "Très bon (1180-1280 kWh/kWc/an)",
    particularites: [
      "Grands ensembles adaptables au solaire",
      "Projets municipaux d'énergies renouvelables",
      "Zone industrielle",
      "Accessibilité transport en commun"
    ]
  },
  {
    name: "Décines-Charpieu",
    slug: "decines-charpieu",
    department: "Rhône",
    population: 27000,
    latitude: 45.7667,
    longitude: 4.9667,
    description: "Commune de l'est lyonnais, Décines-Charpieu bénéficie d'un excellent ensoleillement pour les installations solaires.",
    ensoleillement: "2010+ heures/an",
    potentielSolaire: "Excellent (1220-1310 kWh/kWc/an)",
    particularites: [
      "Stade de l'Olympique Lyonnais avec installations solaires",
      "Zone commerciale importante",
      "Habitat mixte résidentiel-tertiaire",
      "Projets d'aménagement durable"
    ]
  },
  {
    name: "Oullins",
    slug: "oullins",
    department: "Rhône",
    population: 26000,
    latitude: 45.7167,
    longitude: 4.8,
    description: "Commune du sud-ouest lyonnais, Oullins développe les énergies renouvelables dans ses projets urbains.",
    ensoleillement: "1980+ heures/an",
    potentielSolaire: "Très bon (1200-1290 kWh/kWc/an)",
    particularites: [
      "Proximité de Lyon",
      "Habitat dense et pavillonnaire",
      "Projets de rénovation urbaine",
      "Politique municipale environnementale"
    ]
  }
];

export const getCityBySlug = (slug: string): CityData | undefined => {
  return cities.find(city => city.slug === slug);
};