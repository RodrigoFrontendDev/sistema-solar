const bodyCatalog = [
  {
    id: "sun", name: "El Sol", shortName: "Sol", kind: "ESTRELLA · G2V", group: "primary",
    index: "01", coordinate: "CENTRO DEL SISTEMA", temperatureLabel: "FOTOSFERA",
    lead: "La única estrella de nuestro sistema. Su gravedad mantiene a los planetas en órbita y su energía hace posible la vida en la Tierra.",
    diameter: "1.392.700 km", distance: "Centro del sistema", day: "≈ 25 días*", year: "4.600 millones de años", temperature: "≈ 5.500 °C",
    composition: "Una esfera de plasma compuesta principalmente por hidrógeno y helio. La fusión convierte hidrógeno en helio en su núcleo.",
    atmosphere: "Tiene varias capas: fotosfera, cromosfera, región de transición y corona. El viento solar llena la heliosfera.",
    moons: "No aplica: es la estrella central.", rings: "No tiene.",
    highlight: "En el núcleo alcanza unos 15 millones de °C. Allí la fusión nuclear libera la energía que, después de viajar hacia el exterior, sale al espacio como luz y calor.",
    missions: "SOHO estudia el interior y la corona; Parker Solar Probe se acercó más al Sol que cualquier otra nave; Solar Orbiter observa sus polos y su actividad. *La rotación varía según la latitud.",
    source: "https://science.nasa.gov/sun/facts/", image: "planetas/sol.webp", orb: ["#fff0a7","#e59a3b","#ffbd62","#e29b45"]
  },
  {
    id: "mercury", name: "Mercurio", shortName: "Mercurio", kind: "PLANETA ROCOSO · 01", group: "primary",
    index: "02", coordinate: "PLANETA INTERIOR", temperatureLabel: "TEMPERATURA MEDIA",
    lead: "El planeta más pequeño y cercano al Sol. Su superficie está cubierta de cráteres y experimenta algunos de los contrastes térmicos más extremos.",
    diameter: "4.879 km", distance: "57,9 millones km", day: "58,6 días*", year: "88 días", temperature: "167 °C",
    composition: "Un gran núcleo metálico rico en hierro ocupa una fracción excepcional de su interior; encima hay un manto y una corteza de roca.",
    atmosphere: "No tiene una atmósfera densa: está rodeado por una exosfera extremadamente tenue con oxígeno, sodio, hidrógeno, helio y potasio.",
    moons: "0 lunas conocidas.", rings: "No tiene.",
    highlight: "Aunque está junto al Sol, no es el planeta más caliente. En las zonas iluminadas puede llegar a 430 °C y en la noche caer cerca de −180 °C. En cráteres polares permanentemente sombreados puede conservarse hielo de agua.",
    missions: "Mariner 10 realizó tres sobrevuelos en los años setenta. MESSENGER orbitó Mercurio entre 2011 y 2015 y reveló detalles de su superficie, composición y campo magnético. *Un día solar dura 176 días terrestres.",
    source: "https://science.nasa.gov/mercury/facts/", image: "planetas/mercurio.webp", orb: ["#b9b5ae","#6d6964","#d3cec4","#8b8884"]
  },
  {
    id: "venus", name: "Venus", shortName: "Venus", kind: "PLANETA ROCOSO · 02", group: "primary",
    index: "03", coordinate: "SEGUNDO DESDE EL SOL", temperatureLabel: "TEMPERATURA MEDIA",
    lead: "Un mundo casi del tamaño de la Tierra, pero con una superficie abrasadora bajo una atmósfera densa y nubes corrosivas.",
    diameter: "12.104 km", distance: "108,2 millones km", day: "243 días · retrógrado", year: "224,7 días", temperature: "464 °C",
    composition: "Planeta terrestre con núcleo metálico y manto rocoso. Su estructura interna guarda similitudes con la de la Tierra.",
    atmosphere: "Predomina el dióxido de carbono. Nubes de ácido sulfúrico y una presión superficial unas 93 veces mayor que la terrestre producen un efecto invernadero extremo.",
    moons: "0 lunas naturales.", rings: "No tiene.",
    highlight: "Es el planeta más caliente del sistema solar, incluso más que Mercurio. Además, gira en sentido retrógrado: el Sol saldría por el oeste y se pondría por el este.",
    missions: "Mariner 10 lo sobrevoló; Magellan cartografió gran parte de su superficie mediante radar en los años noventa. Venus Express y Akatsuki estudiaron su atmósfera y su dinámica.",
    source: "https://science.nasa.gov/venus/venus-facts/", image: "planetas/venus.webp", orb: ["#f2d6a4","#986d42","#e4b77e","#ad7848"]
  },
  {
    id: "earth", name: "Tierra", shortName: "Tierra", kind: "PLANETA ROCOSO · 03", group: "primary",
    index: "04", coordinate: "NUESTRO HOGAR", temperatureLabel: "TEMPERATURA MEDIA",
    lead: "Un planeta activo con océanos de agua líquida, una atmósfera protectora y una enorme variedad de ecosistemas. Hasta hoy, es el único mundo donde conocemos vida.",
    diameter: "12.756 km", distance: "149,6 millones km", day: "23,9 horas", year: "365,2 días", temperature: "15 °C",
    composition: "Hierro y níquel en el núcleo, un manto de silicatos y una corteza fragmentada en placas tectónicas. El agua cubre cerca del 71% de la superficie.",
    atmosphere: "Principalmente nitrógeno y oxígeno. La atmósfera regula la temperatura, filtra radiación y permite el ciclo del agua.",
    moons: "1 luna: la Luna.", rings: "No tiene.",
    highlight: "Es el único planeta conocido con agua líquida estable en la superficie y el único lugar donde se ha confirmado vida. Su campo magnético ayuda a desviar parte del viento solar.",
    missions: "Satélites meteorológicos, de observación terrestre y misiones científicas monitorizan océanos, continentes, hielo, atmósfera y cambios del clima desde el espacio.",
    source: "https://science.nasa.gov/earth/facts/", image: "planetas/tierra.webp", orb: ["#76bfe0","#193d69","#7fc48d","#2a6597"]
  },
  {
    id: "mars", name: "Marte", shortName: "Marte", kind: "PLANETA ROCOSO · 04", group: "primary",
    index: "05", coordinate: "EL PLANETA ROJO", temperatureLabel: "TEMPERATURA MEDIA",
    lead: "Un desierto frío con volcanes gigantes, cañones, casquetes polares y señales geológicas de un pasado mucho más húmedo.",
    diameter: "6.792 km", distance: "228 millones km", day: "24,7 horas", year: "687 días", temperature: "−65 °C",
    composition: "Mundo rocoso con un núcleo metálico, un manto y una corteza rica en minerales. El óxido de hierro del polvo le da su tono rojizo.",
    atmosphere: "Muy tenue y compuesta sobre todo por dióxido de carbono, con nitrógeno y argón. No retiene suficiente calor para mantener agua líquida estable en la superficie.",
    moons: "2 lunas pequeñas: Fobos y Deimos.", rings: "No tiene.",
    highlight: "Olympus Mons es el volcán más alto conocido del sistema solar. Valles, deltas y minerales observados por sondas indican que hubo agua líquida en la superficie hace miles de millones de años.",
    missions: "Rovers como Curiosity y Perseverance exploran el terreno; orbitadores estudian la atmósfera, el agua y la geología. Perseverance también recoge muestras para una futura campaña de retorno.",
    source: "https://science.nasa.gov/mars/facts/", image: "planetas/marte.webp", orb: ["#ef9d72","#8c3f2d","#c66c4b","#4f2925"]
  },
  {
    id: "jupiter", name: "Júpiter", shortName: "Júpiter", kind: "GIGANTE GASEOSO · 05", group: "primary",
    index: "06", coordinate: "EL MÁS GRANDE", temperatureLabel: "TEMPERATURA EN LAS NUBES",
    lead: "Un gigante de hidrógeno y helio, con bandas de nubes, tormentas inmensas, anillos tenues y una numerosa familia de lunas.",
    diameter: "142.984 km", distance: "778,5 millones km", day: "9,9 horas", year: "4.331 días · 11,9 años", temperature: "−110 °C",
    composition: "Principalmente hidrógeno y helio. En profundidad, la presión convierte el hidrógeno en un fluido metálico que contribuye a generar un campo magnético intenso.",
    atmosphere: "Bandas de nubes de amoníaco y agua. Sus cinturones y zonas se mueven en direcciones opuestas y albergan tormentas persistentes.",
    moons: "115 lunas reconocidas oficialmente en la ficha de NASA consultada; el inventario cambia con nuevos descubrimientos.", rings: "Sí: un sistema tenue de anillos de polvo.",
    highlight: "La Gran Mancha Roja es una tormenta gigantesca observada durante siglos. Europa, una de sus lunas, podría esconder un océano de agua líquida bajo una corteza de hielo.",
    missions: "Pioneer y Voyager realizaron sobrevuelos; Galileo orbitó el planeta; Juno sigue estudiando su gravedad, magnetismo y atmósfera. Europa Clipper viaja para investigar la luna Europa.",
    source: "https://science.nasa.gov/jupiter/jupiter-facts/", image: "planetas/jupiter.webp", orb: ["#e8c49c","#a46e4b","#f0d9b8","#8d593b"]
  },
  {
    id: "saturn", name: "Saturno", shortName: "Saturno", kind: "GIGANTE GASEOSO · 06", group: "primary",
    index: "07", coordinate: "EL SEÑOR DE LOS ANILLOS", temperatureLabel: "TEMPERATURA EN LAS NUBES",
    lead: "Un gigante gaseoso de baja densidad rodeado por el sistema de anillos más amplio y complejo que conocemos entre los planetas.",
    diameter: "120.536 km", distance: "1.432 millones km", day: "10,7 horas", year: "10.747 días · 29,4 años", temperature: "−140 °C",
    composition: "Mayormente hidrógeno y helio. Su interior contiene capas de hidrógeno comprimido y probablemente un núcleo de elementos más pesados.",
    atmosphere: "Hidrógeno y helio, con nubes y bandas de tormentas. Los vientos pueden alcanzar velocidades muy elevadas.",
    moons: "274 lunas confirmadas en la tabla métrica de NASA consultada; los recuentos pueden cambiar.", rings: "Sí: anillos brillantes formados principalmente por fragmentos de hielo y roca.",
    highlight: "Sus anillos son enormes en extensión, pero muy delgados en altura. Encelado expulsa chorros de vapor de agua y partículas desde un océano bajo su corteza; Titán tiene lagos de metano y una atmósfera densa.",
    missions: "Pioneer 11 y Voyager lo visitaron. Cassini orbitó Saturno de 2004 a 2017 y la sonda Huygens descendió en Titán en 2005.",
    source: "https://science.nasa.gov/saturn/facts/", image: "planetas/saturno.webp", orb: ["#f1d8a9","#9f8057","#e2c89b","#8e6c4a"]
  },
  {
    id: "uranus", name: "Urano", shortName: "Urano", kind: "GIGANTE HELADO · 07", group: "primary",
    index: "08", coordinate: "EL PLANETA INCLINADO", temperatureLabel: "TEMPERATURA MEDIA",
    lead: "Un gigante helado, frío y brumoso que gira casi acostado respecto al plano de su órbita, con estaciones extremas y anillos oscuros.",
    diameter: "51.118 km", distance: "2.867 millones km", day: "17,2 horas · retrógrado", year: "30.589 días · 84 años", temperature: "−195 °C",
    composition: "Agua, amoníaco y metano en forma de fluidos calientes y densos alrededor de un interior rocoso. No tiene una superficie sólida definida.",
    atmosphere: "Hidrógeno y helio, con metano que absorbe luz roja y le da su tono azul verdoso.",
    moons: "28 lunas conocidas en los datos de NASA consultados.", rings: "Sí: 13 anillos tenues y oscuros.",
    highlight: "Su eje está inclinado unos 98 grados: parece rodar alrededor del Sol. Esa inclinación genera estaciones de décadas de duración.",
    missions: "La única nave que lo visitó de cerca fue Voyager 2, durante un sobrevuelo en enero de 1986. Gran parte de lo que sabemos proviene de ese encuentro y de observaciones telescópicas.",
    source: "https://science.nasa.gov/uranus/facts/", image: "planetas/urano.webp", orb: ["#b5e8e8","#4b9da8","#a1d5d7","#43858f"]
  },
  {
    id: "neptune", name: "Neptuno", shortName: "Neptuno", kind: "GIGANTE HELADO · 08", group: "primary",
    index: "09", coordinate: "EL MÁS DISTANTE", temperatureLabel: "TEMPERATURA MEDIA",
    lead: "Un mundo azul oscuro, muy frío y azotado por vientos supersónicos. Fue el primer planeta cuya existencia se predijo matemáticamente antes de observarse.",
    diameter: "49.528 km", distance: "4.515 millones km", day: "16,1 horas", year: "59.800 días · 164,8 años", temperature: "−200 °C",
    composition: "Un gigante helado con agua, amoníaco y metano en el interior, además de una envoltura de hidrógeno y helio. No posee una superficie sólida accesible.",
    atmosphere: "Hidrógeno y helio con metano. Nubes y sistemas de tormentas se desplazan impulsados por algunos de los vientos más veloces del sistema solar.",
    moons: "16 lunas conocidas en la ficha de NASA consultada. Tritón es la mayor.", rings: "Sí: anillos oscuros, estrechos y tenues.",
    highlight: "Sus vientos pueden superar los 2.000 km/h. Tritón, su luna mayor, orbita en sentido retrógrado y probablemente sea un objeto capturado del cinturón de Kuiper.",
    missions: "Voyager 2 realizó el único sobrevuelo cercano en agosto de 1989. Desde entonces, Hubble y telescopios terrestres siguen observando su atmósfera cambiante.",
    source: "https://science.nasa.gov/neptune/neptune-facts/", image: "planetas/neptuno.webp", orb: ["#78a5ee","#243b91","#526bc7","#1d2c75"]
  },
  {
    id: "moon", name: "La Luna", shortName: "Luna", kind: "SATÉLITE NATURAL · TIERRA", group: "other",
    index: "10", coordinate: "ÓRBITA TERRESTRE", temperatureLabel: "TEMPERATURA SUPERFICIAL",
    lead: "Nuestro único satélite natural. Su presencia estabiliza la inclinación terrestre y produce las mareas junto con la gravedad del Sol.",
    diameter: "3.475 km", distance: "384.400 km de la Tierra", day: "27,3 días de rotación", year: "27,3 días alrededor de la Tierra", temperature: "−173 a 127 °C",
    composition: "Un cuerpo rocoso diferenciado, con corteza, manto y un pequeño núcleo metálico. Su superficie está cubierta por regolito y cráteres de impacto.",
    atmosphere: "No tiene una atmósfera densa; posee una exosfera extremadamente tenue. Hay hielo de agua en regiones permanentemente sombreadas cerca de los polos.",
    moons: "No tiene satélites naturales conocidos.", rings: "No tiene.",
    highlight: "La explicación más aceptada de su origen es un gran impacto entre la Tierra primitiva y un cuerpo del tamaño de Marte hace unos 4.500 millones de años.",
    missions: "Las misiones Apollo llevaron astronautas a la superficie entre 1969 y 1972. Orbitadores como Lunar Reconnaissance Orbiter cartografían el terreno y estudian el hielo polar.",
    source: "https://science.nasa.gov/moon/facts/", image: "", orb: ["#e5e2da","#777777","#d4d0c4","#8d8a84"]
  },
  {
    id: "ceres", name: "Ceres", shortName: "Ceres", kind: "PLANETA ENANO · CINTURÓN PRINCIPAL", group: "other",
    index: "11", coordinate: "ENTRE MARTE Y JÚPITER", temperatureLabel: "TEMPERATURA",
    lead: "El objeto más grande del cinturón de asteroides y el único planeta enano situado en el sistema solar interior.",
    diameter: "≈ 952 km", distance: "413 millones km", day: "9 horas", year: "1.682 días · 4,6 años", temperature: "Muy fría",
    composition: "Mezcla de roca y hielo de agua. Su corteza contiene depósitos de sales; podría tener una proporción importante de agua en su interior.",
    atmosphere: "Tiene una exosfera extremadamente tenue; se han observado indicios de vapor de agua, posiblemente generado por hielo que pasa a gas.",
    moons: "No tiene lunas conocidas.", rings: "No tiene.",
    highlight: "Las manchas brillantes del cráter Occator son depósitos de sales. Ceres fue el primer planeta enano visitado por una nave espacial.",
    missions: "La misión Dawn de NASA orbitó Ceres desde 2015 y estudió su superficie, gravedad y composición hasta el final de la misión en 2018.",
    source: "https://science.nasa.gov/dwarf-planets/ceres/facts/", image: "", orb: ["#c6c4c3","#716c6d","#aaa6a7","#5d5b61"]
  },
  {
    id: "pluto", name: "Plutón", shortName: "Plutón", kind: "PLANETA ENANO · CINTURÓN DE KUIPER", group: "other",
    index: "12", coordinate: "MUNDO TRANSNEPTUNIANO", temperatureLabel: "TEMPERATURA MEDIA",
    lead: "Un mundo helado con montañas, llanuras de nitrógeno congelado y una atmósfera tenue que cambia con su distancia al Sol.",
    diameter: "2.376 km", distance: "5.906 millones km", day: "6,4 días · retrógrado", year: "90.560 días · 248 años", temperature: "≈ −225 °C",
    composition: "Probablemente un núcleo rocoso bajo un manto de hielo de agua. En la superficie hay hielos de nitrógeno, metano y monóxido de carbono.",
    atmosphere: "Una atmósfera muy tenue, dominada por nitrógeno con metano y monóxido de carbono. Puede congelarse y caer sobre la superficie cuando Plutón se aleja del Sol.",
    moons: "5 lunas: Caronte, Nix, Hidra, Cerbero y Estigia.", rings: "No se conocen anillos.",
    highlight: "Caronte tiene casi la mitad del diámetro de Plutón; ambos orbitan un centro de masa situado entre ellos. La región clara con forma de corazón se llama Tombaugh Regio.",
    missions: "New Horizons sobrevoló Plutón en julio de 2015 y obtuvo las primeras imágenes cercanas de su geología, atmósfera y sistema de lunas.",
    source: "https://science.nasa.gov/dwarf-planets/pluto/facts/", image: "", orb: ["#d5bba5","#815c4f","#b68b78","#68483e"]
  },
  {
    id: "haumea", name: "Haumea", shortName: "Haumea", kind: "PLANETA ENANO · CINTURÓN DE KUIPER", group: "other",
    index: "13", coordinate: "MUNDO DE ROTACIÓN RÁPIDA", temperatureLabel: "TEMPERATURA",
    lead: "Un planeta enano alargado y helado. Su giro rapidísimo deforma su cuerpo hasta darle una silueta parecida a la de un balón de rugby.",
    diameter: "≈ 1.740 km*", distance: "6.500 millones km", day: "≈ 4 horas", year: "285 años", temperature: "Extremadamente fría",
    composition: "Se cree que está formado principalmente por roca con una capa superficial de hielo. Se sabe poco de su estructura y su superficie.",
    atmosphere: "No se ha detectado una atmósfera significativa.", moons: "2 lunas: Hiʻiaka y Namaka.", rings: "Sí. Fue el primer objeto del cinturón de Kuiper conocido con anillos.",
    highlight: "Su rotación es una de las más rápidas entre los grandes objetos del sistema solar. El giro contribuye a su forma alargada. *Diámetro ecuatorial aproximado.",
    missions: "Ninguna nave lo ha visitado de cerca. Se estudia mediante telescopios y ocultaciones estelares, que permiten inferir forma, tamaño y anillos.",
    source: "https://science.nasa.gov/dwarf-planets/haumea/", image: "", orb: ["#d5d3cd","#74716c","#c7c1b6","#79736c"]
  },
  {
    id: "makemake", name: "Makemake", shortName: "Makemake", kind: "PLANETA ENANO · CINTURÓN DE KUIPER", group: "other",
    index: "14", coordinate: "OBJETO TRANSNEPTUNIANO", temperatureLabel: "TEMPERATURA",
    lead: "Un mundo helado y rojizo, algo menor que Plutón y uno de los objetos más brillantes del cinturón de Kuiper.",
    diameter: "≈ 1.430 km", distance: "6.800 millones km", day: "≈ 22,5 horas", year: "305 años", temperature: "Extremadamente fría",
    composition: "Superficie con metano y etano congelados. Se conoce poco sobre sus capas internas.",
    atmosphere: "Podría desarrollar una atmósfera muy tenue de nitrógeno cuando se encuentra más cerca del Sol; no se ha confirmado una atmósfera permanente.",
    moons: "1 luna provisional: MK 2.", rings: "No se conocen anillos.",
    highlight: "Su descubrimiento en 2005, junto con el de Eris, ayudó a impulsar la redefinición de qué significa ser un planeta. Su nombre proviene de la mitología rapanui.",
    missions: "No ha recibido visitas de naves espaciales. Se observa desde la Tierra y con telescopios espaciales; Hubble permitió detectar su pequeña luna.",
    source: "https://science.nasa.gov/dwarf-planets/makemake/", image: "", orb: ["#c8a38e","#795344","#b9856d","#654333"]
  },
  {
    id: "eris", name: "Eris", shortName: "Eris", kind: "PLANETA ENANO · DISCO DISPERSO", group: "other",
    index: "15", coordinate: "MÁS ALLÁ DEL CINTURÓN DE KUIPER", temperatureLabel: "TEMPERATURA",
    lead: "Un mundo helado y muy distante. Su descubrimiento mostró que había objetos casi del tamaño de Plutón más allá de Neptuno.",
    diameter: "≈ 2.400 km", distance: "≈ 10.000 millones km", day: "25,9 horas", year: "557 años", temperature: "Extremadamente fría",
    composition: "Se cree que es un cuerpo rocoso cubierto por hielos. Su superficie refleja mucha luz solar.",
    atmosphere: "No se conoce una atmósfera permanente; a esa distancia, los hielos volátiles se mantienen congelados.",
    moons: "1 luna conocida: Disnomia.", rings: "No se conocen anillos.",
    highlight: "Eris es ligeramente más pequeño que Plutón, pero tiene más masa. Su descubrimiento fue clave en el debate que llevó a crear la categoría de planeta enano.",
    missions: "Ninguna nave lo ha visitado. Se estudia con telescopios y gracias a la órbita de su luna Disnomia, que ayuda a estimar su masa.",
    source: "https://science.nasa.gov/dwarf-planets/eris/", image: "", orb: ["#dedbd4","#777b80","#b9bdc0","#676a71"]
  }
];

