import type { Locale } from './config';

// ─────────────────────────────────────────────────────────────
// 子页面集群（Cluster Content）
//
// 目的：不再把所有内容挤在首页。三个子页面各自承接一组搜索意图，
// 通过精确匹配锚文本互相传递权重，并回指首页主专题。
//
//  - atuel-canyon-tours-from-san-rafael → 带导游 / 报团意图
//  - rp173-road-trip-guide              → 自驾意图
//  - lago-atuel-activities              → 具体水上活动意图
//
// slug 在所有语言中保持一致（这些正是用户实际输入的检索词），
// 语言版本由 hreflang 互相映射，避免多语言站点出现 slug 分叉。
// ─────────────────────────────────────────────────────────────

export interface ClusterSection {
  h2: string;
  body?: string;
  bullets?: string[];
}

export interface ClusterFaq {
  q: string;
  a: string;
}

export interface ClusterPage {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lede: string;
  sections: ClusterSection[];
  faq: ClusterFaq[];
}

export const CLUSTER_SLUGS = [
  'atuel-canyon-tours-from-san-rafael',
  'rp173-road-trip-guide',
  'lago-atuel-activities',
] as const;

export type ClusterSlug = (typeof CLUSTER_SLUGS)[number];

/** 子页面通用 UI 文案 */
export interface ClusterUi {
  home: string;
  backToGuide: string;
  faqTitle: string;
  relatedTitle: string;
  relatedIntro: string;
  mainGuide: string;
  mainGuideDesc: string;
}

export const CLUSTER_UI: Record<Locale, ClusterUi> = {
  zh: {
    home: '阿图埃尔峡谷旅行指南',
    backToGuide: '返回主指南',
    faqTitle: '常见问题',
    relatedTitle: '相关指南',
    relatedIntro: '这些页面覆盖同一景点的其他出行意图，可一并参考。',
    mainGuide: '阿图埃尔峡谷完整旅行指南',
    mainGuideDesc: '景点概览、五座水库、参观信息、交通、地图、天气与常见问题。',
  },
  en: {
    home: 'Atuel Canyon Travel Guide',
    backToGuide: 'Back to the main guide',
    faqTitle: 'Frequently asked questions',
    relatedTitle: 'Related guides',
    relatedIntro: 'These pages cover the other planning needs for the same destination.',
    mainGuide: 'Complete Atuel Canyon travel guide',
    mainGuideDesc: 'Overview, the five reservoirs, visiting information, transport, map, weather and FAQs.',
  },
  es: {
    home: 'Guía del Cañón del Atuel',
    backToGuide: 'Volver a la guía principal',
    faqTitle: 'Preguntas frecuentes',
    relatedTitle: 'Guías relacionadas',
    relatedIntro: 'Estas páginas cubren las otras necesidades de planificación del mismo destino.',
    mainGuide: 'Guía completa del Cañón del Atuel',
    mainGuideDesc: 'Resumen, los cinco embalses, información de visita, transporte, mapa, clima y preguntas frecuentes.',
  },
  it: {
    home: 'Guida del Cañón del Atuel',
    backToGuide: 'Torna alla guida principale',
    faqTitle: 'Domande frequenti',
    relatedTitle: 'Guide correlate',
    relatedIntro: 'Queste pagine coprono le altre esigenze di pianificazione della stessa destinazione.',
    mainGuide: 'Guida completa al Cañón del Atuel',
    mainGuideDesc: 'Panoramica, i cinque invasi, informazioni di visita, trasporti, mappa, meteo e domande frequenti.',
  },
};

