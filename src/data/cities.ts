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
    description: "Ville industrielle en pleine mutation vers les énergies vertes, Vénissieux représente l'avenir de la transition énergétique urbaine. Cette commune dynamique du sud de Lyon, avec ses nombreuses zones d'activités et ses grands projets de rénovation urbaine, offre un terrain privilégié pour le développement du solaire. Les vastes toitures industrielles et les nouveaux éco-quartiers constituent autant d'opportunités pour des installations photovoltaïques de grande envergure.",
    ensoleillement: "1980+ heures/an",
    potentielSolaire: "Très bon (1200-1290 kWh/kWc/an)",
    particularites: [
      "Zone industrielle avec grandes toitures idéales pour le solaire industriel",
      "Projets de rénovation urbaine intégrant systématiquement les énergies renouvelables",
      "Politique municipale volontariste avec objectifs carbone neutralité 2030",
      "Proximité des grands axes logistiques favorisant l'électromobilité",
      "Nombreuses entreprises engagées dans la transition énergétique",
      "Potentiel important pour l'autoconsommation collective en milieu urbain"
    ],
    projetsRealises: [
      "Installation de 200 kWc sur zone industrielle Renault Trucks",
      "Équipement de 5 copropriétés en autoconsommation collective",
      "Projet pilote de ferme solaire urbaine (1 MWc en développement)",
      "Installation de bornes de recharge rapide alimentées par le solaire"
    ]
  },
  {
    name: "Saint-Priest",
    slug: "saint-priest",
    department: "Rhône",
    population: 47000,
    latitude: 45.6942,
    longitude: 4.9431,
    description: "Commune dynamique de l'est lyonnais, Saint-Priest incarne parfaitement l'équilibre entre développement urbain et respect de l'environnement. Avec ses quartiers pavillonnaires en expansion, ses zones d'activités tertiaires et son engagement fort dans la transition énergétique, la ville offre un cadre idéal pour tous types d'installations solaires. La proximité de l'aéroport Lyon Saint-Exupéry et des grands axes de communication en fait un territoire stratégique pour l'énergie renouvelable.",
    ensoleillement: "2000+ heures/an",
    potentielSolaire: "Excellent (1220-1310 kWh/kWc/an)",
    particularites: [
      "Zone pavillonnaire en forte expansion avec constructions neuves",
      "Technopole avec entreprises innovantes en cleantech",
      "Proximité aéroport Lyon Saint-Exupéry développant l'électromobilité",
      "Commune certifiée Cit'ergie pour sa politique énergétique",
      "Nombreux projets d'éco-quartiers intégrant le solaire dès la conception",
      "Potentiel exceptionnel grâce à l'orientation et l'absence d'obstacles"
    ],
    projetsRealises: [
      "Installation de 150 systèmes résidentiels depuis 2021",
      "Équipement de la zone d'activités Mi-Plaine en toitures solaires",
      "Projet d'ombrières photovoltaïques sur parkings municipaux",
      "Installation pilote de stockage communautaire"
    ]
  },
  {
    name: "Caluire-et-Cuire",
    slug: "caluire-et-cuire",
    department: "Rhône",
    population: 42000,
    latitude: 45.7975,
    longitude: 4.8517,
    description: "Perchée sur les collines au nord de Lyon, Caluire-et-Cuire bénéficie d'une situation géographique exceptionnelle pour le solaire. Cette commune résidentielle huppée, avec ses villas exposées plein sud et ses copropriétés de standing, représente un marché premium pour les installations photovoltaïques. L'engagement environnemental fort de ses habitants et les revenus élevés facilitent l'investissement dans les solutions d'autoconsommation et de stockage d'énergie.",
    ensoleillement: "1970+ heures/an",
    potentielSolaire: "Très bon (1190-1290 kWh/kWc/an)",
    particularites: [
      "Habitat pavillonnaire de standing avec propriétés aux toitures optimales",
      "Topographie en collines offrant des expositions sud exceptionnelles",
      "Population à revenus élevés investissant dans les technologies vertes",
      "Politique municipale de soutien aux énergies renouvelables",
      "Nombreuses piscines privées = forte consommation estivale adaptée au solaire",
      "Demande croissante pour les solutions de stockage et d'autoconsommation"
    ],
    projetsRealises: [
      "Installation de 80 systèmes haut de gamme avec batteries",
      "Projet d'autoconsommation collective sur résidence de prestige",
      "Équipement de piscines municipales en chauffe-eau solaire",
      "Installation de bornes de recharge pour véhicules de luxe électriques"
    ]
  },
  {
    name: "Bron",
    slug: "bron",
    department: "Rhône",
    population: 40000,
    latitude: 45.7317,
    longitude: 4.9089,
    description: "Ville stratégique de l'est lyonnais, Bron combine parfaitement les atouts d'une commune résidentielle moderne avec ceux d'un pôle économique en développement. L'aéroport Lyon-Bron, les zones d'activités tertiaires et les nouveaux quartiers résidentiels offrent une diversité unique d'opportunités pour le photovoltaïque. La ville s'engage résolument dans la transition énergétique avec des projets ambitieux d'énergies renouvelables.",
    ensoleillement: "1990+ heures/an",
    potentielSolaire: "Très bon (1200-1300 kWh/kWc/an)",
    particularites: [
      "Aéroport Lyon-Bron avec projets d'électrification et solaire",
      "Zones d'activités en expansion demandant des solutions énergétiques",
      "Nouveaux éco-quartiers intégrant le solaire dès la conception",
      "Proximité de centres de recherche en énergies renouvelables",
      "Fort développement de l'électromobilité nécessitant des bornes",
      "Mix habitat individuel/collectif idéal pour tous types d'installations"
    ],
    projetsRealises: [
      "Installation pilote de 300 kWc sur hangars de l'aéroport",
      "Équipement de 60 maisons individuelles en autoconsommation",
      "Projet de micro-réseau sur zone d'activités tertiaires",
      "Installation de bornes rapides alimentées par solaire"
    ]
  },
  {
    name: "Meyzieu",
    slug: "meyzieu",
    department: "Rhône",
    population: 31000,
    latitude: 45.7667,
    longitude: 5.0167,
    description: "Commune en pleine expansion de l'est lyonnais, Meyzieu symbolise la croissance urbaine durable. Avec ses nombreuses constructions neuves, ses zones d'activités modernes et son engagement environnemental exemplaire, la ville constitue un laboratoire grandeur nature pour les technologies solaires innovantes. La jeunesse de sa population et la modernité de ses infrastructures créent un terreau fertile pour l'adoption massive du photovoltaïque.",
    ensoleillement: "2020+ heures/an",
    potentielSolaire: "Excellent (1230-1320 kWh/kWc/an)",
    particularites: [
      "Croissance démographique forte avec 40% de constructions neuves depuis 2015",
      "Zone d'activités économiques Meyzieu-Jonage en développement",
      "Population jeune et sensibilisée aux enjeux environnementaux",
      "Politique municipale pionnière : objectif territoire à énergie positive",
      "Nombreux lotissements modernes aux normes énergétiques élevées",
      "Potentiel exceptionnel grâce à l'absence d'obstacles urbains"
    ],
    projetsRealises: [
      "Installation de 120 systèmes sur constructions neuves",
      "Projet d'autoconsommation sur nouveau quartier (50 logements)",
      "Équipement de la zone d'activités en toitures solaires (800 kWc)",
      "Installation de l'une des plus grandes fermes solaires urbaines de la région"
    ]
  },
  {
    name: "Rillieux-la-Pape",
    slug: "rillieux-la-pape",
    department: "Rhône",
    population: 30000,
    latitude: 45.8167,
    longitude: 4.9,
    description: "Positionnée au nord de Lyon, Rillieux-la-Pape mène une politique énergétique ambitieuse axée sur les renouvelables. Cette ville, avec ses grands ensembles en cours de rénovation énergétique et ses zones d'activités, offre un potentiel considérable pour les installations photovoltaïques de toutes tailles. Les projets de rénovation urbaine intègrent systématiquement les solutions solaires dans une approche globale de transition énergétique.",
    ensoleillement: "1960+ heures/an",
    potentielSolaire: "Très bon (1180-1280 kWh/kWc/an)",
    particularites: [
      "Grands ensembles en rénovation énergétique intégrant le solaire",
      "Zone industrielle avec toitures de grande superficie disponibles",
      "Politique municipale exemplaire : Plan Climat territorial ambitieux",
      "Population engagée dans les démarches d'économies d'énergie",
      "Accessibilité transport en commun favorisant l'électromobilité",
      "Potentiel important pour l'autoconsommation collective en habitat social"
    ],
    projetsRealises: [
      "Installation de 200 kWc sur groupe scolaire avec pédagogie solaire",
      "Équipement de 3 copropriétés en autoconsommation collective",
      "Projet pilote de stockage d'énergie communautaire",
      "Installation de bornes de recharge dans parkings de proximité"
    ]
  },
  {
    name: "Décines-Charpieu",
    slug: "decines-charpieu",
    department: "Rhône",
    population: 27000,
    latitude: 45.7667,
    longitude: 4.9667,
    description: "Décines-Charpieu, célèbre pour accueillir le stade de l'Olympique Lyonnais, s'impose également comme une référence en matière d'énergie solaire. Cette commune de l'est lyonnais, avec ses zones commerciales étendues, ses équipements sportifs et ses quartiers résidentiels modernes, présente un potentiel photovoltaïque exceptionnel. L'exemplarité énergétique du Groupama Stadium inspire de nombreux projets solaires sur le territoire.",
    ensoleillement: "2010+ heures/an",
    potentielSolaire: "Excellent (1220-1310 kWh/kWc/an)",
    particularites: [
      "Groupama Stadium équipé d'installations solaires exemplaires",
      "Zone commerciale Grand Large avec potentiel d'ombrières photovoltaïques",
      "Développement urbain moderne intégrant les énergies renouvelables",
      "Événements sportifs créant une forte demande énergétique",
      "Projets d'aménagement durable dans les nouveaux quartiers",
      "Position géographique optimale sans masques solaires importants"
    ],
    projetsRealises: [
      "Installation de référence sur le Groupama Stadium (1 MWc)",
      "Équipement de la zone commerciale en ombrières solaires",
      "Installation de 90 systèmes résidentiels avec stockage",
      "Projet de micro-réseau alimentant les équipements sportifs municipaux"
    ]
  },
  {
    name: "Oullins",
    slug: "oullins",
    department: "Rhône",
    population: 26000,
    latitude: 45.7167,
    longitude: 4.8,
    description: "Commune du sud-ouest lyonnais, Oullins conjugue harmonieusement patrimoine urbain et innovation énergétique. Cette ville, avec son centre-ville dense, ses quartiers pavillonnaires et ses projets de renouvellement urbain, offre une palette complète d'opportunités pour le photovoltaïque. Sa proximité immédiate avec Lyon et son engagement dans la transition énergétique en font un territoire d'expérimentation privilégié pour les solutions solaires urbaines.",
    ensoleillement: "1980+ heures/an",
    potentielSolaire: "Très bon (1200-1290 kWh/kWc/an)",
    particularites: [
      "Centre-ville dense avec opportunités de solaire urbain intégré",
      "Quartiers résidentiels mixtes (collectif et individuel)",
      "Projets de rénovation urbaine incluant les énergies renouvelables",
      "Politique municipale de soutien aux initiatives citoyennes",
      "Forte sensibilisation environnementale de la population",
      "Potentiel pour l'autoconsommation collective en milieu urbain dense"
    ],
    projetsRealises: [
      "Installation de 70 systèmes sur toitures résidentielles",
      "Projet d'autoconsommation collective sur éco-quartier",
      "Équipement d'équipements publics (école, médiathèque)",
      "Installation de bornes de recharge en centre-ville"
    ]
  },
  {
    name: "Écully",
    slug: "ecully",
    department: "Rhône",
    population: 18000,
    latitude: 45.7742,
    longitude: 4.7794,
    description: "Commune résidentielle de prestige à l'ouest de Lyon, Écully représente l'excellence en matière d'habitat durable et d'énergies renouvelables. Cette ville, réputée pour ses villas de caractère et sa qualité de vie exceptionnelle, attire une population aisée et sensibilisée aux enjeux environnementaux. Les propriétés de standing, souvent dotées de grandes toitures bien exposées, constituent un marché premium pour les installations photovoltaïques haut de gamme avec stockage.",
    ensoleillement: "1970+ heures/an",
    potentielSolaire: "Très bon (1190-1280 kWh/kWc/an)",
    particularites: [
      "Habitat de prestige avec villas aux toitures optimales pour le solaire",
      "École de Management de Lyon (EMLYON) campus développement durable",
      "Population à revenus élevés investissant dans les technologies vertes avancées",
      "Patrimoine architectural préservé nécessitant des solutions esthétiques",
      "Forte demande pour l'autoconsommation et l'indépendance énergétique",
      "Pionnière dans l'adoption des véhicules électriques de luxe"
    ],
    projetsRealises: [
      "Installation de 45 systèmes premium avec batteries Tesla/Sonnen",
      "Équipement du campus EMLYON en installations pédagogiques",
      "Projet pilote de maison autonome 100% solaire",
      "Installation de bornes de recharge haut de gamme"
    ]
  },
  {
    name: "Tassin-la-Demi-Lune",
    slug: "tassin-la-demi-lune",
    department: "Rhône",
    population: 22000,
    latitude: 45.7633,
    longitude: 4.7594,
    description: "Nichée dans les monts du Lyonnais, Tassin-la-Demi-Lune bénéficie d'une situation géographique privilégiée pour les installations solaires. Cette commune résidentielle de l'ouest lyonnais, avec ses quartiers pavillonnaires étagés sur les collines et son engagement environnemental marqué, offre des conditions exceptionnelles pour le photovoltaïque. L'exposition sud optimale de nombreuses propriétés et la sensibilité écologique de la population créent un marché dynamique pour les énergies renouvelables.",
    ensoleillement: "1980+ heures/an",
    potentielSolaire: "Très bon (1200-1290 kWh/kWc/an)",
    particularites: [
      "Topographie en collines offrant des expositions sud exceptionnelles",
      "Quartiers pavillonnaires avec propriétés aux toitures bien orientées",
      "Population sensibilisée aux enjeux environnementaux et climatiques",
      "Politique municipale volontariste en faveur de la transition énergétique",
      "Forte demande pour les solutions d'autoconsommation familiale",
      "Développement de l'électromobilité dans les déplacements quotidiens"
    ],
    projetsRealises: [
      "Installation de 85 systèmes résidentiels avec optimiseurs",
      "Projet d'autoconsommation collective sur lotissement récent",
      "Équipement de bâtiments municipaux en installations exemplaires",
      "Installation de bornes de recharge dans quartiers résidentiels"
    ]
  },
  {
    name: "Saint-Fons",
    slug: "saint-fons",
    department: "Rhône",
    population: 17500,
    latitude: 45.7089,
    longitude: 4.8531,
    description: "Ville industrielle du sud de Lyon en pleine mutation énergétique, Saint-Fons incarne la transition des territoires industriels vers les énergies propres. Cette commune, avec ses vastes zones d'activités, ses entreprises chimiques et logistiques, et ses quartiers résidentiels en renouvellement, présente un potentiel considérable pour les installations photovoltaïques industrielles et résidentielles. La densité d'entreprises énergivores crée une demande forte pour l'autoconsommation solaire.",
    ensoleillement: "1990+ heures/an",
    potentielSolaire: "Très bon (1210-1300 kWh/kWc/an)",
    particularites: [
      "Zone industrielle majeure avec entreprises chimiques et logistiques",
      "Grandes toitures industrielles idéales pour installations de forte puissance",
      "Forte consommation énergétique industrielle adaptée à l'autoconsommation",
      "Projets de reconversion urbaine intégrant les énergies renouvelables",
      "Politique de transition énergétique industrielle et résidentielle",
      "Potentiel important pour les installations solaires de plusieurs MWc"
    ],
    projetsRealises: [
      "Installation de 500 kWc sur site industriel chimique",
      "Équipement de zone logistique en toitures solaires (1,2 MWc)",
      "Projet pilote d'autoconsommation collective en quartier populaire",
      "Installation de bornes de recharge pour véhicules utilitaires électriques"
    ]
  },
  {
    name: "Givors",
    slug: "givors",
    department: "Rhône",
    population: 19500,
    latitude: 45.5850,
    longitude: 4.7672,
    description: "Située au confluent du Rhône et du Gier, Givors mène une politique énergétique ambitieuse dans le cadre de sa reconversion post-industrielle. Cette ville en pleine renaissance, avec ses projets d'aménagement durable et ses initiatives citoyennes, développe activement les énergies renouvelables. Les vastes espaces disponibles et l'engagement municipal créent des opportunités uniques pour des projets solaires innovants et de grande envergure.",
    ensoleillement: "2000+ heures/an",
    potentielSolaire: "Excellent (1220-1310 kWh/kWc/an)",
    particularites: [
      "Reconversion post-industrielle avec grands espaces pour fermes solaires",
      "Politique municipale pionnière en énergies renouvelables",
      "Projets d'aménagement urbain intégrant massivement le solaire",
      "Position géographique favorable avec excellent ensoleillement",
      "Initiatives citoyennes fortes pour la transition énergétique",
      "Potentiel unique pour projets solaires communautaires et participatifs"
    ],
    projetsRealises: [
      "Ferme solaire citoyenne de 2 MWc sur ancienne friche industrielle",
      "Installation de 60 systèmes résidentiels en autoconsommation",
      "Équipement de bâtiments publics (mairie, écoles, gymnases)",
      "Projet pilote de stockage communautaire associé au solaire"
    ]
  },
  {
    name: "Genas",
    slug: "genas",
    department: "Rhône",
    population: 13000,
    latitude: 45.7306,
    longitude: 5.0106,
    description: "Commune rurale en périphérie de Lyon, Genas combine harmonieusement tradition agricole et modernité énergétique. Cette ville, avec ses exploitations agricoles, ses zones pavillonnaires et sa proximité de l'aéroport Lyon Saint-Exupéry, présente un potentiel diversifié pour le photovoltaïque. L'agrivoltaïsme se développe sur les terres agricoles tandis que les nouvelles constructions intègrent systématiquement les solutions solaires.",
    ensoleillement: "2010+ heures/an",
    potentielSolaire: "Excellent (1230-1320 kWh/kWc/an)",
    particularites: [
      "Territoire semi-rural avec potentiel pour l'agrivoltaïsme",
      "Proximité aéroport Lyon Saint-Exupéry développant l'électromobilité",
      "Exploitations agricoles adoptant les solutions solaires",
      "Nouveaux lotissements intégrant les énergies renouvelables",
      "Position géographique optimale sans obstacles majeurs",
      "Forte croissance démographique avec constructions neuves"
    ],
    projetsRealises: [
      "Installation agrivoltaïque pilote de 800 kWc",
      "Équipement de 40 maisons individuelles neuves",
      "Projet solaire sur bâtiments agricoles (élevage, stockage)",
      "Installation de bornes de recharge rapide axe aéroportuaire"
    ]
  },
  {
    name: "Grenoble",
    slug: "grenoble",
    department: "Isère",
    population: 158552,
    latitude: 45.1885,
    longitude: 5.7245,
    description: "Capitale des Alpes et métropole européenne de l'innovation, Grenoble s'impose comme une référence mondiale en matière de transition énergétique et de technologies vertes. Cette ville, berceau de nombreuses start-ups cleantech et siège d'organismes de recherche de renom, développe les énergies renouvelables avec une approche scientifique et innovante. Le cadre montagnard exceptionnel et l'engagement citoyen fort créent un écosystème unique pour le photovoltaïque urbain et périurbain.",
    ensoleillement: "2100+ heures/an",
    potentielSolaire: "Excellent (1300-1400 kWh/kWc/an)",
    particularites: [
      "Métropole européenne de l'innovation avec écosystème cleantech unique",
      "CEA et laboratoires de recherche en énergies renouvelables",
      "Ensoleillement exceptionnel grâce à la situation alpine",
      "Politique municipale pionnière : objectif neutralité carbone 2030",
      "Population très sensibilisée aux enjeux climatiques et énergétiques",
      "Nombreuses start-ups développant des technologies solaires innovantes"
    ],
    projetsRealises: [
      "Plus de 1000 installations photovoltaïques résidentielles depuis 2019",
      "Campus universitaire équipé de fermes solaires pédagogiques",
      "Zone d'activités Alpespace : 3 MWc d'installations industrielles",
      "Projet pilote de quartier intelligent avec micro-réseaux solaires"
    ]
  },
  {
    name: "Saint-Martin-d'Hères",
    slug: "saint-martin-dheres",
    department: "Isère",
    population: 47000,
    latitude: 45.1667,
    longitude: 5.7667,
    description: "Ville universitaire emblématique de la région grenobloise, Saint-Martin-d'Hères conjugue excellence académique et innovation énergétique. Cette commune, qui héberge le campus principal de l'Université Grenoble Alpes et de nombreux laboratoires de recherche, constitue un laboratoire grandeur nature pour les technologies solaires avancées. La jeunesse de sa population étudiante et la dynamique de recherche créent un environnement favorable aux expérimentations photovoltaïques.",
    ensoleillement: "2080+ heures/an",
    potentielSolaire: "Excellent (1280-1380 kWh/kWc/an)",
    particularites: [
      "Campus universitaire de 45 000 étudiants avec projets solaires éducatifs",
      "Laboratoires de recherche en énergies renouvelables et matériaux photovoltaïques",
      "Population jeune et sensibilisée aux enjeux de développement durable",
      "Nombreuses résidences étudiantes équipables en solutions collectives",
      "Politique municipale d'exemplarité énergétique sur bâtiments publics",
      "Partenariats université-entreprises pour innovations solaires"
    ],
    projetsRealises: [
      "Installation de 1,5 MWc sur campus universitaire avec recherche associée",
      "Équipement de 8 résidences étudiantes en autoconsommation collective",
      "Projet pilote de pérovskites sur bâtiment de recherche",
      "Installation de bornes de recharge pour vélos électriques étudiants"
    ]
  },
  {
    name: "Échirolles",
    slug: "echirolles",
    department: "Isère",
    population: 36000,
    latitude: 45.1442,
    longitude: 5.7108,
    description: "Commune industrielle de la métropole grenobloise en pleine transition énergétique, Échirolles développe une approche exemplaire des énergies renouvelables. Cette ville, avec ses zones d'activités étendues, ses quartiers d'habitat social en rénovation et ses nouveaux éco-quartiers, présente une diversité remarquable d'opportunités photovoltaïques. L'engagement municipal fort et les partenariats avec les entreprises locales accélèrent le déploiement du solaire.",
    ensoleillement: "2070+ heures/an",
    potentielSolaire: "Excellent (1270-1370 kWh/kWc/an)",
    particularites: [
      "Zone industrielle importante avec grandes toitures disponibles",
      "Quartiers d'habitat social en rénovation énergétique incluant le solaire",
      "Nouveaux éco-quartiers intégrant massivement les énergies renouvelables",
      "Partenariats public-privé pour développement du photovoltaïque",
      "Politique sociale d'accès aux énergies renouvelables pour tous",
      "Forte dynamique d'économie sociale et solidaire autour de l'énergie"
    ],
    projetsRealises: [
      "Installation de 800 kWc sur zone industrielle avec autoconsommation",
      "Équipement de 12 bâtiments d'habitat social (600 kWc total)",
      "Ferme solaire citoyenne de 1,8 MWc en financement participatif",
      "Projet d'autoconsommation collective sur nouvel éco-quartier"
    ]
  },
  {
    name: "Fontaine",
    slug: "fontaine",
    department: "Isère",
    population: 22000,
    latitude: 45.1931,
    longitude: 5.6847,
    description: "Positionnée aux portes de Grenoble, Fontaine mène une politique énergétique ambitieuse axée sur la participation citoyenne et l'innovation sociale. Cette commune, avec ses quartiers résidentiels diversifiés et son engagement dans la transition énergétique participative, développe des projets solaires originaux impliquant directement les habitants. La proximité du massif du Vercors et l'excellent ensoleillement créent des conditions favorables au photovoltaïque.",
    ensoleillement: "2050+ heures/an",
    potentielSolaire: "Excellent (1260-1360 kWh/kWc/an)",
    particularites: [
      "Politique énergétique participative avec forte implication citoyenne",
      "Quartiers résidentiels mixtes favorisant la diversité des projets",
      "Proximité du Vercors avec excellent potentiel d'ensoleillement",
      "Initiatives d'économie sociale et solidaire autour de l'énergie",
      "Projets innovants d'autoconsommation collective inter-quartiers",
      "Sensibilisation environnementale forte de la population"
    ],
    projetsRealises: [
      "Projet solaire citoyen de 1,2 MWc financé par les habitants",
      "Installation de 95 systèmes résidentiels en autoconsommation",
      "Équipement de groupe scolaire avec pédagogie énergétique",
      "Installation de bornes de recharge communautaires alimentées par solaire"
    ]
  },
  {
    name: "Voiron",
    slug: "voiron",
    department: "Isère",
    population: 20000,
    latitude: 45.3667,
    longitude: 5.5833,
    description: "Ville dynamique au pied du massif de la Chartreuse, Voiron allie tradition industrielle et innovation énergétique. Cette commune, réputée pour ses entreprises innovantes et sa qualité de vie, développe les énergies renouvelables dans une approche territoriale intégrée. Le patrimoine industriel reconverti, les zones d'activités modernes et les quartiers résidentiels offrent une palette complète d'opportunités pour le photovoltaïque.",
    ensoleillement: "2030+ heures/an",
    potentielSolaire: "Excellent (1250-1350 kWh/kWc/an)",
    particularites: [
      "Bassin industriel dynamique avec entreprises innovantes en cleantech",
      "Patrimoine industriel reconverti offrant de grandes surfaces",
      "Position géographique favorable au pied de la Chartreuse",
      "Politique municipale de soutien aux entreprises vertes",
      "Forte culture d'innovation et d'entrepreneuriat local",
      "Développement de l'économie circulaire intégrant les énergies renouvelables"
    ],
    projetsRealises: [
      "Installation de 1 MWc sur site industriel reconverti",
      "Équipement de zone d'activités Centr'Alp en toitures solaires",
      "Installation de 110 systèmes résidentiels avec optimisation",
      "Projet de stockage d'énergie communautaire innovant"
    ]
  },
  {
    name: "Bourgoin-Jallieu",
    slug: "bourgoin-jallieu",
    department: "Isère",
    population: 28000,
    latitude: 45.5833,
    longitude: 5.2833,
    description: "Ville industrielle dynamique au cœur de l'Isle Crémieu, Bourgoin-Jallieu mène une transition énergétique exemplaire dans le secteur manufacturier. Cette commune, réputée pour son tissu industriel diversifié et ses zones d'activités modernes, développe massivement le photovoltaïque sur ses sites de production. L'alliance entre tradition industrielle et innovation énergétique fait de Bourgoin-Jallieu un territoire pilote pour l'autoconsommation industrielle et les solutions solaires de grande puissance.",
    ensoleillement: "2040+ heures/an",
    potentielSolaire: "Excellent (1260-1360 kWh/kWc/an)",
    particularites: [
      "Pôle industriel majeur avec grandes toitures manufacturières disponibles",
      "Zone d'activités Isle d'Abeau en développement avec projets solaires intégrés",
      "Forte consommation énergétique industrielle adaptée à l'autoconsommation",
      "Politique municipale de soutien aux entreprises investissant dans le solaire",
      "Proximité des axes logistiques favorisant l'électromobilité industrielle",
      "Potentiel exceptionnel pour installations photovoltaïques de plusieurs MWc"
    ],
    projetsRealises: [
      "Installation de 2,5 MWc sur complexe industriel textile",
      "Équipement de zone logistique en ombrières solaires (1,8 MWc)",
      "Installation de 180 systèmes résidentiels avec stockage",
      "Projet pilote de micro-réseau industriel avec stockage communautaire"
    ]
  },
  {
    name: "Vienne",
    slug: "vienne",
    department: "Isère",
    population: 29000,
    latitude: 45.5167,
    longitude: 4.8667,
    description: "Ville d'art et d'histoire aux portes de Lyon, Vienne conjugue patrimoine antique et modernité énergétique. Cette cité gallo-romaine, située sur les rives du Rhône, développe les énergies renouvelables dans le respect de son héritage architectural exceptionnel. Les solutions photovoltaïques intégrées et les projets d'autoconsommation collective transforment progressivement le paysage énergétique de cette ville touristique et résidentielle.",
    ensoleillement: "2010+ heures/an",
    potentielSolaire: "Excellent (1240-1340 kWh/kWc/an)",
    particularites: [
      "Patrimoine historique exceptionnel nécessitant des solutions esthétiques adaptées",
      "Position stratégique sur le Rhône avec excellent potentiel d'ensoleillement",
      "Centre-ville touristique développant l'électromobilité pour visiteurs",
      "Quartiers résidentiels modernes en périphérie équipables en solaire",
      "Politique de développement durable respectueuse du patrimoine",
      "Projets innovants d'intégration architecturale du photovoltaïque"
    ],
    projetsRealises: [
      "Installation discrète de 150 systèmes sur toitures résidentielles",
      "Équipement de zone d'activités périurbaine (900 kWc)",
      "Projet pilote de tuiles solaires sur bâtiment historique classé",
      "Installation de bornes de recharge touristique alimentées par solaire"
    ]
  },
  {
    name: "Meylan",
    slug: "meylan",
    department: "Isère",
    population: 18000,
    latitude: 45.2167,
    longitude: 5.7833,
    description: "Commune résidentielle de prestige aux portes de Grenoble, Meylan bénéficie d'une situation privilégiée au pied des contreforts alpins. Cette ville, réputée pour ses quartiers pavillonnaires de standing et sa population aisée, constitue un marché premium pour les installations photovoltaïques haut de gamme. L'exposition exceptionnelle offerte par la topographie montagnarde et l'engagement environnemental des habitants créent des conditions idéales pour les solutions solaires innovantes.",
    ensoleillement: "2060+ heures/an",
    potentielSolaire: "Excellent (1280-1380 kWh/kWc/an)",
    particularites: [
      "Habitat pavillonnaire haut de gamme avec toitures optimalement exposées",
      "Topographie montagnarde offrant des expositions sud exceptionnelles",
      "Population à revenus élevés investissant dans les technologies avancées",
      "Proximité de Grenoble avec accès aux innovations cleantech",
      "Forte demande pour l'autoconsommation et l'indépendance énergétique",
      "Développement de l'électromobilité de luxe nécessitant des bornes"
    ],
    projetsRealises: [
      "Installation de 95 systèmes premium avec batteries et domotique",
      "Projet d'autoconsommation collective sur résidence de standing",
      "Équipement de villa pilote 100% autonome en énergie",
      "Installation de bornes de recharge haut de gamme dans quartiers résidentiels"
    ]
  },
  {
    name: "Saint-Égrève",
    slug: "saint-egreve",
    department: "Isère",
    population: 16500,
    latitude: 45.2333,
    longitude: 5.6833,
    description: "Nichée entre l'Isère et les premiers contreforts du Vercors, Saint-Égrève développe une approche territoriale innovante des énergies renouvelables. Cette commune péri-urbaine, avec ses quartiers résidentiels diversifiés et ses zones d'activités, bénéficie d'un cadre naturel exceptionnel pour le photovoltaïque. La politique municipale volontariste et l'engagement citoyen fort accélèrent la transition vers l'autonomie énergétique locale.",
    ensoleillement: "2050+ heures/an",
    potentielSolaire: "Excellent (1270-1370 kWh/kWc/an)",
    particularites: [
      "Situation géographique privilégiée entre Isère et massif du Vercors",
      "Quartiers résidentiels mixtes favorisant la diversité des projets solaires",
      "Politique municipale pionnière en transition énergétique territoriale",
      "Forte implication citoyenne dans les projets d'énergies renouvelables",
      "Proximité de Grenoble avec accès aux technologies innovantes",
      "Potentiel exceptionnel grâce aux expositions montagnardes"
    ],
    projetsRealises: [
      "Installation de 120 systèmes résidentiels avec optimiseurs de puissance",
      "Projet de ferme solaire citoyenne de 1,5 MWc en financement participatif",
      "Équipement de complexe sportif municipal avec pédagogie énergétique",
      "Installation de réseau de bornes de recharge intercommunal"
    ]
  },
  {
    name: "Seyssinet-Pariset",
    slug: "seyssinet-pariset",
    department: "Isère",
    population: 12500,
    latitude: 45.1667,
    longitude: 5.6833,
    description: "Commune résidentielle au cadre naturel préservé, Seyssinet-Pariset développe les énergies renouvelables dans une approche respectueuse de l'environnement. Cette ville, située aux portes du Vercors et proche de Grenoble, combine habitat pavillonnaire de qualité et engagement écologique exemplaire. La sensibilité environnementale de sa population et la beauté des paysages créent un contexte favorable aux projets solaires esthétiques et performants.",
    ensoleillement: "2040+ heures/an",
    potentielSolaire: "Excellent (1260-1360 kWh/kWc/an)",
    particularites: [
      "Cadre naturel préservé aux portes du Parc du Vercors",
      "Habitat pavillonnaire de qualité avec propriétés bien exposées",
      "Population très sensibilisée aux enjeux environnementaux",
      "Politique municipale d'exemplarité écologique et énergétique",
      "Proximité de Grenoble favorisant l'accès aux innovations",
      "Demande forte pour solutions solaires esthétiques et discrètes"
    ],
    projetsRealises: [
      "Installation de 75 systèmes résidentiels avec intégration paysagère",
      "Projet d'autoconsommation collective sur éco-hameau",
      "Équipement de bâtiments publics en solutions exemplaires",
      "Installation de mobilier urbain solaire innovant"
    ]
  },
  {
    name: "La Tour-du-Pin",
    slug: "la-tour-du-pin",
    department: "Isère",
    population: 8500,
    latitude: 45.5667,
    longitude: 5.4333,
    description: "Charmante ville historique au cœur des Terres Froides, La Tour-du-Pin mène une politique énergétique ambitieuse adaptée à son territoire rural. Cette commune, avec son patrimoine médiéval préservé et ses espaces agricoles étendus, développe l'agrivoltaïsme et les solutions solaires respectueuses du paysage. L'alliance entre tradition rurale et innovation énergétique fait de cette ville un modèle de transition énergétique en milieu rural.",
    ensoleillement: "2020+ heures/an",
    potentielSolaire: "Excellent (1250-1350 kWh/kWc/an)",
    particularites: [
      "Territoire rural avec fort potentiel pour l'agrivoltaïsme",
      "Patrimoine historique médiéval nécessitant des solutions adaptées",
      "Exploitations agricoles innovantes adoptant le solaire",
      "Politique de développement rural durable et énergétique",
      "Espaces disponibles pour projets solaires de grande envergure",
      "Population rurale engagée dans la transition énergétique"
    ],
    projetsRealises: [
      "Installation agrivoltaïque pilote de 1,2 MWc sur exploitation céréalière",
      "Équipement de 45 maisons individuelles rurales",
      "Projet solaire sur bâtiments agricoles (élevage, stockage)",
      "Installation de bornes de recharge rapide sur axes départementaux"
    ]
  },
  {
    name: "Villefontaine",
    slug: "villefontaine",
    department: "Isère",
    population: 19000,
    latitude: 45.6167,
    longitude: 5.15,
    description: "Ville nouvelle créée dans les années 1970, Villefontaine incarne la modernité urbaine et énergétique. Cette commune, planifiée selon les principes du développement durable avant l'heure, intègre massivement les énergies renouvelables dans son tissu urbain. Les grands ensembles, zones commerciales et équipements publics offrent un potentiel considérable pour les installations photovoltaïques de toutes envergures.",
    ensoleillement: "2030+ heures/an",
    potentielSolaire: "Excellent (1250-1350 kWh/kWc/an)",
    particularites: [
      "Ville nouvelle moderne avec urbanisme favorable au solaire",
      "Grands ensembles et équipements publics aux toitures adaptées",
      "Zone commerciale importante avec potentiel d'ombrières",
      "Population jeune et sensibilisée aux enjeux énergétiques",
      "Politique municipale d'innovation urbaine et énergétique",
      "Proximité de pôles technologiques et d'innovation"
    ],
    projetsRealises: [
      "Installation de 300 kWc sur centre commercial avec autoconsommation",
      "Équipement de 8 copropriétés en autoconsommation collective",
      "Projet de ferme solaire urbaine sur parking (800 kWc)",
      "Installation de réseau de bornes de recharge municipales"
    ]
  },
  {
    name: "L'Isle-d'Abeau",
    slug: "lisle-dabeau",
    department: "Isère",
    population: 16000,
    latitude: 45.6167,
    longitude: 5.2167,
    description: "Commune de la communauté d'agglomération Porte de l'Isère, L'Isle-d'Abeau développe les énergies renouvelables dans une approche territoriale intégrée. Cette ville, située au cœur d'un bassin économique dynamique, combine zones résidentielles modernes et pôles d'activités innovants. Le développement urbain maîtrisé et l'engagement municipal créent des opportunités exceptionnelles pour le photovoltaïque résidentiel et tertiaire.",
    ensoleillement: "2025+ heures/an",
    potentielSolaire: "Excellent (1245-1345 kWh/kWc/an)",
    particularites: [
      "Développement urbain moderne avec intégration énergétique",
      "Zones d'activités dynamiques demandant des solutions énergétiques",
      "Quartiers résidentiels récents aux normes énergétiques élevées",
      "Politique intercommunale de transition énergétique",
      "Proximité du pôle logistique favorisant l'électromobilité",
      "Potentiel important pour autoconsommation collective"
    ],
    projetsRealises: [
      "Installation de 220 systèmes résidentiels sur constructions neuves",
      "Équipement de zone d'activités en toitures solaires (1,1 MWc)",
      "Projet d'autoconsommation collective sur nouveau quartier",
      "Installation d'ombrières solaires sur parkings publics"
    ]
  },
  {
    name: "Sassenage",
    slug: "sassenage",
    department: "Isère",
    population: 11500,
    latitude: 45.2167,
    longitude: 5.6667,
    description: "Aux portes du Vercors et proche de Grenoble, Sassenage allie patrimoine naturel exceptionnel et innovation énergétique. Cette commune, célèbre pour ses grottes et ses paysages préservés, développe les énergies renouvelables dans le respect de son environnement remarquable. L'engagement écologique de sa population et la qualité de son cadre de vie créent un contexte favorable aux projets solaires respectueux et performants.",
    ensoleillement: "2035+ heures/an",
    potentielSolaire: "Excellent (1255-1355 kWh/kWc/an)",
    particularites: [
      "Situation exceptionnelle aux portes du Parc naturel du Vercors",
      "Patrimoine naturel remarquable nécessitant des solutions respectueuses",
      "Population très engagée dans la préservation environnementale",
      "Habitat pavillonnaire de qualité avec expositions optimales",
      "Politique municipale d'exemplarité écologique",
      "Proximité de Grenoble avec accès aux technologies vertes"
    ],
    projetsRealises: [
      "Installation de 85 systèmes résidentiels avec intégration paysagère",
      "Projet solaire sur équipements touristiques (Grottes de Sassenage)",
      "Équipement de bâtiments publics en solutions exemplaires",
      "Installation de bornes de recharge pour tourisme vert"
    ]
  },
  {
    name: "Crolles",
    slug: "crolles",
    department: "Isère",
    population: 9000,
    latitude: 45.2833,
    longitude: 6.0167,
    description: "Commune technologique de pointe au pied de la Chartreuse, Crolles conjugue excellence industrielle et innovation énergétique. Cette ville, siège de STMicroelectronics et centre européen de la microélectronique, développe les énergies renouvelables avec une approche high-tech. L'écosystème technologique exceptionnel et la présence d'ingénieurs spécialisés favorisent l'adoption de solutions photovoltaïques avancées et intelligentes.",
    ensoleillement: "2045+ heures/an",
    potentielSolaire: "Excellent (1265-1365 kWh/kWc/an)",
    particularites: [
      "Pôle technologique mondial de la microélectronique",
      "Présence de STMicroelectronics avec projets énergétiques innovants",
      "Population d'ingénieurs et techniciens sensibilisés aux technologies vertes",
      "Écosystème d'innovation favorable aux solutions solaires intelligentes",
      "Situation géographique optimale au pied de la Chartreuse",
      "Potentiel pour développement de technologies photovoltaïques avancées"
    ],
    projetsRealises: [
      "Installation pilote de 1,5 MWc sur site industriel STMicroelectronics",
      "Équipement de 65 maisons d'ingénieurs en systèmes intelligents",
      "Projet de R&D sur cellules photovoltaïques de nouvelle génération",
      "Installation de bornes de recharge ultra-rapides connectées"
    ]
  },
  {
    name: "Chambéry",
    slug: "chambery",
    department: "Savoie (73)",
    population: 59000,
    description: "Capitale historique de la Savoie, Chambéry allie patrimoine médiéval et modernité alpine. Cette ville dynamique, nichée entre les massifs des Bauges et de la Chartreuse, offre un cadre de vie exceptionnel pour l'installation de panneaux solaires.",
    latitude: 45.5647,
    longitude: 5.9178,
    ensoleillement: "1850+ heures/an",
    potentielSolaire: "Très bon (1150-1250 kWh/kWc/an)",
    particularites: [
      "Capitale historique de la Savoie avec un riche patrimoine",
      "Climat alpin favorable au photovoltaïque",
      "Ville universitaire dynamique et écologique",
      "Proximité des stations de ski et parcs naturels"
    ],
    projetsRealises: [
      "Installation 6 kWc sur maison savoyarde traditionnelle",
      "Projet résidentiel avec batterie de stockage",
      "Installation sur toiture terrasse en centre-ville"
    ]
  },
  {
    name: "Aix-les-Bains",
    slug: "aix-les-bains",
    department: "Savoie (73)",
    population: 30000,
    description: "Station thermale prestigieuse sur les rives du lac du Bourget, Aix-les-Bains conjugue thermalisme, tourisme et qualité de vie. Son ensoleillement exceptionnel en fait un territoire idéal pour le photovoltaïque.",
    latitude: 45.6886,
    longitude: 5.9155,
    ensoleillement: "1900+ heures/an",
    potentielSolaire: "Excellent (1200-1300 kWh/kWc/an)",
    particularites: [
      "Station thermale au bord du lac du Bourget",
      "Ensoleillement exceptionnel pour la région alpine",
      "Architecture Belle Époque et patrimoine thermal",
      "Tourisme vert et développement durable"
    ],
    projetsRealises: [
      "Installation 9 kWc sur villa avec vue lac",
      "Projet photovoltaïque sur établissement thermal",
      "Installation résidentielle avec optimiseurs"
    ]
  },
  {
    name: "La Motte-Servolex",
    slug: "la-motte-servolex",
    department: "Savoie (73)",
    population: 12500,
    description: "Commune résidentielle prisée proche de Chambéry, La Motte-Servolex offre un cadre de vie paisible au pied des Alpes. Son développement maîtrisé favorise les installations photovoltaïques durables.",
    latitude: 45.5944,
    longitude: 5.8747,
    ensoleillement: "1820+ heures/an",
    potentielSolaire: "Très bon (1130-1230 kWh/kWc/an)",
    particularites: [
      "Commune résidentielle en expansion",
      "Proximité immédiate de Chambéry",
      "Cadre alpin préservé",
      "Politique environnementale volontariste"
    ],
    projetsRealises: [
      "Installation 3 kWc sur maison neuve",
      "Projet résidentiel avec autoconsommation",
      "Installation sur pavillon familial"
    ]
  },
  {
    name: "Bourg-Saint-Maurice",
    slug: "bourg-saint-maurice",
    department: "Savoie (73)",
    population: 7500,
    description: "Porte d'entrée de la Tarentaise et des Arcs, Bourg-Saint-Maurice bénéficie d'un ensoleillement montagnard exceptionnel. Cette station de montagne mise sur les énergies renouvelables pour son développement durable.",
    latitude: 45.6197,
    longitude: 6.7697,
    ensoleillement: "2100+ heures/an",
    potentielSolaire: "Excellent (1350-1450 kWh/kWc/an)",
    particularites: [
      "Porte d'entrée de la station Les Arcs",
      "Ensoleillement montagnard optimal",
      "Tourisme hivernal et estival",
      "Développement des énergies vertes en montagne"
    ],
    projetsRealises: [
      "Installation 12 kWc sur chalet d'altitude",
      "Projet photovoltaïque avec stockage hivernal",
      "Installation sur refuge de montagne"
    ]
  },
  {
    name: "Albertville",
    slug: "albertville",
    department: "Savoie (73)",
    population: 19000,
    description: "Ville olympique de 1992, Albertville est un centre économique majeur de la Tarentaise. Son engagement pour l'environnement et son ensoleillement alpin en font un territoire d'excellence pour le photovoltaïque.",
    latitude: 45.6759,
    longitude: 6.3964,
    ensoleillement: "1950+ heures/an",
    potentielSolaire: "Excellent (1250-1350 kWh/kWc/an)",
    particularites: [
      "Ville olympique des JO d'hiver 1992",
      "Centre économique de la Tarentaise",
      "Patrimoine médiéval de Conflans",
      "Engagement fort pour la transition énergétique"
    ],
    projetsRealises: [
      "Installation 15 kWc sur bâtiment olympique",
      "Projet résidentiel quartier Conflans",
      "Installation photovoltaïque avec monitoring"
    ]
  },
  {
    name: "Saint-Jean-de-Maurienne",
    slug: "saint-jean-de-maurienne",
    department: "Savoie (73)",
    population: 8000,
    description: "Capitale de la Maurienne, Saint-Jean-de-Maurienne est riche d'un patrimoine exceptionnel. Située dans une vallée ensoleillée, elle développe activement les énergies renouvelables.",
    latitude: 45.2761,
    longitude: 6.3436,
    ensoleillement: "2000+ heures/an",
    potentielSolaire: "Excellent (1300-1400 kWh/kWc/an)",
    particularites: [
      "Capitale historique de la Maurienne",
      "Cathédrale et patrimoine religieux exceptionnel",
      "Vallée ensoleillée favorable au photovoltaïque",
      "Carrefour des grandes traversées alpines"
    ],
    projetsRealises: [
      "Installation 8 kWc sur maison mauriennaise",
      "Projet photovoltaïque centre historique",
      "Installation résidentielle avec batterie"
    ]
  },
  {
    name: "Ugine",
    slug: "ugine",
    department: "Savoie (73)",
    population: 7000,
    description: "Ville industrielle dynamique du Val d'Arly, Ugine concilie tradition métallurgique et innovation environnementale. Son engagement pour les énergies propres favorise le développement du photovoltaïque.",
    latitude: 45.7542,
    longitude: 6.4242,
    ensoleillement: "1880+ heures/an",
    potentielSolaire: "Très bon (1180-1280 kWh/kWc/an)",
    particularites: [
      "Centre industriel du Val d'Arly",
      "Tradition métallurgique et innovation",
      "Proximité des stations de ski",
      "Transition vers l'industrie verte"
    ],
    projetsRealises: [
      "Installation 5 kWc sur maison ouvrière",
      "Projet industriel photovoltaïque",
      "Installation résidentielle moderne"
    ]
  },
  {
    name: "Modane",
    slug: "modane",
    department: "Savoie (73)",
    population: 3000,
    description: "Ville frontière au cœur de la Haute-Maurienne, Modane bénéficie d'un ensoleillement montagnard exceptionnel. Cette commune de haute altitude mise sur les énergies renouvelables pour son avenir.",
    latitude: 45.1761,
    longitude: 6.6547,
    ensoleillement: "2200+ heures/an",
    potentielSolaire: "Exceptionnel (1400-1500 kWh/kWc/an)",
    particularites: [
      "Ville frontière avec l'Italie",
      "Altitude élevée et fort ensoleillement",
      "Patrimoine ferroviaire historique",
      "Parc national de la Vanoise proche"
    ],
    projetsRealises: [
      "Installation 10 kWc maison d'altitude",
      "Projet photovoltaïque avec neige",
      "Installation résidentielle optimisée"
    ]
  },
  {
    name: "Annecy",
    slug: "annecy",
    department: "Haute-Savoie (74)",
    population: 53000,
    description: "Surnommée la 'Venise des Alpes', Annecy conjugue patrimoine exceptionnel et qualité de vie alpine. Son lac cristallin et ses canaux historiques font de cette ville un joyau pour l'installation de panneaux solaires.",
    latitude: 45.8992,
    longitude: 6.1294,
    ensoleillement: "1920+ heures/an",
    potentielSolaire: "Excellent (1220-1320 kWh/kWc/an)",
    particularites: [
      "Venise des Alpes avec lac cristallin",
      "Patrimoine médiéval exceptionnel",
      "Ville la plus propre d'Europe",
      "Ensoleillement alpin optimal"
    ],
    projetsRealises: [
      "Installation 12 kWc vue lac d'Annecy",
      "Projet photovoltaïque vieille ville",
      "Installation résidentielle avec stockage"
    ]
  },
  {
    name: "Thonon-les-Bains",
    slug: "thonon-les-bains",
    department: "Haute-Savoie (74)",
    population: 35000,
    description: "Station thermale réputée sur les rives du lac Léman, Thonon-les-Bains bénéficie d'un microclimat exceptionnel. Son orientation sud et sa proximité du lac en font un territoire idéal pour le photovoltaïque.",
    latitude: 46.3700,
    longitude: 6.4811,
    ensoleillement: "1950+ heures/an",
    potentielSolaire: "Excellent (1250-1350 kWh/kWc/an)",
    particularites: [
      "Station thermale sur le lac Léman",
      "Microclimat exceptionnel lac alpin",
      "Port de plaisance et thermalisme",
      "Développement durable lacustre"
    ],
    projetsRealises: [
      "Installation 18 kWc villa lac Léman",
      "Projet photovoltaïque thermal",
      "Installation résidentielle optimiseurs"
    ]
  },
  {
    name: "Saint-Étienne",
    slug: "saint-etienne",
    department: "Loire",
    population: 172565,
    latitude: 45.4397,
    longitude: 4.3872,
    description: "Saint-Étienne, ancienne capitale industrielle française, se réinvente aujourd'hui comme ville créative et durable. Située dans le département de la Loire, cette métropole offre un potentiel solaire intéressant grâce à son climat continental et ses nombreux espaces urbains disponibles pour l'installation de panneaux photovoltaïques.",
    ensoleillement: "1800 heures/an",
    potentielSolaire: "Excellent potentiel avec 1800h de soleil annuel et de nombreuses toitures industrielles reconvertibles",
    particularites: [
      "Ancienne ville industrielle en reconversion énergétique",
      "Nombreuses friches industrielles disponibles pour le solaire",
      "Politique municipale favorable aux énergies renouvelables",
      "Climat continental avec bon ensoleillement"
    ],
    projetsRealises: [
      "Installation de 500 kWc sur le toit du centre commercial Steel",
      "Projet de centrale solaire sur l'ancienne mine de Roche-la-Molière",
      "Équipement solaire de l'école des Mines"
    ]
  },
  {
    name: "Roanne",
    slug: "roanne",
    department: "Loire",
    population: 34663,
    latitude: 46.0344,
    longitude: 4.0731,
    description: "Roanne, ville d'art et d'histoire située le long de la Loire, développe une politique énergétique ambitieuse. Cette commune de la Loire bénéficie d'un ensoleillement favorable et d'un patrimoine bâti adapté aux installations solaires, tant pour les particuliers que les entreprises.",
    ensoleillement: "1850 heures/an",
    potentielSolaire: "Très bon potentiel avec orientation sud privilégiée et patrimoine bâti adapté",
    particularites: [
      "Situation privilégiée en bord de Loire",
      "Patrimoine architectural adapté au solaire",
      "Soutien municipal aux projets d'autoconsommation",
      "Zone d'activités propice aux installations industrielles"
    ],
    projetsRealises: [
      "Installation sur le lycée Albert Thomas",
      "Centrale solaire de 300 kWc sur zone industrielle",
      "Équipement de la piscine municipale"
    ]
  },
  {
    name: "Montbrison",
    slug: "montbrison",
    department: "Loire",
    population: 15478,
    latitude: 45.6078,
    longitude: 4.0647,
    description: "Montbrison, ancienne capitale du Forez, conjugue patrimoine historique et transition énergétique. Cette ville de la Loire offre un cadre idéal pour le développement du solaire photovoltaïque, avec un ensoleillement généreux et une forte sensibilité environnementale de ses habitants.",
    ensoleillement: "1820 heures/an",
    potentielSolaire: "Bon potentiel avec exposition sud favorable et bâti traditionnel adaptable",
    particularites: [
      "Capitale historique du Forez",
      "Architecture traditionnelle compatible avec le solaire",
      "Population sensibilisée aux enjeux environnementaux",
      "Cadre rural privilégié pour l'autoconsommation"
    ],
    projetsRealises: [
      "Installation sur le collège Mario Meunier",
      "Projet participatif de centrale villageoise",
      "Équipement solaire de la mairie"
    ]
  },
  {
    name: "Annemasse",
    slug: "annemasse",
    department: "Haute-Savoie",
    population: 36250,
    latitude: 46.1936,
    longitude: 6.2267,
    description: "Annemasse, ville frontalière dynamique face à Genève, mise sur les énergies renouvelables dans sa stratégie de développement durable. Cette commune de Haute-Savoie bénéficie d'un ensoleillement alpin favorable et d'une forte demande pour l'autoconsommation solaire.",
    ensoleillement: "1750 heures/an",
    potentielSolaire: "Excellent potentiel avec exposition alpine et forte demande d'autoconsommation",
    particularites: [
      "Proximité de Genève et dynamisme économique",
      "Ensoleillement alpin favorable",
      "Population à fort pouvoir d'achat sensible à l'écologie",
      "Nombreux projets de construction neuve intégrant le solaire"
    ],
    projetsRealises: [
      "Installation sur le centre commercial Porte de Genève",
      "Projet de quartier solaire aux Livrets",
      "Équipement de l'hôtel de ville"
    ]
  },
  {
    name: "Cluses",
    slug: "cluses",
    department: "Haute-Savoie",
    population: 17731,
    latitude: 46.0617,
    longitude: 6.5797,
    description: "Cluses, capitale mondiale du décolletage, intègre l'innovation solaire dans son écosystème industriel. Cette ville de Haute-Savoie offre un potentiel remarquable pour les installations photovoltaïques, notamment sur les toitures industrielles et les bâtiments tertiaires.",
    ensoleillement: "1780 heures/an",
    potentielSolaire: "Très bon potentiel avec nombreuses toitures industrielles et exposition alpine",
    particularites: [
      "Pôle industriel du décolletage",
      "Nombreuses toitures d'usines disponibles",
      "Innovation technologique et transition énergétique",
      "Vallée de l'Arve ensoleillée"
    ],
    projetsRealises: [
      "Installation de 800 kWc sur l'usine Swatch Group",
      "Projet solaire du lycée Charles Poncet",
      "Centrale photovoltaïque sur la zone industrielle"
    ]
  },
  {
    name: "Bonneville",
    slug: "bonneville",
    department: "Haute-Savoie",
    population: 12824,
    latitude: 46.0747,
    longitude: 6.4086,
    description: "Bonneville, porte d'entrée de la vallée de l'Arve, développe une stratégie énergétique alpine ambitieuse. Cette commune de Haute-Savoie bénéficie d'un ensoleillement montagnard favorable et d'une position géographique idéale pour les projets solaires.",
    ensoleillement: "1770 heures/an",
    potentielSolaire: "Bon potentiel avec exposition sud-est et cadre montagnard ensoleillé",
    particularites: [
      "Porte d'entrée de la vallée de l'Arve",
      "Ensoleillement montagnard privilégié",
      "Bâti traditionnel alpin adaptable",
      "Politique locale favorable aux énergies renouvelables"
    ],
    projetsRealises: [
      "Installation sur le collège Guillaume Fichet",
      "Projet de toiture solaire sur la salle polyvalente",
      "Équipement photovoltaïque de la piscine"
    ]
  },
  {
    name: "Sallanches",
    slug: "sallanches",
    department: "Haute-Savoie",
    population: 16358,
    latitude: 45.9386,
    longitude: 6.6331,
    description: "Sallanches, au pied du Mont-Blanc, conjugue patrimoine montagnard et innovation énergétique. Cette ville de Haute-Savoie offre un cadre exceptionnel pour le développement du solaire, avec un ensoleillement alpin remarquable et une forte sensibilité environnementale.",
    ensoleillement: "1850 heures/an",
    potentielSolaire: "Excellent potentiel avec exposition alpine exceptionnelle et altitude favorable",
    particularites: [
      "Vue imprenable sur le Mont-Blanc",
      "Altitude favorable à l'ensoleillement",
      "Tourisme et économie locale dynamiques",
      "Patrimoine montagnard compatible avec le solaire"
    ],
    projetsRealises: [
      "Installation sur le centre aquatique Mont-Blanc",
      "Projet solaire du lycée Mont-Blanc René Dayve",
      "Centrale photovoltaïque sur la zone commerciale"
    ]
  },
  {
    name: "Rumilly",
    slug: "rumilly",
    department: "Haute-Savoie",
    population: 15617,
    latitude: 45.8611,
    longitude: 5.9494,
    description: "Rumilly, carrefour historique entre lac et montagne, mise sur les énergies renouvelables pour son avenir. Cette commune de Haute-Savoie bénéficie d'un microclimat favorable et d'un patrimoine bâti adapté aux installations solaires photovoltaïques.",
    ensoleillement: "1790 heures/an",
    potentielSolaire: "Très bon potentiel avec microclimat lacustre et exposition sud privilégiée",
    particularites: [
      "Carrefour entre Annecy et Aix-les-Bains",
      "Microclimat lacustre favorable",
      "Secteur tertiaire développé",
      "Bâti traditionnel savoyard adaptable"
    ],
    projetsRealises: [
      "Installation sur le collège Côte Rousse",
      "Projet de centrale solaire participative",
      "Équipement de la maison de santé"
    ]
  },
  {
    name: "Gaillard",
    slug: "gaillard",
    department: "Haute-Savoie",
    population: 11843,
    latitude: 46.1867,
    longitude: 6.2069,
    description: "Gaillard, commune frontalière de l'agglomération genevoise, développe une politique énergétique transfrontalière. Cette ville de Haute-Savoie offre un potentiel solaire remarquable, renforcé par une forte demande locale pour l'autoconsommation photovoltaïque.",
    ensoleillement: "1760 heures/an",
    potentielSolaire: "Excellent potentiel avec proximité genevoise et forte demande d'autoconsommation",
    particularites: [
      "Agglomération franco-genevoise",
      "Population sensible à l'écologie",
      "Forte demande d'autoconsommation",
      "Bâti résidentiel moderne adapté au solaire"
    ],
    projetsRealises: [
      "Installation sur l'école des Bossons",
      "Projet de quartier solaire résidentiel",
      "Équipement photovoltaïque de la médiathèque"
    ]
  },
  {
    name: "Seynod",
    slug: "seynod",
    department: "Haute-Savoie",
    population: 22185,
    latitude: 45.8797,
    longitude: 6.0889,
    description: "Seynod, commune résidentielle de l'agglomération annécienne, place la transition énergétique au cœur de ses priorités. Cette ville de Haute-Savoie bénéficie d'un ensoleillement lacustre favorable et d'une population engagée dans le développement durable.",
    ensoleillement: "1810 heures/an",
    potentielSolaire: "Très bon potentiel avec cadre lacustre et habitat pavillonnaire adapté",
    particularites: [
      "Agglomération d'Annecy",
      "Cadre lacustre ensoleillé",
      "Habitat pavillonnaire privilégié",
      "Population engagée dans le développement durable"
    ],
    projetsRealises: [
      "Installation sur le groupe scolaire des Balmettes",
      "Projet de toitures solaires résidentielles",
      "Équipement de la salle de spectacles"
    ]
  },
  {
    name: "Cran-Gevrier",
    slug: "cran-gevrier",
    department: "Haute-Savoie",
    population: 18000,
    latitude: 45.8985,
    longitude: 6.1098,
    description: "Commune résidentielle paisible située sur les rives du lac d'Annecy, Cran-Gevrier bénéficie d'un cadre exceptionnel pour le développement des énergies renouvelables. Avec ses maisons individuelles et ses résidences collectives offrant de belles expositions sud, cette ville de Haute-Savoie présente un potentiel solaire remarquable. Son climat alpin tempéré et ses 1900+ heures d'ensoleillement annuel en font un territoire idéal pour l'autoconsommation photovoltaïque et l'installation de bornes de recharge électrique.",
    ensoleillement: "1900+ heures/an",
    potentielSolaire: "Très bon (1150-1250 kWh/kWc/an)",
    particularites: [
      "Situation privilégiée au bord du lac d'Annecy avec microclimat favorable",
      "Habitat principalement pavillonnaire avec toitures bien orientées",
      "Proximité d'Annecy et développement du transport électrique",
      "Commune engagée dans la transition énergétique locale",
      "Architecture alpine traditionnelle adaptée aux installations solaires",
      "Demande croissante en solutions d'autoconsommation résidentielle"
    ]
  },
  {
    name: "Saint-Priest",
    slug: "saint-priest",
    department: "Rhône",
    population: 47000,
    latitude: 45.6942,
    longitude: 4.9417,
    description: "Ville dynamique de l'est lyonnais, Saint-Priest se distingue par son tissu économique diversifié et ses nombreuses zones d'activités. Cette commune moderne du Rhône, avec ses quartiers résidentiels en expansion et ses infrastructures commerciales importantes, offre un potentiel considérable pour les installations photovoltaïques. Son ensoleillement généreux et sa position stratégique dans la métropole lyonnaise en font un territoire privilégié pour le développement des énergies renouvelables, tant pour les particuliers que pour les professionnels.",
    ensoleillement: "2000+ heures/an",
    potentielSolaire: "Excellent (1200-1300 kWh/kWc/an)",
    particularites: [
      "Zone d'activités importantes avec nombreuses toitures industrielles",
      "Quartiers résidentiels modernes propices au solaire",
      "Forte croissance démographique et urbaine",
      "Développement du parc automobile électrique",
      "Politique locale favorable aux énergies renouvelables",
      "Proximité de l'aéroport Lyon-Saint-Exupéry"
    ]
  },
  {
    name: "Caluire-et-Cuire",
    slug: "caluire-et-cuire",
    department: "Rhône",
    population: 42000,
    latitude: 45.7975,
    longitude: 4.8508,
    description: "Commune résidentielle prisée du nord de Lyon, Caluire-et-Cuire bénéficie d'une situation géographique exceptionnelle sur les hauteurs de la Saône. Cette ville du Rhône, avec ses quartiers pavillonnaires et ses immeubles de standing, présente un potentiel solaire remarquable grâce à ses nombreuses toitures bien exposées. Son caractère résidentiel haut de gamme et sa proximité immédiate avec Lyon en font un territoire de choix pour les installations photovoltaïques et les solutions d'autoconsommation énergétique.",
    ensoleillement: "1980+ heures/an",
    potentielSolaire: "Très bon (1180-1280 kWh/kWc/an)",
    particularites: [
      "Commune résidentielle haut de gamme avec habitat pavillonnaire",
      "Situation sur les hauteurs offrant une excellente exposition",
      "Proximité immédiate du centre de Lyon",
      "Population sensibilisée aux enjeux environnementaux",
      "Architecture de qualité adaptée aux installations discrètes",
      "Forte demande en solutions de recharge électrique"
    ]
  },
  {
    name: "Bron",
    slug: "bron",
    department: "Rhône",
    population: 40000,
    latitude: 45.7311,
    longitude: 4.9111,
    description: "Ville de l'est lyonnais en pleine mutation urbaine, Bron combine harmonieusement zones résidentielles, commerciales et d'activités. Cette commune du Rhône, connue pour son aéroport historique et ses quartiers en renouvellement, offre de nombreuses opportunités pour le développement des énergies renouvelables. Avec ses nouveaux éco-quartiers et ses infrastructures modernes, Bron s'impose comme un territoire d'innovation pour les solutions photovoltaïques et les systèmes de stockage énergétique.",
    ensoleillement: "1950+ heures/an",
    potentielSolaire: "Très bon (1150-1250 kWh/kWc/an)",
    particularites: [
      "Renouvellement urbain avec éco-quartiers innovants",
      "Mix habitat individuel et collectif moderne",
      "Présence de l'aéroport Lyon-Bron",
      "Zones d'activités avec potentiel photovoltaïque",
      "Politique locale d'accompagnement énergétique",
      "Développement des mobilités douces et électriques"
    ]
  },
  {
    name: "Meyzieu",
    slug: "meyzieu",
    department: "Rhône",
    population: 32000,
    latitude: 45.7656,
    longitude: 5.0231,
    description: "Commune de l'est lyonnais au charme authentique, Meyzieu séduit par son cadre de vie préservé et ses quartiers résidentiels paisibles. Cette ville du Rhône, avec ses maisons individuelles et ses espaces verts généreux, présente un potentiel solaire intéressant pour les familles souhaitant s'orienter vers l'autoconsommation. Son développement maîtrisé et sa proximité avec les grands axes de communication en font un territoire propice à l'installation de panneaux photovoltaïques et de bornes de recharge domiciliaires.",
    ensoleillement: "1920+ heures/an",
    potentielSolaire: "Bon (1100-1200 kWh/kWc/an)",
    particularites: [
      "Ville résidentielle avec forte proportion de maisons individuelles",
      "Cadre de vie préservé et espaces verts abondants",
      "Population sensible aux questions environnementales",
      "Développement de nouveaux quartiers durables",
      "Desserte en transport en commun vers Lyon",
      "Politique municipale d'accompagnement des projets verts"
    ]
  },
  {
    name: "Rillieux-la-Pape",
    slug: "rillieux-la-pape",
    department: "Rhône",
    population: 30000,
    latitude: 45.8197,
    longitude: 4.8975,
    description: "Commune du nord de Lyon en pleine transformation, Rillieux-la-Pape incarne la transition vers une ville durable et connectée. Cette ville du Rhône, avec ses quartiers diversifiés et ses projets de renouvellement urbain, offre de belles perspectives pour le développement des énergies renouvelables. Son engagement dans la smart city et ses nombreuses rénovations énergétiques en font un territoire d'expérimentation privilégié pour les solutions photovoltaïques innovantes et les systèmes de gestion intelligente de l'énergie.",
    ensoleillement: "1940+ heures/an",
    potentielSolaire: "Bon (1120-1220 kWh/kWc/an)",
    particularites: [
      "Ville en transition vers le numérique et l'énergie verte",
      "Programmes de rénovation urbaine ambitieux",
      "Mix architectural favorisant les installations solaires",
      "Développement de la mobilité électrique",
      "Partenariats avec la métropole pour l'énergie",
      "Population jeune et sensibilisée aux enjeux climatiques"
    ]
  },
  {
    name: "Décines-Charpieu",
    slug: "decines-charpieu",
    department: "Rhône",
    population: 27000,
    latitude: 45.7711,
    longitude: 4.9589,
    description: "Ville sportive de l'est lyonnais, Décines-Charpieu rayonne bien au-delà de ses frontières grâce à son stade emblématique et ses infrastructures modernes. Cette commune dynamique du Rhône, avec ses quartiers résidentiels en expansion et ses équipements publics innovants, présente un potentiel remarquable pour les énergies renouvelables. Son image de ville moderne et son engagement dans le développement durable en font un territoire privilégié pour les installations photovoltaïques et les solutions de mobilité électrique.",
    ensoleillement: "1960+ heures/an",
    potentielSolaire: "Très bon (1160-1260 kWh/kWc/an)",
    particularites: [
      "Ville moderne avec infrastructures sportives de renommée",
      "Quartiers résidentiels en développement",
      "Politique énergétique ambitieuse",
      "Forte visibilité médiatique favorable aux projets verts",
      "Proximité des grands axes et de Lyon",
      "Population active et engagée dans la transition énergétique"
    ]
  },
  {
    name: "Oullins",
    slug: "oullins",
    department: "Rhône",
    population: 26000,
    latitude: 45.7156,
    longitude: 4.8083,
    description: "Charmante commune du sud-ouest lyonnais, Oullins séduit par son patrimoine architectural et sa proximité avec le centre de Lyon. Cette ville du Rhône, avec ses maisons de caractère et ses immeubles bourgeois, offre un cadre idéal pour des installations photovoltaïques respectueuses du patrimoine. Son positionnement géographique privilégié et sa population consciente des enjeux environnementaux en font un territoire de choix pour le développement de l'autoconsommation solaire et des bornes de recharge électrique.",
    ensoleillement: "1990+ heures/an",
    potentielSolaire: "Très bon (1190-1290 kWh/kWc/an)",
    particularites: [
      "Patrimoine architectural préservé et valorisé",
      "Proximité immédiate du centre de Lyon",
      "Population aisée sensible à l'écologie",
      "Architecture bourgeoise adaptée au solaire discret",
      "Forte demande en solutions de recharge domiciliaire",
      "Politique municipale d'accompagnement des projets durables"
    ]
  }
];

export const getCityBySlug = (slug: string): CityData | undefined => {
  return cities.find(city => city.slug === slug);
};