const planetList = document.getElementById("planet-list");
const otherList = document.getElementById("other-list");
const searchInput = document.getElementById("world-search");
const emptySearch = document.getElementById("empty-search");
const mapButtons = [...document.querySelectorAll(".map-world[data-body]")];

const detail = {
  number: document.getElementById("detail-number"),
  index: document.getElementById("detail-index"),
  kind: document.getElementById("detail-kind"),
  name: document.getElementById("detail-name"),
  lead: document.getElementById("detail-lead"),
  image: document.getElementById("detail-image"),
  orb: document.getElementById("detail-orb"),
  coordinate: document.getElementById("detail-coordinate"),
  temperatureLabel: document.getElementById("temperature-label"),
  temperature: document.getElementById("detail-temperature"),
  stats: document.getElementById("detail-stats"),
  composition: document.getElementById("detail-composition"),
  atmosphere: document.getElementById("detail-atmosphere"),
  moons: document.getElementById("detail-moons"),
  rings: document.getElementById("detail-rings"),
  highlight: document.getElementById("detail-highlight"),
  missions: document.getElementById("detail-missions"),
  source: document.getElementById("detail-source"),
};

const orbStyles = {
  sun: ["#fff0a7", "#e59a3b", "#ffbd62", "rgba(238,166,80,.4)"],
  mercury: ["#b9b5ae", "#6d6964", "#d3cec4", "rgba(184,176,164,.18)"],
  venus: ["#f2d6a4", "#986d42", "#e4b77e", "rgba(217,166,105,.2)"],
  earth: ["#76bfe0", "#193d69", "#7fc48d", "rgba(83,164,190,.2)"],
  mars: ["#ef9d72", "#8c3f2d", "#c66c4b", "rgba(205,102,67,.22)"],
  jupiter: ["#e8c49c", "#a46e4b", "#f0d9b8", "rgba(212,165,123,.18)"],
  saturn: ["#f1d8a9", "#9f8057", "#e2c89b", "rgba(213,179,125,.2)"],
  uranus: ["#b5e8e8", "#4b9da8", "#a1d5d7", "rgba(89,185,193,.18)"],
  neptune: ["#78a5ee", "#243b91", "#526bc7", "rgba(80,115,226,.22)"],
  moon: ["#e5e2da", "#777777", "#d4d0c4", "rgba(196,192,181,.18)"],
  ceres: ["#c6c4c3", "#716c6d", "#aaa6a7", "rgba(164,157,158,.18)"],
  pluto: ["#d5bba5", "#815c4f", "#b68b78", "rgba(187,135,112,.18)"],
  haumea: ["#d5d3cd", "#74716c", "#c7c1b6", "rgba(191,187,176,.16)"],
  makemake: ["#c8a38e", "#795344", "#b9856d", "rgba(192,133,105,.19)"],
  eris: ["#dedbd4", "#777b80", "#b9bdc0", "rgba(179,183,192,.18)"],
};