export const CLUSTER: Record<Locale, Record<ClusterSlug, ClusterPage>> = {
  en: {
    'atuel-canyon-tours-from-san-rafael': {
      slug: 'atuel-canyon-tours-from-san-rafael',
      metaTitle: 'Atuel Canyon Tours from San Rafael: Options & What to Expect',
      metaDescription:
        'Compare Atuel Canyon tours from San Rafael: group day tours, private transfers and self-drive. What is included, how long it takes and how to book.',
      h1: 'Atuel Canyon Tours from San Rafael',
      lede: 'There is no public transport to the Atuel Canyon viewpoints, so every visit is either a guided tour, a private transfer or a self-drive. Here is an honest comparison of the three so you can pick the right one.',
      sections: [
        {
          h2: 'Why almost everyone starts in San Rafael',
          body: 'The canyon begins about 40 km south of San Rafael along provincial road RP173, and San Rafael is where the agencies, rental cars, fuel and the tourist information office are. Whichever option you choose, you will start and finish your day here.',
          bullets: [
            'Distance from San Rafael to the first viewpoint (Valle Grande): roughly 40 km.',
            'From Mendoza city, add about 240 km of highway before you even reach San Rafael.',
            'There is no scheduled bus service that drops you at the canyon viewpoints.',
          ],
        },
        {
          h2: 'Option 1 — Group day tour or half-day tour',
          body: 'The default choice for visitors without a car. A local agency provides the vehicle, a driver-guide and stops at the main viewpoints. Some itineraries can add rafting on the Atuel or a boat ride on one of the reservoirs.',
          bullets: [
            'Typically covers Valle Grande, the canyon viewpoints and El Laberinto, sometimes El Nihuil.',
            'Half-day tours focus on the viewpoints; full-day tours add a water activity or a longer route.',
            'Book ahead in peak season and on public holidays — seats do sell out.',
          ],
        },
        {
          h2: 'Option 2 — Private transfer with driver',
          body: 'Best if you are travelling as a family, a small group, or with camera gear. You choose the stops and how long you spend at each, which matters a lot if you want sunrise or sunset light on the rock walls.',
          bullets: [
            'Priced per vehicle rather than per person — better value for groups of three or more.',
            'Lets you reach the Volcán Overo turn-off or stay late at a viewpoint.',
            'Ask in advance whether the driver waits at each stop or drops and returns.',
          ],
        },
        {
          h2: 'Option 3 — Self-drive or rental car',
          body: 'The most freedom and usually the cheapest for two or more people. You control the pace entirely, which is why photographers and anyone wanting a sunrise start prefer it.',
          bullets: [
            'Fill the tank in San Rafael — there is essentially no fuel along the canyon.',
            'Download offline maps: mobile signal is unreliable inside the canyon.',
            'RP173 has tight curves and cliff-edge sections; avoid driving it at night.',
          ],
        },
        {
          h2: 'What to check before you book',
          bullets: [
            'Whether the price includes entry fees, lunch and water activities, or only transport.',
            'The exact meeting point and departure time — some tours leave very early.',
            'The cancellation policy for weather, since strong wind can close boat and water activities.',
            'Whether the vehicle is suitable for the dirt detours if you want the Volcán Overo route.',
          ],
        },
      ],
      faq: [
        {
          q: 'How long does an Atuel Canyon tour from San Rafael take?',
          a: 'A half-day tour usually runs about four to five hours and covers the main viewpoints. A full-day tour with a water activity or a longer route through to El Nihuil typically takes seven to nine hours including transfers.',
        },
        {
          q: 'Can I visit Atuel Canyon without a tour?',
          a: 'Yes. Self-driving along RP173 is entirely normal and gives you the most freedom. There is no public bus to the viewpoints, so without a car you will need either a guided tour or a private transfer.',
        },
        {
          q: 'Do I need to book in advance?',
          a: 'In peak season and on public holidays, yes — confirm at least a day ahead. Outside those periods you can often arrange a tour on short notice, but rafting and boat activities depend on water levels and daily demand.',
        },
        {
          q: 'Are tours suitable for children and older visitors?',
          a: 'The standard viewpoint tours involve little walking and suit most ages. Rafting has age and fitness requirements set by each operator, and the rock labyrinth walk involves loose ground with almost no shade.',
        },
      ],
    },

    'rp173-road-trip-guide': {
      slug: 'rp173-road-trip-guide',
      metaTitle: 'RP173 Road Trip Guide: Driving Atuel Canyon from San Rafael',
      metaDescription:
        'How to drive the RP173 through Atuel Canyon: the stop-by-stop route from San Rafael, distances, road conditions, fuel, signal and driving tips.',
      h1: 'RP173 Road Trip Guide: Driving Through Atuel Canyon',
      lede: 'RP173 is the provincial scenic road that hugs the canyon wall south of San Rafael. It is the only spine connecting every attraction in the canyon, and this is how to drive it properly.',
      sections: [
        {
          h2: 'The route at a glance',
          body: 'The drive runs one way from San Rafael to El Nihuil, roughly 70 km, and is normally done as a half-day to full-day round trip. The stops below are in driving order, which is the most efficient way to see everything.',
          bullets: [
            'San Rafael (0 km) — fuel, supplies, rental cars, tourist information.',
            'Canyon entrance / start of RP173 (~25 km) — the road turns into curves and gradients.',
            'Valle Grande Reservoir (~40 km) — first reservoir and the classic viewpoint.',
            'El Laberinto rock labyrinth (~45 km) — park and walk among the red pillars.',
            'Lago Atuel shoreline (~55 km) — the busiest stretch for water activities.',
            'El Nihuil village (~70 km) — downstream reservoir, food, camping, supplies.',
            'Volcán Overo turn-off (~80 km) — dirt road to the volcanic cone.',
          ],
        },
        {
          h2: 'Road conditions and what to expect',
          body: 'RP173 is a paved provincial road for the main canyon stretch, but it is a mountain road: constant curves, gradients and some cliff-edge sections with no barrier on the outer side.',
          bullets: [
            'Speed is limited by geometry more than by the surface — expect a slow, twisting drive.',
            'Cliff-edge sections get noticeable crosswinds in strong wind; keep both hands on the wheel.',
            'Rockfall is possible after rain, particularly where the road runs directly under the rock walls.',
            'Dirt detours such as the Volcán Overo approach need a high-clearance vehicle.',
          ],
        },
        {
          h2: 'Practical checks before you set off',
          bullets: [
            'Fuel: stations are concentrated in San Rafael city and essentially absent along the canyon — fill up before you enter.',
            'Signal: mobile coverage is unreliable inside the canyon. Download offline maps and tell someone your plan and expected return.',
            'Water and food: bring your own. Services are limited until El Nihuil village.',
            'Sun and wind: there is very little shade, and the canyon is exposed to strong wind most of the year.',
            'Parking: viewpoint bays are small and fill up on peak-season mornings. Never stop on a curve or an emergency lane.',
          ],
        },
        {
          h2: 'Timing your drive around the light',
          body: 'The canyon is a photography destination and the light matters. Side-light in the early morning and late afternoon is what brings out the rock strata, while midday flattens everything and is also the hottest, most exposed part of the day.',
          bullets: [
            'Early morning: best light on Valle Grande and the east-facing walls, fewest other cars.',
            'Late afternoon: warm light on the red rock; good for the return leg.',
            'Midday: avoid if you can — harsh light, no shade and peak heat in summer.',
          ],
        },
        {
          h2: 'Combining RP173 with a side trip',
          body: 'Los Reyunos Reservoir is reached from a different direction than the canyon road, so treat it as a separate half day rather than trying to fold it into an RP173 day. The Volcán Overo detour, by contrast, sits at the El Nihuil end and can be added on the way back.',
        },
      ],
      faq: [
        {
          q: 'How long is the RP173 through Atuel Canyon?',
          a: 'The canyon stretch from San Rafael to El Nihuil is roughly 70 km. Because it is a twisting mountain road with viewpoint stops, allow a half day for the drive itself and a full day if you add a water activity or the Volcán Overo detour.',
        },
        {
          q: 'Is the RP173 paved?',
          a: 'The main canyon stretch of RP173 is paved. The side roads to places such as the Volcán Overo are mostly dirt and their condition changes with the season, so confirm access locally before setting out.',
        },
        {
          q: 'Can I drive RP173 at night?',
          a: 'It is not recommended. The road has continuous curves and cliff-edge sections with limited lighting and unreliable mobile signal, so plan to be back in San Rafael before dark.',
        },
        {
          q: 'Do I need a 4x4 for Atuel Canyon?',
          a: 'No — an ordinary car handles the paved RP173 route and the main viewpoints. You only need a high-clearance vehicle if you plan the dirt detours, such as the approach to the Volcán Overo.',
        },
      ],
    },

    'lago-atuel-activities': {
      slug: 'lago-atuel-activities',
      metaTitle: 'Lago Atuel Activities: Rafting, Kayaking & Reservoir Trips',
      metaDescription:
        'What to do at Lago Atuel in Atuel Canyon: rafting on the Atuel river, kayaking, boat rides, fishing and swimming, plus water safety and booking tips.',
      h1: 'Lago Atuel Activities: Rafting, Kayaking and Reservoir Trips',
      lede: 'Lago Atuel is where the Atuel river is held back by the El Nihuil dam, and it is the busiest stretch of water in the canyon. Here is what you can actually do there, and what to check first.',
      sections: [
        {
          h2: 'Where Lago Atuel fits in the canyon',
          body: 'The Atuel river is dammed in a cascade of reservoirs as it leaves the Andes, and the stretch held back at the downstream end is the lake known as Lago Atuel. It sits at roughly the 55 km mark along RP173, before El Nihuil village, and its wide turquoise banks make it the natural centre for water activities.',
          bullets: [
            'Approached along RP173 from San Rafael — see the full driving guide.',
            'Close to El Nihuil village, where you find food, camping and supplies.',
            'Wide, accessible banks make it the easiest water access point in the canyon.',
          ],
        },
        {
          h2: 'Rafting on the Atuel river',
          body: 'Rafting is the signature activity of the canyon and the reason many visitors come. The Atuel is a dam-release river, so difficulty changes with how much water is being released on the day rather than staying fixed.',
          bullets: [
            'Operators assess conditions each morning and will cancel if the water is unsuitable.',
            'Helmets and life jackets are provided; transfers and a guide are usually included.',
            'Expect to get thoroughly wet — quick-drying clothing is far more useful than cotton.',
            'Book ahead in peak season, and treat the departure time as fixed.',
          ],
        },
        {
          h2: 'Kayaking, paddleboarding and boat trips',
          body: 'If rafting sounds like too much, the calmer water on the lake and on the reservoirs downstream is ideal for paddling and for boat rides. These are also the better options for families and for anyone who would rather stay dry.',
          bullets: [
            'Kayak and stand-up paddle sessions typically run one to two hours and suit beginners.',
            'Boat rides and fishing are best on calm, low-wind days.',
            'Wind is the main thing that cancels water activities — check the forecast before you commit.',
          ],
        },
        {
          h2: 'Water safety in an Andean snowmelt river',
          body: 'This water comes down from Andean snowmelt and stays cold all year, even when the air temperature is high. That combination catches people out, so treat it with more respect than a warm lowland lake.',
          bullets: [
            'Water temperature stays low regardless of how hot the day feels.',
            'Never swim where no lifeguard or operator is present.',
            'Wear the provided life jacket, and keep children within arm’s reach at all times.',
            'Cold water drains strength quickly — keep sessions short and get warm afterwards.',
          ],
        },
        {
          h2: 'Best time of day and season',
          body: 'Water activities generally run from morning to late afternoon. Mornings are usually calmer, which matters for kayaking and boat trips, while afternoons can bring the wind that the canyon is known for.',
          bullets: [
            'Morning: calmest water, best conditions for paddling and boats.',
            'Afternoon: wind builds; rafting still runs but lake activities may pause.',
            'Summer: busiest and hottest — book early and start early.',
            'Winter: cold and fewer operators running; confirm what is actually operating before travelling.',
          ],
        },
      ],
      faq: [
        {
          q: 'What is Lago Atuel exactly?',
          a: 'It is the lake formed where the Atuel river is held back by the El Nihuil dam, along with the name of the small settlement on its shore. It is the main area in the canyon for rafting, kayaking, boat rides and swimming.',
        },
        {
          q: 'Do I need to book rafting in advance?',
          a: 'In peak season and on public holidays, yes — book at least a day ahead. Departures also depend on how much water is being released from the dams, so operators may cancel on the day even with a booking.',
        },
        {
          q: 'Is the water safe to swim in?',
          a: 'It is Andean snowmelt and stays cold all year, so it is a genuine cold-water environment. Swim only where a lifeguard or operator is present, wear the life jacket provided, and keep sessions short.',
        },
        {
          q: 'Can I do water activities and see the canyon in one day?',
          a: 'Yes. A common pattern is to drive RP173 in the morning, stop at the viewpoints, then do the water activity around midday and finish at El Nihuil before returning to San Rafael.',
        },
      ],
    },
  },

  es: {
    'atuel-canyon-tours-from-san-rafael': {
      slug: 'atuel-canyon-tours-from-san-rafael',
      metaTitle: 'Excursiones al Cañón del Atuel desde San Rafael: Opciones',
      metaDescription:
        'Compará las excursiones al Cañón del Atuel desde San Rafael: tours grupales, traslados privados y auto propio. Qué incluye cada opción y cómo reservar.',
      h1: 'Excursiones al Cañón del Atuel desde San Rafael',
      lede: 'No hay transporte público que te deje en los miradores del Cañón del Atuel, así que toda visita es una excursión guiada, un traslado privado o auto propio. Acá comparamos las tres con honestidad.',
      sections: [
        {
          h2: 'Por qué casi todos salen desde San Rafael',
          body: 'El cañón empieza a unos 40 km al sur de San Rafael por la ruta provincial RP173, y en San Rafael están las agencias, el alquiler de autos, el combustible y la oficina de informes turísticos. Elijas lo que elijas, el día empieza y termina ahí.',
          bullets: [
            'Distancia de San Rafael al primer mirador (Valle Grande): unos 40 km.',
            'Desde la ciudad de Mendoza, sumá unos 240 km de ruta antes de llegar a San Rafael.',
            'No hay servicio de colectivo regular que te deje en los miradores del cañón.',
          ],
        },
        {
          h2: 'Opción 1 — Excursión grupal de día completo o medio día',
          body: 'La opción por defecto para quien no tiene auto. Una agencia local pone el vehículo, un chofer-guía y las paradas en los miradores principales. Algunos itinerarios permiten sumar rafting en el Atuel o paseo en lancha por los embalses.',
          bullets: [
            'Normalmente cubre Valle Grande, los miradores del cañón y El Laberinto, a veces El Nihuil.',
            'Las de medio día se concentran en los miradores; las de día completo suman una actividad acuática o un recorrido más largo.',
            'En temporada alta y feriados conviene reservar con anticipación: se agotan los cupos.',
          ],
        },
        {
          h2: 'Opción 2 — Traslado privado con chofer',
          body: 'Lo mejor si viajás en familia, en grupo chico o con equipo fotográfico. Vos elegís las paradas y cuánto tiempo quedarte en cada una, algo que importa mucho si buscás la luz del amanecer o del atardecer sobre las paredes de roca.',
          bullets: [
            'Se cobra por vehículo y no por persona: más conveniente para grupos de tres o más.',
            'Permite llegar al desvío del Volcán Overo o quedarse hasta tarde en un mirador.',
            'Preguntá de antemano si el chofer espera en cada parada o si deja y vuelve a buscar.',
          ],
        },
        {
          h2: 'Opción 3 — Auto propio o alquiler',
          body: 'La mayor libertad y, para dos o más personas, normalmente la opción más económica. Manejás vos el ritmo, y por eso la prefieren los fotógrafos y quien quiere arrancar al amanecer.',
          bullets: [
            'Cargá combustible en San Rafael: sobre el cañón prácticamente no hay estaciones.',
            'Descargá mapas offline: la señal de celular es inestable dentro del cañón.',
            'La RP173 tiene curvas cerradas y tramos al borde del acantilado; evitá manejarla de noche.',
          ],
        },
        {
          h2: 'Qué verificar antes de reservar',
          bullets: [
            'Si el precio incluye entradas, almuerzo y actividades acuáticas, o solo el transporte.',
            'El punto de encuentro exacto y el horario de salida: algunas excursiones salen muy temprano.',
            'La política de cancelación por clima, ya que el viento fuerte puede cerrar las actividades acuáticas.',
            'Si el vehículo sirve para los desvíos de tierra, en caso de que quieras la ruta al Volcán Overo.',
          ],
        },
      ],
      faq: [
        {
          q: '¿Cuánto dura una excursión al Cañón del Atuel desde San Rafael?',
          a: 'Una excursión de medio día suele durar entre cuatro y cinco horas y cubre los miradores principales. Una de día completo, con actividad acuática o recorrido más largo hasta El Nihuil, suele llevar entre siete y nueve horas con los traslados incluidos.',
        },
        {
          q: '¿Se puede visitar el Cañón del Atuel sin excursión?',
          a: 'Sí. Manejar por la RP173 es totalmente habitual y te da la mayor libertad. No hay colectivo público hasta los miradores, así que sin auto vas a necesitar una excursión guiada o un traslado privado.',
        },
        {
          q: '¿Hay que reservar con anticipación?',
          a: 'En temporada alta y feriados sí: confirmá al menos un día antes. Fuera de esos períodos muchas veces se puede armar sobre la marcha, pero el rafting y las actividades en lancha dependen del caudal y de la demanda del día.',
        },
        {
          q: '¿Sirven para niños y adultos mayores?',
          a: 'Las excursiones clásicas de miradores implican muy poca caminata y son aptas para casi todas las edades. El rafting tiene requisitos de edad y condición física fijados por cada operador, y la caminata por El Laberinto es sobre terreno suelto y sin sombra.',
        },
      ],
    },

    'rp173-road-trip-guide': {
      slug: 'rp173-road-trip-guide',
      metaTitle: 'Ruta RP173: Guía para Manejar el Cañón del Atuel en Auto',
      metaDescription:
        'Cómo manejar la RP173 por el Cañón del Atuel: recorrido parada por parada desde San Rafael, distancias, estado del camino, combustible y señal.',
      h1: 'Guía de la RP173: Manejar por el Cañón del Atuel',
      lede: 'La RP173 es la ruta escénica provincial que va pegada a la pared del cañón, al sur de San Rafael. Es el único eje que conecta todos los atractivos del cañón, y así se maneja correctamente.',
      sections: [
        {
          h2: 'El recorrido de un vistazo',
          body: 'El trayecto va de San Rafael a El Nihuil, unos 70 km, y normalmente se hace como salida de medio día o día completo. Las paradas de abajo están en orden de recorrido, que es la forma más eficiente de ver todo.',
          bullets: [
            'San Rafael (0 km) — combustible, provisiones, alquiler de autos, informes turísticos.',
            'Entrada al cañón / inicio de la RP173 (~25 km) — el camino pasa a curvas y pendientes.',
            'Embalse Valle Grande (~40 km) — primer embalse y mirador clásico.',
            'El Laberinto (~45 km) — estacioná y caminá entre las columnas rojas.',
            'Costa del Lago Atuel (~55 km) — el tramo de agua más concurrido.',
            'Paraje El Nihuil (~70 km) — embalse aguas abajo, gastronomía, camping, aprovisionamiento.',
            'Desvío al Volcán Overo (~80 km) — camino de tierra hacia el cono volcánico.',
          ],
        },
        {
          h2: 'Estado del camino y qué esperar',
          body: 'La RP173 está pavimentada en el tramo principal del cañón, pero es un camino de montaña: curvas constantes, pendientes y algunos tramos al borde del acantilado sin baranda del lado exterior.',
          bullets: [
            'La velocidad la impone la geometría más que el asfalto: esperá un manejo lento y sinuoso.',
            'Los tramos al borde reciben viento lateral con viento fuerte; sostené el volante con ambas manos.',
            'Puede haber derrumbes después de lluvias, sobre todo donde el camino corre justo bajo las paredes de roca.',
            'Los desvíos de tierra, como el acceso al Volcán Overo, requieren vehículo alto.',
          ],
        },
        {
          h2: 'Chequeos prácticos antes de salir',
          bullets: [
            'Combustible: las estaciones se concentran en la ciudad de San Rafael y casi no hay sobre el cañón. Cargá antes de entrar.',
            'Señal: la cobertura celular es inestable dentro del cañón. Descargá mapas offline y avisale a alguien tu plan y horario de regreso.',
            'Agua y comida: llevá lo tuyo. Los servicios son limitados hasta el paraje El Nihuil.',
            'Sol y viento: hay muy poca sombra y el cañón está expuesto a viento fuerte la mayor parte del año.',
            'Estacionamiento: las banquinas de los miradores son chicas y se llenan por la mañana en temporada alta. Nunca pares en curvas ni en banquinas de emergencia.',
          ],
        },
        {
          h2: 'Elegir el horario según la luz',
          body: 'El cañón es un destino fotográfico y la luz importa. La luz rasante del amanecer y del atardecer es la que marca los estratos de roca, mientras que el mediodía aplana todo y además es la parte más calurosa y expuesta del día.',
          bullets: [
            'Amanecer: mejor luz en Valle Grande y en las paredes que miran al este, y menos autos.',
            'Atardecer: luz cálida sobre la roca roja, ideal para el regreso.',
            'Mediodía: evitalo si podés: luz dura, sin sombra y calor máximo en verano.',
          ],
        },
        {
          h2: 'Combinar la RP173 con una escapada lateral',
          body: 'Al Embalse Los Reyunos se llega desde otro acceso distinto al de la ruta del cañón, así que conviene tratarlo como medio día aparte en vez de forzarlo dentro de un día de RP173. El desvío al Volcán Overo, en cambio, está en el extremo de El Nihuil y se puede sumar a la vuelta.',
        },
      ],
      faq: [
        {
          q: '¿Cuántos kilómetros tiene la RP173 en el Cañón del Atuel?',
          a: 'El tramo del cañón entre San Rafael y El Nihuil es de unos 70 km. Como es un camino de montaña sinuoso con paradas en miradores, calculá medio día solo para el manejo y un día completo si sumás una actividad acuática o el desvío al Volcán Overo.',
        },
        {
          q: '¿La RP173 está pavimentada?',
          a: 'El tramo principal del cañón está pavimentado. Los caminos laterales a lugares como el Volcán Overo son en su mayoría de tierra y cambian según la temporada, así que confirmá la transitabilidad localmente antes de salir.',
        },
        {
          q: '¿Se puede manejar la RP173 de noche?',
          a: 'No es recomendable. La ruta tiene curvas continuas y tramos al borde del acantilado, con poca iluminación y señal de celular inestable, así que conviene volver a San Rafael antes de que oscurezca.',
        },
        {
          q: '¿Hace falta una 4x4 para el Cañón del Atuel?',
          a: 'No: un auto común resuelve el recorrido pavimentado de la RP173 y los miradores principales. Solo necesitás vehículo alto si planeás los desvíos de tierra, como el acceso al Volcán Overo.',
        },
      ],
    },

    'lago-atuel-activities': {
      slug: 'lago-atuel-activities',
      metaTitle: 'Lago Atuel: Rafting, Kayak y Actividades en el Cañón',
      metaDescription:
        'Qué hacer en el Lago Atuel del Cañón del Atuel: rafting en el río Atuel, kayak, paseos en lancha, pesca y baño, con consejos de seguridad y reservas.',
      h1: 'Actividades en el Lago Atuel: Rafting, Kayak y Paseos',
      lede: 'El Lago Atuel es donde el río Atuel queda contenido por la presa de El Nihuil, y es el tramo de agua más concurrido del cañón. Esto es lo que realmente se puede hacer ahí y qué conviene verificar antes.',
      sections: [
        {
          h2: 'Dónde queda el Lago Atuel dentro del cañón',
          body: 'El río Atuel está represado en una cascada de embalses a medida que baja de los Andes, y el tramo contenido en el extremo inferior es el lago conocido como Lago Atuel. Está aproximadamente en el kilómetro 55 de la RP173, antes del paraje El Nihuil, y sus costas amplias y turquesas lo vuelven el centro natural de las actividades acuáticas.',
          bullets: [
            'Se llega por la RP173 desde San Rafael: ver la guía completa de manejo.',
            'Cerca del paraje El Nihuil, donde hay gastronomía, camping y aprovisionamiento.',
            'Costas amplias y accesibles: el punto de acceso al agua más fácil del cañón.',
          ],
        },
        {
          h2: 'Rafting en el río Atuel',
          body: 'El rafting es la actividad insignia del cañón y el motivo por el que muchos visitantes llegan. El Atuel es un río de erogación regulada por presas, así que la dificultad cambia según cuánta agua liberen ese día en lugar de mantenerse fija.',
          bullets: [
            'Los operadores evalúan las condiciones cada mañana y cancelan si el agua no es apta.',
            'Se entregan casco y chaleco; el traslado y el guía suelen estar incluidos.',
            'Te vas a mojar por completo: la ropa de secado rápido sirve mucho más que el algodón.',
            'Reservá en temporada alta y tomá el horario de salida como fijo.',
          ],
        },
        {
          h2: 'Kayak, stand up paddle y paseos en lancha',
          body: 'Si el rafting te parece demasiado, el agua más calma del lago y de los embalses aguas abajo es ideal para remar y para paseos en lancha. También son las mejores opciones para familias y para quien prefiera no mojarse.',
          bullets: [
            'Las sesiones de kayak y stand up paddle suelen durar una o dos horas y son aptas para principiantes.',
            'Los paseos en lancha y la pesca son mejores en días calmos y con poco viento.',
            'El viento es el principal motivo de cancelación de actividades acuáticas: mirá el pronóstico antes de comprometerte.',
          ],
        },
        {
          h2: 'Seguridad en un río de deshielo andino',
          body: 'Esta agua baja del deshielo andino y se mantiene fría todo el año, incluso cuando la temperatura del aire es alta. Esa combinación sorprende a mucha gente, así que conviene tratarla con más respeto que un lago cálido de llanura.',
          bullets: [
            'La temperatura del agua sigue baja sin importar cuánto calor haga.',
            'Nunca nades donde no haya guardavidas ni operador presente.',
            'Usá el chaleco salvavidas provisto y mantené a los chicos al alcance del brazo.',
            'El agua fría quita fuerza rápido: sesiones cortas y abrigarse después.',
          ],
        },
        {
          h2: 'Mejor momento del día y de la temporada',
          body: 'Las actividades acuáticas van en general de la mañana al atardecer. Las mañanas suelen ser más calmas, lo que importa para kayak y paseos en lancha, mientras que por la tarde puede levantarse el viento por el que se conoce al cañón.',
          bullets: [
            'Mañana: agua más calma, mejores condiciones para remar y navegar.',
            'Tarde: se levanta el viento; el rafting sigue, pero las actividades de lago pueden pausarse.',
            'Verano: lo más concurrido y caluroso: reservá temprano y arrancá temprano.',
            'Invierno: frío y menos operadores activos; confirmá qué está funcionando antes de viajar.',
          ],
        },
      ],
      faq: [
        {
          q: '¿Qué es exactamente el Lago Atuel?',
          a: 'Es el lago que se forma donde el río Atuel queda contenido por la presa de El Nihuil, y también el nombre del pequeño paraje en su orilla. Es la zona principal del cañón para rafting, kayak, paseos en lancha y baño.',
        },
        {
          q: '¿Hay que reservar el rafting con anticipación?',
          a: 'En temporada alta y feriados sí: reservá al menos un día antes. Las salidas además dependen de cuánta agua liberen las presas, así que los operadores pueden cancelar el mismo día incluso con reserva.',
        },
        {
          q: '¿Se puede nadar en el agua?',
          a: 'Es deshielo andino y se mantiene fría todo el año, así que es un ambiente real de agua fría. Nadá solo donde haya guardavidas u operador presente, usá el chaleco provisto y hacé sesiones cortas.',
        },
        {
          q: '¿Se puede hacer una actividad acuática y ver el cañón el mismo día?',
          a: 'Sí. Un patrón habitual es manejar la RP173 a la mañana, parar en los miradores, hacer la actividad acuática al mediodía y terminar en El Nihuil antes de volver a San Rafael.',
        },
      ],
    },
  },

  zh: {
    'atuel-canyon-tours-from-san-rafael': {
      slug: 'atuel-canyon-tours-from-san-rafael',
      metaTitle: '圣拉斐尔出发的阿图埃尔峡谷游览团：三种方式对比',
      metaDescription:
        '对比从圣拉斐尔出发前往阿图埃尔峡谷的游览方式：团体一日游、私人包车、自驾。各自包含什么、需要多久、如何预约，一次说清。',
      h1: '圣拉斐尔出发的阿图埃尔峡谷游览团',
      lede: '峡谷观景台没有公共交通直达，所以任何一次游览都只能是跟团、私人包车或自驾三种方式之一。这里把三者的真实差异摊开对比，方便你选对。',
      sections: [
        {
          h2: '为什么行程几乎都从圣拉斐尔开始',
          body: '峡谷从圣拉斐尔沿 RP173 省道向南约 40 公里处开始，而旅行社、租车行、加油站和游客信息中心全部集中在圣拉斐尔。无论选哪种方式，你的一天都会在这里开始和结束。',
          bullets: [
            '圣拉斐尔到第一个观景台（Valle Grande 水库）约 40 公里。',
            '若从门多萨市区出发，需先在高速上行驶约 240 公里才到圣拉斐尔。',
            '没有班车线路会把游客送到峡谷内的观景台。',
          ],
        },
        {
          h2: '方式一：团体一日游 / 半日游',
          body: '没有自驾的游客的默认选择。当地旅行社会提供车辆、司机兼向导，并在主要观景台停靠。部分线路可以加订阿图埃尔河漂流或水库游船。',
          bullets: [
            '常规线路覆盖 Valle Grande、峡谷沿线观景台与 El Laberinto，部分包含 El Nihuil。',
            '半日游以观景台为主；一日游会再加一项水上活动或更长的路线。',
            '旺季与公共假期务必提前预约，名额会售完。',
          ],
        },
        {
          h2: '方式二：私人包车与司机',
          body: '适合家庭、小团体或携带摄影器材的游客。停靠点和每个点的停留时长由你决定——如果你要等日出或日落的光线，这一点非常关键。',
          bullets: [
            '按车计价而非按人计价，三人以上时性价比更好。',
            '可以前往 Volcán Overo 岔路，或在某个观景台待到很晚。',
            '事先确认司机是每站等候，还是送到后回头再接。',
          ],
        },
        {
          h2: '方式三：自驾或租车',
          body: '自由度最高，且两人以上通常最省钱。节奏完全由自己掌握，因此摄影爱好者和想赶日出的人更偏好这种方式。',
          bullets: [
            '在圣拉斐尔加满油——峡谷沿线基本没有加油站。',
            '提前下载离线地图，峡谷内手机信号不稳定。',
            'RP173 弯道密集且有临崖路段，避免夜间行车。',
          ],
        },
        {
          h2: '预约前需要确认的事项',
          bullets: [
            '报价是否包含门票、午餐和水上活动，还是只有交通。',
            '确切的集合地点与发车时间——部分团出发非常早。',
            '因天气取消的政策：大风可能导致水上活动停运。',
            '若想走 Volcán Overo 线路，确认车辆是否适合土路岔道。',
          ],
        },
      ],
      faq: [
        {
          q: '从圣拉斐尔出发的峡谷游览团通常需要多久？',
          a: '半日游一般四到五小时，覆盖主要观景台。含水上活动或一路开到 El Nihuil 的一日游，含往返接送通常七到九小时。',
        },
        {
          q: '不跟团可以游览阿图埃尔峡谷吗？',
          a: '可以。沿 RP173 自驾是完全常规的做法，自由度也最高。但没有公共班车到观景台，所以不开车的话就需要跟团或私人包车。',
        },
        {
          q: '需要提前预约吗？',
          a: '旺季与公共假期需要，建议至少提前一天确认。其他时段往往可以临时安排，但漂流和游船取决于当天水情与需求量。',
        },
        {
          q: '适合儿童和年长游客吗？',
          a: '常规观景台线路步行极少，适合大多数年龄层。漂流有各运营方自定的年龄与体能要求；El Laberinto 的步行路段地面松散且几乎没有遮荫。',
        },
      ],
    },

    'rp173-road-trip-guide': {
      slug: 'rp173-road-trip-guide',
      metaTitle: 'RP173 公路自驾攻略：从圣拉斐尔开进阿图埃尔峡谷',
      metaDescription:
        'RP173 阿图埃尔峡谷自驾全攻略：从圣拉斐尔出发的逐站路线、里程、路况、加油站、手机信号与驾驶注意事项。',
      h1: 'RP173 自驾攻略：开进阿图埃尔峡谷',
      lede: 'RP173 是紧贴峡谷崖壁蜿蜒的省级景观公路，位于圣拉斐尔以南。它是串联峡谷内所有景点的唯一主线，这份指南说明怎么开才合适。',
      sections: [
        {
          h2: '路线一览',
          body: '线路从圣拉斐尔通往 El Nihuil，全程约 70 公里，通常安排半天到一天往返。以下停靠点按行驶顺序排列，是最省时的走法。',
          bullets: [
            '圣拉斐尔（0 km）——加油、补给、租车、游客信息中心。',
            '峡谷入口 / RP173 起点（约 25 km）——路面转为连续弯道与坡道。',
            'Valle Grande 水库（约 40 km）——第一座水库与经典观景台。',
            'El Laberinto 迷宫石林（约 45 km）——停车步行穿行红色岩柱。',
            'Lago Atuel 湖岸（约 55 km）——水上活动最集中的湖段。',
            'El Nihuil 村（约 70 km）——下游水库，有餐饮、露营与补给。',
            'Volcán Overo 岔路（约 80 km）——转土路前往火山锥。',
          ],
        },
        {
          h2: '路况与预期',
          body: 'RP173 在峡谷主段为铺装路面，但它是一条山区公路：弯道连续、坡度明显，部分临崖路段外侧没有护栏。',
          bullets: [
            '车速主要由线形决定而非路面，请预期是一段缓慢而曲折的车程。',
            '大风天气临崖路段侧风明显，请双手稳握方向盘。',
            '雨后可能落石，尤其是公路紧贴岩壁的路段。',
            '前往 Volcán Overo 等土路岔道需要高底盘车辆。',
          ],
        },
        {
          h2: '出发前的实用检查',
          bullets: [
            '加油：加油站集中在圣拉斐尔市区，峡谷沿线几乎没有，进山前务必加满。',
            '信号：峡谷内手机覆盖不稳定，请下载离线地图并告知他人行程与预计返回时间。',
            '水与食物：自备。沿线服务点稀少，直到 El Nihuil 村才有补给。',
            '日照与风：遮荫极少，且峡谷全年大部分时间暴露在强风中。',
            '停车：观景台停车带很小，旺季上午容易停满。切勿在弯道或应急车道停车。',
          ],
        },
        {
          h2: '按光线安排时间',
          body: '峡谷是摄影目的地，光线很关键。清晨与傍晚的侧光最能压出岩壁层理，而正午的光线会让一切变得平淡，同时也是最热、最缺乏遮挡的时段。',
          bullets: [
            '清晨：Valle Grande 与朝东岩壁光线最好，车辆也最少。',
            '傍晚：暖光打在红色岩体上，适合回程拍摄。',
            '正午：能避开就避开——光线生硬、没有遮荫，夏季还是高温时段。',
          ],
        },
        {
          h2: '与侧线行程的搭配',
          body: 'Los Reyunos 水库的进入方向与峡谷公路不同，建议单独安排半天，不要硬塞进 RP173 的行程里。而 Volcán Overo 岔路位于 El Nihuil 一端，可以在回程时顺路加入。',
        },
      ],
      faq: [
        {
          q: 'RP173 在阿图埃尔峡谷段有多长？',
          a: '从圣拉斐尔到 El Nihuil 的峡谷段约 70 公里。由于是曲折的山区公路且需要在观景台停靠，建议为行车本身预留半天；若再加水上活动或 Volcán Overo 岔路，则需一整天。',
        },
        {
          q: 'RP173 是铺装路面吗？',
          a: '峡谷主段是铺装路面。前往 Volcán Overo 等地的支路以土路为主，路况随季节变化，出发前请向当地确认通行情况。',
        },
        {
          q: 'RP173 可以夜间行驶吗？',
          a: '不建议。该路弯道连续、存在临崖路段，照明有限且手机信号不稳定，最好在天黑前返回圣拉斐尔。',
        },
        {
          q: '去阿图埃尔峡谷需要四驱车吗？',
          a: '不需要。普通轿车即可完成 RP173 铺装路段与主要观景台。只有当你计划走土路岔道（例如前往 Volcán Overo）时，才需要高底盘车辆。',
        },
      ],
    },

    'lago-atuel-activities': {
      slug: 'lago-atuel-activities',
      metaTitle: 'Lago Atuel 游玩攻略：漂流、皮划艇与水库活动',
      metaDescription:
        '阿图埃尔峡谷 Lago Atuel 能玩什么：阿图埃尔河漂流、皮划艇、游船、垂钓与戏水，附水温安全提示与预约要点。',
      h1: 'Lago Atuel 游玩攻略：漂流、皮划艇与水库活动',
      lede: 'Lago Atuel 是阿图埃尔河被 El Nihuil 大坝蓄水后形成的湖面，也是峡谷内水上活动最集中的水域。以下是实际能玩的项目，以及出发前必须确认的事。',
      sections: [
        {
          h2: 'Lago Atuel 在峡谷中的位置',
          body: '阿图埃尔河自安第斯山脉流出后被梯级大坝层层蓄水，最下游这一段湖面即被称为 Lago Atuel。它大致位于 RP173 的 55 公里处、El Nihuil 村之前，开阔的碧蓝湖岸使其成为水上活动的天然中心。',
          bullets: [
            '沿 RP173 从圣拉斐尔进入，详见完整自驾攻略。',
            '紧邻 El Nihuil 村，有餐饮、露营与补给。',
            '湖岸开阔易达，是峡谷内最方便的下水点。',
          ],
        },
        {
          h2: '阿图埃尔河漂流',
          body: '漂流是峡谷的招牌项目，也是许多游客此行的主要目的。阿图埃尔河属于大坝调节型河流，因此难度取决于当天放水量，而非固定不变。',
          bullets: [
            '运营方每天上午评估水情，不适合时会直接取消。',
            '提供头盔与救生衣，通常包含接驳与教练。',
            '一定会全身湿透，速干衣物远比棉质有用。',
            '旺季请提前预约，并把出发时间当作固定时间对待。',
          ],
        },
        {
          h2: '皮划艇、桨板与游船',
          body: '如果觉得漂流太刺激，湖面与下游水库的平静水域非常适合划桨与游船。这些也是家庭游客与不想下水者的更优选择。',
          bullets: [
            '皮划艇与桨板体验通常一至两小时，适合初学者。',
            '游船与垂钓在风小的平静日子体验最佳。',
            '风是水上活动取消的主要原因——决定前请先看预报。',
          ],
        },
        {
          h2: '雪山融水水域的安全要点',
          body: '这里的水来自安第斯雪山融水，即使气温很高，水温也常年偏低。这种组合最容易让人误判，请比对温暖的平原湖泊更加谨慎。',
          bullets: [
            '无论天气多热，水温都保持偏低。',
            '切勿在没有救生员或运营方在场的水域游泳。',
            '全程穿好提供的救生衣，儿童始终保持在伸手可及范围内。',
            '冷水会迅速消耗体力——缩短单次时间，出水后及时保暖。',
          ],
        },
        {
          h2: '一天中的最佳时段与季节',
          body: '水上活动一般从上午持续到傍晚。上午通常风更小，这对皮划艇和游船尤其重要；下午则可能起风，而大风正是这条峡谷的特点。',
          bullets: [
            '上午：水面最平静，最适合划桨与乘船。',
            '下午：风力增强，漂流通常照常，但湖上活动可能暂停。',
            '夏季：最热门也最炎热——尽早预约、尽早出发。',
            '冬季：寒冷且运营方较少，出发前先确认哪些项目在运营。',
          ],
        },
      ],
      faq: [
        {
          q: 'Lago Atuel 到底是什么？',
          a: '它是阿图埃尔河被 El Nihuil 大坝拦蓄后形成的湖面，同时也是湖畔小聚落的名字。这里是峡谷内漂流、皮划艇、游船与戏水的主要区域。',
        },
        {
          q: '漂流需要提前预约吗？',
          a: '旺季与公共假期需要，建议至少提前一天。此外出发还取决于大坝当天的放水量，因此即使已预约，运营方也可能当天取消。',
        },
        {
          q: '这里的水可以游泳吗？',
          a: '这里是安第斯雪山融水，全年水温偏低，属于真正的冷水环境。请只在有救生员或运营方在场的水域游泳，穿好提供的救生衣，并缩短单次时间。',
        },
        {
          q: '一天之内可以既玩水上项目又逛峡谷吗？',
          a: '可以。常见安排是上午沿 RP173 行驶并在观景台停留，中午进行水上活动，最后到 El Nihuil 收尾，再返回圣拉斐尔。',
        },
      ],
    },
  },

  it: {
    'atuel-canyon-tours-from-san-rafael': {
      slug: 'atuel-canyon-tours-from-san-rafael',
      metaTitle: 'Escursioni al Cañón del Atuel da San Rafael: Opzioni',
      metaDescription:
        'Confronta le escursioni al Cañón del Atuel da San Rafael: tour di gruppo, transfer privato e auto propria. Cosa è incluso, quanto dura e come prenotare.',
      h1: 'Escursioni al Cañón del Atuel da San Rafael',
      lede: 'Non esiste un mezzo pubblico che ti lasci ai miradores del Cañón del Atuel, quindi ogni visita è un tour guidato, un transfer privato o un viaggio in auto propria. Ecco un confronto onesto tra le tre opzioni.',
      sections: [
        {
          h2: 'Perché quasi tutti partono da San Rafael',
          body: 'Il canyon inizia circa 40 km a sud di San Rafael lungo la strada provinciale RP173, e a San Rafael si trovano le agenzie, il noleggio auto, il carburante e l’ufficio informazioni turistiche. Qualunque opzione scegli, la giornata inizia e finisce lì.',
          bullets: [
            'Distanza da San Rafael al primo mirador (Valle Grande): circa 40 km.',
            'Dalla città di Mendoza, aggiungi circa 240 km di autostrada prima di arrivare a San Rafael.',
            'Non esiste un servizio di linea che ti lasci ai miradores del canyon.',
          ],
        },
        {
          h2: 'Opzione 1 — Tour di gruppo di mezza o intera giornata',
          body: 'La scelta predefinita per chi non ha un’auto. Un’agenzia locale fornisce veicolo, autista-guida e le soste ai miradores principali. Alcuni itinerari permettono di aggiungere il rafting sull’Atuel o un giro in barca sugli invasi.',
          bullets: [
            'Di norma copre Valle Grande, i miradores del canyon ed El Laberinto, talvolta El Nihuil.',
            'I tour di mezza giornata si concentrano sui miradores; quelli di giornata intera aggiungono un’attività acquatica o un percorso più lungo.',
            'In alta stagione e nei giorni festivi prenota in anticipo: i posti si esauriscono.',
          ],
        },
        {
          h2: 'Opzione 2 — Transfer privato con autista',
          body: 'La scelta migliore per famiglie, piccoli gruppi o chi viaggia con attrezzatura fotografica. Scegli tu le soste e quanto restare in ciascuna, cosa che conta molto se cerchi la luce dell’alba o del tramonto sulle pareti rocciose.',
          bullets: [
            'Si paga a veicolo e non a persona: più conveniente per gruppi di tre o più.',
            'Permette di raggiungere il bivio per il Volcán Overo o di restare fino a tardi a un mirador.',
            'Chiedi in anticipo se l’autista attende a ogni sosta oppure lascia e torna a prendere.',
          ],
        },
        {
          h2: 'Opzione 3 — Auto propria o a noleggio',
          body: 'La massima libertà e, per due o più persone, di solito la soluzione più economica. Gestisci tu il ritmo: per questo la preferiscono i fotografi e chi vuole partire all’alba.',
          bullets: [
            'Fai il pieno a San Rafael: lungo il canyon non ci sono praticamente distributori.',
            'Scarica le mappe offline: il segnale cellulare è instabile dentro il canyon.',
            'La RP173 ha curve strette e tratti a picco; evita di guidarla di notte.',
          ],
        },
        {
          h2: 'Cosa verificare prima di prenotare',
          bullets: [
            'Se il prezzo include ingressi, pranzo e attività acquatiche oppure solo il trasporto.',
            'Il punto di ritrovo esatto e l’orario di partenza: alcuni tour partono molto presto.',
            'La politica di cancellazione per il meteo, dato che il vento forte può chiudere le attività acquatiche.',
            'Se il veicolo è adatto agli sterrati, nel caso tu voglia il percorso verso il Volcán Overo.',
          ],
        },
      ],
      faq: [
        {
          q: 'Quanto dura un’escursione al Cañón del Atuel da San Rafael?',
          a: 'Un tour di mezza giornata dura di solito quattro o cinque ore e copre i miradores principali. Un tour di giornata intera con attività acquatica o percorso più lungo fino a El Nihuil richiede in genere sette o nove ore, transfer inclusi.',
        },
        {
          q: 'Si può visitare il Cañón del Atuel senza tour?',
          a: 'Sì. Guidare lungo la RP173 è del tutto normale e offre la massima libertà. Non ci sono autobus pubblici per i miradores, quindi senza auto servono un tour guidato o un transfer privato.',
        },
        {
          q: 'Serve prenotare in anticipo?',
          a: 'In alta stagione e nei giorni festivi sì: conferma almeno un giorno prima. Fuori da quei periodi spesso si organizza anche all’ultimo momento, ma rafting e gite in barca dipendono dalla portata del fiume e dalla domanda del giorno.',
        },
        {
          q: 'I tour sono adatti a bambini e anziani?',
          a: 'I tour classici ai miradores prevedono pochissima camminata e vanno bene per quasi tutte le età. Il rafting ha requisiti di età e forma fisica stabiliti da ogni operatore, e la camminata a El Laberinto è su terreno friabile e senza ombra.',
        },
      ],
    },

    'rp173-road-trip-guide': {
      slug: 'rp173-road-trip-guide',
      metaTitle: 'Guida alla RP173: Guidare nel Cañón del Atuel',
      metaDescription:
        'Come guidare sulla RP173 nel Cañón del Atuel: percorso tappa per tappa da San Rafael, distanze, condizioni della strada, carburante e segnale.',
      h1: 'Guida alla RP173: Guidare nel Cañón del Atuel',
      lede: 'La RP173 è la strada panoramica provinciale che corre a ridosso della parete del canyon, a sud di San Rafael. È l’unico asse che collega tutte le attrazioni del canyon, ed ecco come percorrerla come si deve.',
      sections: [
        {
          h2: 'Il percorso in breve',
          body: 'Il tragitto va da San Rafael a El Nihuil, circa 70 km, e normalmente si affronta come uscita di mezza giornata o di giornata intera. Le tappe sotto sono in ordine di percorrenza, il modo più efficiente di vedere tutto.',
          bullets: [
            'San Rafael (0 km) — carburante, provviste, noleggio auto, informazioni turistiche.',
            'Ingresso del canyon / inizio RP173 (~25 km) — la strada diventa curve e pendenze.',
            'Invaso Valle Grande (~40 km) — primo invaso e mirador classico.',
            'El Laberinto (~45 km) — parcheggia e cammina tra le colonne rosse.',
            'Riva del Lago Atuel (~55 km) — il tratto d’acqua più frequentato.',
            'Abitato di El Nihuil (~70 km) — invaso a valle, ristorazione, campeggio, rifornimenti.',
            'Bivio per il Volcán Overo (~80 km) — sterrato verso il cono vulcanico.',
          ],
        },
        {
          h2: 'Condizioni della strada e cosa aspettarsi',
          body: 'La RP173 è asfaltata nel tratto principale del canyon, ma è una strada di montagna: curve continue, pendenze e alcuni tratti a picco senza barriera sul lato esterno.',
          bullets: [
            'La velocità la impone la geometria più che l’asfalto: aspettati una guida lenta e tortuosa.',
            'I tratti a picco ricevono vento laterale con vento forte; tieni entrambe le mani sul volante.',
            'Sono possibili cadute massi dopo la pioggia, soprattutto dove la strada corre sotto le pareti rocciose.',
            'Gli sterrati, come l’accesso al Volcán Overo, richiedono un veicolo alto.',
          ],
        },
        {
          h2: 'Controlli pratici prima di partire',
          bullets: [
            'Carburante: i distributori sono concentrati nella città di San Rafael e quasi assenti lungo il canyon. Fai il pieno prima di entrare.',
            'Segnale: la copertura cellulare è instabile dentro il canyon. Scarica mappe offline e avvisa qualcuno del programma e dell’orario di rientro.',
            'Acqua e cibo: porta i tuoi. I servizi sono limitati fino all’abitato di El Nihuil.',
            'Sole e vento: c’è pochissima ombra e il canyon è esposto a vento forte per gran parte dell’anno.',
            'Parcheggio: le piazzole dei miradores sono piccole e in alta stagione si riempiono al mattino. Non fermarti mai su curve o corsie di emergenza.',
          ],
        },
        {
          h2: 'Scegliere l’orario in base alla luce',
          body: 'Il canyon è una destinazione fotografica e la luce conta. La luce radente di alba e tramonto è quella che esalta gli strati di roccia, mentre a mezzogiorno tutto si appiattisce ed è anche la parte più calda ed esposta della giornata.',
          bullets: [
            'Alba: luce migliore su Valle Grande e sulle pareti rivolte a est, e meno auto.',
            'Tramonto: luce calda sulla roccia rossa, ideale per il rientro.',
            'Mezzogiorno: evitalo se puoi — luce dura, nessuna ombra e caldo massimo in estate.',
          ],
        },
        {
          h2: 'Combinare la RP173 con un’escursione laterale',
          body: 'All’invaso Los Reyunos si arriva da un accesso diverso da quello della strada del canyon, quindi conviene trattarlo come mezza giornata a sé invece di forzarlo in una giornata sulla RP173. Il bivio per il Volcán Overo, al contrario, si trova all’estremità di El Nihuil e si può aggiungere al rientro.',
        },
      ],
      faq: [
        {
          q: 'Quanti chilometri è lunga la RP173 nel Cañón del Atuel?',
          a: 'Il tratto del canyon da San Rafael a El Nihuil è di circa 70 km. Essendo una strada di montagna tortuosa con soste ai miradores, calcola mezza giornata solo per la guida e una giornata intera se aggiungi un’attività acquatica o il bivio per il Volcán Overo.',
        },
        {
          q: 'La RP173 è asfaltata?',
          a: 'Il tratto principale del canyon è asfaltato. Le strade laterali verso luoghi come il Volcán Overo sono in gran parte sterrate e cambiano con la stagione: verifica la percorribilità sul posto prima di partire.',
        },
        {
          q: 'Si può guidare la RP173 di notte?',
          a: 'Non è consigliabile. La strada ha curve continue e tratti a picco, con illuminazione scarsa e segnale cellulare instabile: meglio rientrare a San Rafael prima del buio.',
        },
        {
          q: 'Serve un 4x4 per il Cañón del Atuel?',
          a: 'No: un’auto normale basta per il percorso asfaltato della RP173 e per i miradores principali. Serve un veicolo alto solo se prevedi gli sterrati, come l’accesso al Volcán Overo.',
        },
      ],
    },

    'lago-atuel-activities': {
      slug: 'lago-atuel-activities',
      metaTitle: 'Lago Atuel: Rafting, Kayak e Attività nel Cañón',
      metaDescription:
        'Cosa fare al Lago Atuel nel Cañón del Atuel: rafting sul fiume Atuel, kayak, gite in barca, pesca e balneazione, con consigli di sicurezza e prenotazioni.',
      h1: 'Attività al Lago Atuel: Rafting, Kayak e Gite',
      lede: 'Il Lago Atuel è il lago che si forma dove il fiume Atuel è trattenuto dalla diga di El Nihuil, ed è il tratto d’acqua più frequentato del canyon. Ecco cosa si può davvero fare lì e cosa verificare prima.',
      sections: [
        {
          h2: 'Dove si colloca il Lago Atuel nel canyon',
          body: 'Il fiume Atuel viene sbarrato in una cascata di invasi mentre scende dalle Ande, e il tratto trattenuto all’estremità inferiore è il lago noto come Lago Atuel. Si trova all’incirca al km 55 della RP173, prima dell’abitato di El Nihuil, e le sue sponde ampie e turchesi ne fanno il centro naturale delle attività acquatiche.',
          bullets: [
            'Si raggiunge lungo la RP173 da San Rafael: vedi la guida completa alla guida.',
            'Vicino all’abitato di El Nihuil, dove trovi ristorazione, campeggio e rifornimenti.',
            'Sponde ampie e accessibili: il punto d’accesso all’acqua più semplice del canyon.',
          ],
        },
        {
          h2: 'Rafting sul fiume Atuel',
          body: 'Il rafting è l’attività simbolo del canyon e il motivo per cui molti visitatori arrivano. L’Atuel è un fiume regolato da dighe, quindi la difficoltà cambia con l’acqua rilasciata quel giorno invece di restare fissa.',
          bullets: [
            'Gli operatori valutano le condizioni ogni mattina e annullano se l’acqua non è adatta.',
            'Vengono forniti casco e giubbotto; transfer e guida sono di norma inclusi.',
            'Ti bagnerai completamente: i capi ad asciugatura rapida servono molto più del cotone.',
            'Prenota in alta stagione e considera l’orario di partenza come fisso.',
          ],
        },
        {
          h2: 'Kayak, stand up paddle e gite in barca',
          body: 'Se il rafting ti sembra troppo, l’acqua più calma del lago e degli invasi a valle è ideale per pagaiare e per le gite in barca. Sono anche le opzioni migliori per famiglie e per chi preferisce non bagnarsi.',
          bullets: [
            'Le sessioni di kayak e stand up paddle durano in genere una o due ore e sono adatte ai principianti.',
            'Gite in barca e pesca rendono meglio nelle giornate calme e con poco vento.',
            'Il vento è il principale motivo di cancellazione delle attività acquatiche: controlla le previsioni prima di impegnarti.',
          ],
        },
        {
          h2: 'Sicurezza in un fiume di disgelo andino',
          body: 'Quest’acqua scende dal disgelo andino e resta fredda tutto l’anno, anche quando la temperatura dell’aria è alta. È una combinazione che coglie di sorpresa molte persone, quindi va trattata con più rispetto di un lago caldo di pianura.',
          bullets: [
            'La temperatura dell’acqua resta bassa indipendentemente dal caldo.',
            'Non nuotare mai dove non c’è un bagnino o un operatore presente.',
            'Indossa il giubbotto salvagente fornito e tieni i bambini a portata di braccio.',
            'L’acqua fredda toglie forza in fretta: sessioni brevi e coprirsi subito dopo.',
          ],
        },
        {
          h2: 'Momento migliore della giornata e della stagione',
          body: 'Le attività acquatiche vanno in genere dal mattino al tardo pomeriggio. Le mattine sono di solito più calme, cosa che conta per kayak e gite in barca, mentre nel pomeriggio può alzarsi il vento per cui il canyon è noto.',
          bullets: [
            'Mattina: acqua più calma, condizioni migliori per pagaiare e navigare.',
            'Pomeriggio: il vento aumenta; il rafting prosegue, ma le attività sul lago possono fermarsi.',
            'Estate: il periodo più affollato e caldo — prenota presto e parti presto.',
            'Inverno: freddo e meno operatori attivi; verifica cosa è effettivamente in funzione prima di partire.',
          ],
        },
      ],
      faq: [
        {
          q: 'Cos’è esattamente il Lago Atuel?',
          a: 'È il lago che si forma dove il fiume Atuel è trattenuto dalla diga di El Nihuil, e anche il nome del piccolo abitato sulla sua riva. È la zona principale del canyon per rafting, kayak, gite in barca e balneazione.',
        },
        {
          q: 'Bisogna prenotare il rafting in anticipo?',
          a: 'In alta stagione e nei giorni festivi sì: prenota almeno un giorno prima. Le partenze dipendono anche da quanta acqua rilasciano le dighe, quindi gli operatori possono annullare in giornata anche con prenotazione.',
        },
        {
          q: 'L’acqua è sicura per nuotare?',
          a: 'È disgelo andino e resta fredda tutto l’anno, quindi è un vero ambiente di acqua fredda. Nuota solo dove c’è un bagnino o un operatore, indossa il giubbotto fornito e fai sessioni brevi.',
        },
        {
          q: 'Si può fare un’attività acquatica e vedere il canyon in un giorno?',
          a: 'Sì. Uno schema comune è guidare la RP173 al mattino, fermarsi ai miradores, fare l’attività acquatica a metà giornata e chiudere a El Nihuil prima di rientrare a San Rafael.',
        },
      ],
    },
  },
};
