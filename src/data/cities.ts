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
  }
];

export const getCityBySlug = (slug: string): CityData | undefined => {
  return cities.find(city => city.slug === slug);
};