function makeChoice(body) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "world-choice";
  button.dataset.body = body.id;
  button.dataset.catalogItem = "";
  button.setAttribute("aria-pressed", "false");

  const visual = document.createElement("span");
  visual.className = "choice-visual";

  if (body.image) {
    const img = document.createElement("img");
    img.src = body.image;
    img.alt = "";
    img.loading = "lazy";
    img.draggable = false;
    visual.append(img);
  } else {
    const orb = document.createElement("span");
    orb.className = "choice-orb";
    const colors = orbStyles[body.id] || orbStyles.pluto;
    orb.style.setProperty("--orb-base", colors[0]);
    orb.style.setProperty("--orb-dark", colors[1]);
    orb.style.setProperty("--orb-light", colors[2]);
    orb.style.setProperty("--orb-glow", colors[3]);
    visual.append(orb);
  }

  const label = document.createElement("span");
  label.textContent = body.shortName;
  button.append(visual, label);
  button.addEventListener("click", () => selectBody(body.id));
  return button;
}

bodyCatalog.filter(body => body.group === "primary").forEach(body => {
  planetList.append(makeChoice(body));
});

bodyCatalog.filter(body => body.group === "other").forEach(body => {
  otherList.append(makeChoice(body));
});

function addStat(label, value) {
  const wrapper = document.createElement("div");
  wrapper.className = "stat";
  const title = document.createElement("span");
  title.textContent = label;
  const content = document.createElement("strong");
  content.textContent = value;
  wrapper.append(title, content);
  return wrapper;
}

