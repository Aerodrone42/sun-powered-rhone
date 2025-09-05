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
    description: "Capitale de la région Auvergne-Rhône-Alpes, Lyon bénéficie d'un fort potentiel solaire avec plus de 2000 heures d'ensoleillement par an.",
    ensoleillement: "2000+ heures/an",
    potentielSolaire: "Excellent (1200-1300 kWh/kWc/an)",
    particularites: [
      "Métropole dynamique avec de nombreux projets solaires",
      "Politique environnementale ambitieuse",
      "Zone urbaine dense avec toitures adaptées au solaire",
      "Forte demande en bornes de recharge électrique"
    ],
    projetsRealises: [
      "Installation de 500+ panneaux sur bâtiments résidentiels",
      "Équipement de parkings d'entreprises en bornes de recharge",
      "Projets d'autoconsommation collective"
    ]
  },
  {
    name: "Villeurbanne",
    slug: "villeurbanne",
    department: "Rhône",
    population: 151927,
    latitude: 45.7667,
    longitude: 4.8833,
    description: "Première commune du Rhône après Lyon, Villeurbanne développe activement les énergies renouvelables sur son territoire.",
    ensoleillement: "1950+ heures/an",
    potentielSolaire: "Très bon (1180-1280 kWh/kWc/an)",
    particularites: [
      "Ville universitaire avec campus solaires",
      "Nombreux bâtiments collectifs équipables",
      "Projet de transition énergétique communal",
      "Proximité immédiate de Lyon"
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