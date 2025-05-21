const events = [
  {
    src: "/img/more-events/amof_event_bg.webp",
    logo: "/img/more-events/logoamof2025.webp",
    width: 250,
    alt: "AMOF",
    link: "https://amofexpo.igeco.mx/",
    title: "AMERICAS' MOBILITY OF THE FUTURE",
    subtitle: "La feria de la movilidad del futuro",
    subtitle_en: "The future mobility fair",
    description:
      "Conoce los avances más recientes en la industria de la electromovilidad, las ciudades inteligentes y los desarrollos tecnológicos de movilidad en su piso de exposición.",
    description_en:
      "Discover the latest advances in the electromobility industry, smart cities and mobility technology developments on its exhibition floor.",
    date: "Noviembre, 2025",
    date_en: "November, 2025",
    location: "CDMX",
  },
  {
    src: "/img/more-events/hannover_event_bg.webp",
    logo: "/img/more-events/logohannover.webp",
    width: 100,
    alt: "HANNOVER",
    link: "https://amofexpo.igeco.mx/",
    title: "HANNOVER MESSE",
    subtitle: "La IA en la industria",
    subtitle_en: "AI in industry",
    description:
      "En HANNOVER MESSE 2025, podrás experimentar tecnologías de vanguardia en vivo: desde robots autónomos hasta IA generativa. Descubre cómo la IA está transformando la industria y estableciendo nuevos estándares.",
    description_en:
      "At HANNOVER MESSE 2025, you can experience cutting-edge technologies live: from autonomous robots to generative AI. Discover how AI is transforming industry and setting new standards.",
    date: "Abril, 2026",
    date_en: "April, 2026",
    location: "Germany",
  },
  {
    src: "/img/more-events/ecomondo_event_bg.webp",
    logo: "/img/more-events/logoecomondo.webp",
    width: 250,
    alt: "ECOMONDO",
    link: "https://amofexpo.igeco.mx/",
    title: "ECOMONDO RIMINI",
    subtitle: "Feria de la Tecnología Ecológica",
    subtitle_en: "Ecological Technology Fair",
    description:
      "Es el punto de encuentro donde grupos industriales, partes interesadas, responsables políticos, líderes de opinión, autoridades locales, organismos de investigación e instituciones se reúnen para establecer los elementos clave que definen las estrategias para el desarrollo de la política ambiental de la UE.",
    description_en:
      "It is the meeting point where industrial groups, stakeholders, policy makers, opinion leaders, local authorities, research bodies and institutions come together to establish the key elements that define the strategies for the development of EU environmental policy.",
    date: "Noviembre, 2025",
    date_en: "November, 2025",
    location: "Italy",
  },
  {
    src: "/img/more-events/domotex_event_bg.webp",
    logo: "/img/more-events/logodomotex.webp",
    width: 250,
    alt: "Domotex",
    link: "https://www.domotex.de/en/",
    title: "DOMOTEX",
    subtitle: "Hogar de pisos y acabados de interiores",
    subtitle_en: "Home of floors and interior finishes",
    description:
      "A partir de 2026, ampliará su gama de productos para incluir los temas de exposición de pintura, papel pintado, elementos acústicos, azulejos y revestimientos exteriores, presentándose así como una feria internacional para el diseño de interiores.",
    description_en:
      "Starting in 2026, it will expand its product range to include the exhibition topics of paint, wallpaper, acoustic elements, tiles and exterior cladding, thus presenting itself as an international fair for interior design.",
    date: "Enero, 2026",
    date_en: "January, 2026",
    location: "Germany",
  },
  {
    src: "/img/more-events/etc_event_bg.webp",
    logo: "/img/more-events/etc_logo.webp",
    width: 250,
    alt: "ETC",
    link: "https://electricity-transformation.ca/",
    title: "Electricity Transformation Canada",
    subtitle: "El poder de la transición",
    subtitle_en: "Powering the Transition",
    description:
      "Electricity Transformation Canada reunirá a profesionales de la energía de sectores convergentes (energía eólica, energía solar y almacenamiento de energía) para establecer redes, colaborar y hacer crecer sus negocios.",
    description_en:
      "Electricity Transformation Canada will bring together energy professionals from converging sectors — wind energy, solar energy, and energy storage — to network, collaborate and grow their businesses.",
    date: "Octubre 2025",
    date_en: "October 2025",
    location: "Canada",
  },
  {
    src: "/img/more-events/riminiwellness_event_bg.webp",
    logo: "/img/more-events/logoRiminiWellness.webp",
    width: 350,
    alt: "RIMINIWELLNESS",
    link: "https://en.riminiwellness.com/",
    title: "REMINIWELLNESS",
    subtitle: "Feria de la experiencia del bienestar",
    subtitle_en: "Wellness Experience Fair",
    description:
      "RiminiWellness es la reunión más grande del mundo dedicada a la actividad física, el bienestar, el deporte, la cultura física y la alimentación saludable.",
    description_en:
      "RiminiWellness is the world’s largest gathering dedicated to physical activity, wellness, sport, physical culture and healthy eating.",
    date: "Mayo / Junio, 2025",
    date_en: "May / June, 2025",
    location: "Italy",
  },
  {
    src: "/img/more-events/agritechnia_event_bg.webp",
    logo: "/img/more-events/logoagritechnica.webp",
    width: 350,
    alt: "AGRITECHNICA",
    link: "https://www.agritechnica.com/en/",
    title: "AGRITECHNICA ",
    subtitle: "Feria líder mundial de maquinaria agrícola",
    subtitle_en: "World’s leading trade fair for agricultural machinery",
    description:
      "Ofrece a los visitantes acceso directo a sistemas agrícolas innovadores e interconectados que utilizan tecnologías digitales para aumentar la eficiencia, la sostenibilidad y la productividad.",
    description_en:
      "It offers visitors direct access to innovative, interconnected agricultural systems that use digital technologies to increase efficiency, sustainability and productivity.",
    date: "Noviembre, 2025",
    date_en: "November, 2025",
    location: "Germany",
  },
  {
    src: "/img/more-events/key_event_bg.webp",
    logo: "/img/more-events/logokey.webp",
    width: 350,
    alt: "AGRITECHNICA",
    link: "https://en.key-expo.com",
    title: "The Energy Transition Expo ",
    subtitle: "El futuro de la energía se reúne en KEY",
    subtitle_en: "The future of energy meets at KEY",
    description:
      "La transición energética está cobrando velocidad y los grandes números, récord en KEY - The Energy Transition Expo, el evento de referencia de IEG-Italian Exhibition Group en Europa, África y la cuenca mediterránea, que cerró hoy en Rimini Expo Centre, son la prueba.",
    description_en:
      "The energy transition is gathering speed and the big, record-breaking numbers at KEY - The Energy Transition Expo, the IEG-Italian Exhibition Group event of reference in Europe, Africa and the Mediterranean basin, which closed today at Rimini Expo Centre, are the proof.",
    date: "Marzo, 2026",
    date_en: "March, 2026",
    location: "Italy",
  },
  {
    src: "/img/more-events/drone_event_bg.webp",
    logo: "/img/more-events/droneslogo.webp",
    width: 350,
    alt: "INNOVATORS FORUM MX",
    link: "https://drone.igeco.mx/",
    title: "DRONE INNOVATORS FORUM MX ",
    subtitle: "Liberando el potencial aéreo: El mundo de los drones",
    subtitle_en: "Unleashing Aerial Potential: The World of Drones",
    description:
      "Participa en el punto de encuentro central para la industria de los drones, incluyendo proveedores de soluciones y tomadores de decisiones.",
    description_en:
      "Join the central meeting point for the drone industry, including solution providers and decision makers.",
    date: "Noviembre, 2025",
    date_en: "November, 2025",
    location: "CDMX",
  },
  {
    src: "/img/more-events/",
    logo: "/img/more-events/ligna_logo.png",
    width: 350,
    alt: "LIGNA",
    link: "https://www.ligna.de/en/",
    title: "LIGNA",
    subtitle: "La feria líder mundial para la industria de la madera",
    subtitle_en: "The world's leading trade fair for the woodworking industry",
    description:
      "Presenta soluciones completas para los sectores primario y secundario, incluyendo herramientas, maquinaria y sistemas para la producción a medida y en masa, tecnologías de superficie y producción de paneles.",
    description_en:
      "It showcases comprehensive solutions for both primary and secondary sectors, including tools, machinery, and systems for both custom and mass production, surface technologies, and panel production.",
    date: "Mayo, 2025",
    date_en: "May, 2025",
    location: "Germany",
  },
  {
    src: "/img/more-events/",
    logo: "/img/more-events/vofavicon.png",
    width: 350,
    alt: "VICENZAORO",
    link: "https://www.vicenzaoro.com/en",
    title: "VICENZAORO",
    subtitle:
      "La mayor feria europea para la industria del oro y de la joyería",
    subtitle_en:
      "Europe's largest trade fair for the gold and jewelry industry",
    description:
      "Un verdadero centro de negocios, que reúne a los actores más influyentes del sector mundial de la joyería.",
    description_en:
      "A true business hub, bringing together the most influential players from across the global jewelry sector.",
    date: "Septiembre, 2025",
    date_en: "September, 2025",
    location: "Italy",
  },
];

export { events };