function selectBody(id) {
  const body = bodyCatalog.find(item => item.id === id);
  if (!body) return;

  detail.number.textContent = body.index;
  detail.index.textContent = `${body.index} / 15`;
  detail.kind.textContent = body.kind;
  detail.name.textContent = body.name;
  detail.lead.textContent = body.lead;
  detail.coordinate.textContent = body.coordinate;
  detail.temperatureLabel.textContent = body.temperatureLabel;
  detail.temperature.textContent = body.temperature;
  detail.composition.textContent = body.composition;
  detail.atmosphere.textContent = body.atmosphere;
  detail.moons.textContent = body.moons;
  detail.rings.textContent = body.rings;
  detail.highlight.textContent = body.highlight;
  detail.missions.textContent = body.missions;
  detail.source.href = body.source;

  if (body.image) {
    detail.image.src = body.image;
    detail.image.alt = `Imagen de ${body.name}`;
    detail.image.hidden = false;
    detail.orb.hidden = true;
  } else {
    detail.image.hidden = true;
    detail.orb.hidden = false;
    const colors = orbStyles[body.id] || orbStyles.pluto;
    detail.orb.style.setProperty("--orb-base", colors[0]);
    detail.orb.style.setProperty("--orb-dark", colors[1]);
    detail.orb.style.setProperty("--orb-light", colors[2]);
    detail.orb.style.setProperty("--orb-glow", colors[3]);
  }

  detail.stats.replaceChildren(
    addStat("DIÁMETRO", body.diameter),
    addStat("DISTANCIA MEDIA", body.distance),
    addStat("DÍA / ROTACIÓN", body.day),
    addStat("AÑO / ÓRBITA", body.year),
  );

  document.querySelectorAll("[data-body]").forEach(button => {
    const active = button.dataset.body === id;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function filterCatalog() {
  const query = searchInput.value.trim().toLocaleLowerCase("es");
  let visible = 0;

  document.querySelectorAll(".world-choice").forEach(button => {
    const body = bodyCatalog.find(item => item.id === button.dataset.body);
    const matches = !query || [body.name, body.shortName, body.kind, body.lead]
      .some(value => value.toLocaleLowerCase("es").includes(query));
    button.hidden = !matches;
    if (matches) visible++;
  });

  mapButtons.forEach(button => {
    const body = bodyCatalog.find(item => item.id === button.dataset.body);
    const matches = !query || [body.name, body.shortName, body.kind]
      .some(value => value.toLocaleLowerCase("es").includes(query));
    button.hidden = !matches;
  });

  emptySearch.hidden = visible > 0;
}

mapButtons.forEach(button => {
  button.addEventListener("click", () => selectBody(button.dataset.body));
});

searchInput.addEventListener("input", filterCatalog);
searchInput.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    searchInput.value = "";
    filterCatalog();
    searchInput.blur();
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "/" && document.activeElement !== searchInput && !event.ctrlKey && !event.metaKey && !event.altKey) {
    event.preventDefault();
    searchInput.focus();
  }
});

selectBody("sun");
