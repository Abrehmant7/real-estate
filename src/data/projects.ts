export interface Project {
  name: string;
  slug: string;
  location: string;
  summary: string;
  image: string;
  imageAlt: string;
  illustrative?: boolean;
  imageCaption?: string;
}

const faisalHills: Project = {
  name: 'Faisal Hills',
  slug: 'faisal-hills',
  location: 'Taxila, Rawalpindi District',
  summary: 'A township near the Margalla foothills with residential plots and the Faisal Jewel apartment development.',
  image: '/images/faisal-hills.webp',
  imageAlt: 'Roots International campus in Faisal Hills at dusk',
};

const blueWorldCity: Project = {
  name: 'Blue World City',
  slug: 'blue-world-city',
  location: 'Chakri, Rawalpindi',
  summary: 'A development off the Chakri Interchange with several districts along the Lahore–Islamabad Motorway corridor.',
  image: '/images/blue-world-city.webp',
  imageAlt: 'Aerial view of the Grand Entrance Gate at Blue World City',
};

const parkViewCity: Project = {
  name: 'Park View City',
  slug: 'park-view-city',
  location: 'Zone IV, Islamabad',
  summary: 'A housing scheme in Islamabad’s Zone IV. Ask us about the location and which blocks to compare.',
  image: '/images/park-view-city.webp',
  imageAlt: 'Landscaped plaza with domed pavilions in Park View City',
};

const saffronCity: Project = {
  name: 'Saffron City',
  slug: 'saffron-city',
  location: 'Rawat, Rawalpindi',
  summary: 'A planned residential and commercial community along GT Road near Rawat.',
  image: '/images/saffron-city.webp',
  imageAlt: 'Modern home with a landscaped front garden',
  illustrative: true,
};

export const projects: Project[] = [
  {
    name: 'Faisal Town',
    slug: 'faisal-town',
    location: 'Islamabad–Rawalpindi region',
    summary: 'Compare Phase I and Phase II, two residential developments from FaisalTown Group.',
    image: '/images/faisal-town.webp',
    imageAlt: 'Aerial view of Faisal Town Phase I',
  },
  faisalHills,
  parkViewCity,
  saffronCity,
  blueWorldCity,
];

interface ProjectSection {
  heading: string;
  body: string;
  links?: { label: string; href: string }[];
}

export interface ProjectLandmark {
  title: string;
  description: string;
  images: { src: string; alt: string }[];
  credit?: string;
}

interface RelatedProject {
  name: string;
  slug: string;
  type: string;
  overview: string;
  sections: ProjectSection[];
  landmarks?: ProjectLandmark[];
}

export interface ProjectPage extends Project {
  type: string;
  overview: string;
  heroImage?: { src: string; alt: string };
  sections: ProjectSection[];
  landmarks?: ProjectLandmark[];
  comparison: { heading: string; rows: { label: string; value: string }[] };
  map: { query: string; description: string; zoom: number };
  relatedProject?: RelatedProject;
}

const phaseOne = {
  name: 'Faisal Town Phase I',
  slug: 'faisal-town-phase-1',
  location: 'Fateh Jang Road, near Tarnol Interchange',
  type: 'Housing community',
  summary: 'Explore residential plots and the Faisal Heights apartments in Block C.',
  image: '/images/faisal-town.webp',
  imageAlt: 'Aerial view of Faisal Town Phase I',
  heroImage: {
    src: '/images/faisal town phase 1 gate.jpg',
    alt: 'Faisal Town Phase I entrance gate with twin towers and a patterned façade',
  },
  overview: 'Faisal Town Phase I is FaisalTown Group’s original community on Main Fateh Jang Road. The A, B and C blocks contain residential streets and commercial areas, with apartments at Faisal Heights in Block C and E-Park on Block A’s Main Boulevard.',
  sections: [
    { heading: 'Entrance gate and access', body: 'The twin towers mark the entrance from Fateh Jang Road (N-80), near the Tarnol Interchange on the M-1. From the gate, the boulevard leads into Block A toward its commercial centre. Islamabad International Airport and Srinagar Highway are accessible via the wider road network.' },
    { heading: 'Residential plots', body: 'Resale plots are listed across Blocks A, B and C. Compare frontage and depth alongside the advertised marla size. A corner or irregular plot may need a different house layout from a rectangular plot in the same size category.' },
    { heading: 'Shops and neighbourhood services', body: 'Main Markaz in Block A serves as a commercial centre, with shops and apartment buildings along the boulevard. When comparing blocks, check how far the property is from the shops and services you expect to use most.' },
    { heading: 'Resale and transfer', body: 'For an existing plot, match the number and dimensions to the layout plan. Ask the seller for the ownership documents and a statement of dues, then confirm possession and the process for transferring the plot.' },
  ],
  comparison: {
    heading: 'Phase I resale plot sizes',
    rows: [
      { label: '5 marla', value: '25 × 50 ft' },
      { label: '8 marla', value: '30 × 60 ft' },
      { label: '10 marla', value: '35 × 70 ft' },
      { label: '14 marla', value: '40 × 80 ft' },
      { label: '1 kanal', value: '50 × 90 ft' },
    ],
  },
  map: {
    query: '33.60817,72.87367',
    description: 'The pin shows the Phase I neighbourhood off Main Fateh Jang Road (N-80), near the M-1 Tarnol Interchange. For Faisal Heights, continue to Block C.',
    zoom: 15,
  },
  relatedProject: {
    name: 'Faisal Heights',
    slug: 'faisal-heights',
    type: 'Apartments in Block C',
    overview: 'Faisal Heights is a four-tower residential project in Block C of Faisal Town Phase I, near Srinagar Highway. Layouts range from studios to four-bedroom lofts.',
    sections: [
      { heading: 'Apartment layouts', body: 'The builder publishes studio, one-, two- and three-bedroom floor plans alongside larger four-bedroom layouts. Ask for the plan for the specific unit so you can compare its usable space, balcony and orientation.' },
      { heading: 'Shared amenities', body: 'The published plans include dedicated parking, a roof garden, a gym, a children’s play area and a prayer hall. Ask which amenities and parking spaces are included with your unit and how building maintenance will be charged.' },
      { heading: 'Published apartment sizes', body: 'The builder lists studios at 495–537 sq ft, two-bedroom apartments at 1,210–1,905 sq ft and three-bedroom apartments at 1,815–2,145 sq ft. Ask for the area breakdown for the unit you’re comparing.' },
    ],
  },
} satisfies ProjectPage;

const phaseTwo: ProjectPage = {
  name: 'Faisal Town Phase 2',
  slug: 'faisal-town-phase-2',
  location: 'Thalian and Chakri Road corridor',
  type: 'Planned housing community',
  summary: 'A planned development near the M-2 with residential sectors, a Model Block and an Overseas Enclave.',
  image: '/images/residential-plots.webp',
  imageAlt: '',
  illustrative: true,
  overview: 'Faisal Town Phase 2 is a planned development along the M-2 and Chakri Road corridor near Thalian. The developer’s layout separates residential sectors from major commercial districts and reserves sites for schools, mosques, parks and healthcare facilities.',
  landmarks: [
    {
      title: 'Planned Lake District',
      description: 'The Phase 2 master plan groups the Lake District and a golf club around a large water feature. FaisalTown Group’s rendering shows buildings and landscaped open spaces along the waterfront.',
      images: [{ src: '/images/phase-2-lake-district.webp', alt: 'Rendering of the proposed Lake District with a golf course, waterway and buildings' }],
      credit: 'Rendering by FaisalTown Group',
    },
  ],
  sections: [
    { heading: 'Sector O Model Block', body: 'Sector O is marketed as the Model Block. The layout includes numbered plots and space for local commerce. Use the block map to compare street widths, park access and the route from the main road.' },
    { heading: 'Overseas Enclave', body: 'The Overseas Enclave has its own layout, with residential streets and sites marked for parks, places of worship and education. Ask for the current layout and availability for the part of the enclave you’re considering.' },
    { heading: 'Commercial districts and access', body: 'The layout includes separate eastern and western commercial districts, as well as smaller commercial areas within sectors. Check the approach from the M-2 or Chakri Road for your sector and which access roads are open when you visit.' },
    { heading: 'Booking and development charges', body: 'Ask whether the offer assigns a plot number or is for a file awaiting allotment. Request a schedule showing the booking amount, instalments, development charges and possession terms for that sector.' },
  ],
  comparison: {
    heading: 'Compare Phase 2 sectors',
    rows: [
      { label: 'Sector O Model Block', value: 'Published residential dimensions range from 25 × 50 ft to 50 × 90 ft.' },
      { label: 'Overseas Enclave', value: 'Published residential categories include larger 1- and 2-kanal plots.' },
      { label: 'Sectors C and D', value: 'The layout shows numbered blocks and reserves space for schools, parks and a hospital.' },
      { label: 'Commercial District West', value: 'The Sector I plan marks sites for commercial buildings, apartments and shared parking.' },
    ],
  },
  map: {
    query: '33.53383,72.89702',
    description: 'The pin marks Thalian Toll Plaza near the M-2 interchange as a reference for Phase 2. Confirm the best entrance for your sector before travelling.',
    zoom: 14,
  },
};

const jewel = {
  name: 'Faisal Jewel',
  slug: 'faisal-jewel',
  location: 'Faisal Hills, near Taxila',
  type: 'Mixed-use high-rise',
  summary: 'Apartments, penthouses and commercial space in the Faisal Hills township near the Margalla foothills.',
  image: faisalHills.image,
  imageAlt: faisalHills.imageAlt,
  imageCaption: 'The Faisal Hills community',
  overview: 'Faisal Jewel is a high-rise by FaisalTown Group within Faisal Hills. It brings apartments, shops and offices together at an address close to GT Road. The wider township has residential plots and neighbourhood commercial areas.',
  sections: [
    { heading: 'Apartments and penthouses', body: 'The project’s published floor plans include one-, two- and three-bedroom apartments and several penthouse layouts. Compare the plan for your chosen unit, including the balcony, outlook and how much of the stated area is usable inside the home.' },
    { heading: 'Retail and offices', body: 'The developer markets commercial space for shops and offices within the project. For a commercial unit, check the floor location, visitor access, frontage and fit-out terms before comparing prices.' },
    { heading: 'Access from the twin cities', body: 'The project is near Taxila, with connections through GT Road and routes towards Margalla Avenue and the M-1. On a site visit, use the tower’s approach from the road you expect to take regularly.' },
    { heading: 'Parking and handover', body: 'Ask for the payment schedule for the exact floor and unit, any parking allocation, and the handover specifications. For an apartment, check the route from the parking level to your home and how building service charges will be calculated.' },
  ],
  comparison: {
    heading: 'Faisal Jewel property options',
    rows: [
      { label: 'Apartments', value: 'One-, two- and three-bedroom layouts. Compare the usable area, balcony and outlook for your chosen floor.' },
      { label: 'Penthouses', value: 'Multiple published layouts. Check the floor plan for the arrangement of living areas and outdoor space.' },
      { label: 'Shops', value: 'Retail units. Check frontage and the route customers would take from the public entrance.' },
      { label: 'Offices', value: 'Commercial units. Compare lift access, visitor parking and the space delivered for fit-out.' },
    ],
  },
  map: {
    query: 'Faisal Jewel, Faisal Hills, Taxila, Pakistan',
    description: 'Faisal Jewel is inside Faisal Hills near GT Road. If you’re visiting a plot in the wider township, use the block and street number for the final part of the trip.',
    zoom: 15,
  },
  relatedProject: {
    name: faisalHills.name,
    slug: faisalHills.slug,
    type: 'The surrounding township',
    overview: 'Faisal Hills sits along GT Road near Taxila, between the Margalla foothills and the road towards Wah. The township offers residential plots and commercial areas around the Faisal Jewel site.',
    landmarks: [
      {
        title: 'Jamia Masjid Hazrat Ali (R.A.)',
        description: 'The mosque opened in October 2026 at Block A Markaz near the Civic Centre. Its central dome and tall minarets distinguish it from the surrounding buildings. The prayer halls serve daily worship and large Friday congregations.',
        images: [{ src: '/images/jamia masjid hazrat ali.jpg', alt: 'Jamia Masjid Hazrat Ali at night, with its golden dome and illuminated façade' }],
      },
      {
        title: 'Faisal Hills Sports Arena',
        description: 'The arena sits at the foot of the rocky hillside. The facilities include padel and tennis courts, futsal and basketball courts, a running track, and an outdoor gym.',
        images: [
          { src: '/images/sports arena faisal hills.jpg', alt: 'Aerial view of the Sports Arena courts below the Faisal Hills cliffs' },
          { src: '/images/sports arena faisal hills 2.jpg', alt: 'Court-level views of the blue padel court and green tennis court' },
        ],
      },
      {
        title: 'Faisal Hills Arc Monument',
        description: 'The monument near the Faisal Hills entrance draws its design from the Arc de Triomphe in Paris. Its wide central arch and illuminated stonework make it a landmark on the way into Block A.',
        images: [{ src: '/images/arch monument faisal hills.jpg', alt: 'Faisal Hills Arc Monument illuminated in gold at dusk' }],
      },
    ],
    sections: [
      { heading: 'Township layout', body: 'The township includes Blocks A, B and C as well as Prime Block. Compare the exact block and street when shortlisting a plot, since routes to GT Road differ across the township.' },
      { heading: 'Schools, parks and local services', body: 'Roots International has a campus in the township. The layout includes areas for parks, mosques and commercial activity. Visit the street you’re considering to see which services are already accessible from it.' },
      { heading: 'Prime Block plot categories', body: 'The developer lists 25 × 50, 30 × 60, 35 × 70, 40 × 80 and 50 × 90 ft options. Ask whether your chosen category has a numbered plot and where it sits on the block plan.' },
    ],
  },
} satisfies ProjectPage;

const ePark: ProjectPage = {
  name: 'E-Park',
  slug: 'e-park',
  location: 'Main Boulevard, Block A, Faisal Town Phase I',
  type: 'Apartment development',
  summary: 'Two-, three- and four-bedroom apartments with shared spaces and a rooftop pool planned on Main Boulevard.',
  image: '/images/apartments.webp',
  imageAlt: '',
  illustrative: true,
  overview: 'E-Park is an apartment development at Plot 1 on Main Boulevard, opposite Main Markaz in Block A of Faisal Town Phase I. The residential floors are designed around two open-air atriums, with separate levels for parking and communal facilities.',
  landmarks: [
    {
      title: 'Planned rooftop terrace',
      description: 'The rooftop design brings a pool, garden path and dining space together above the residential floors. The terrace is planned as a shared space for residents.',
      images: [{ src: '/images/e-park-rooftop.webp', alt: 'Rendering of the E-Park rooftop swimming pool, landscaped path and dining pavilion at sunset' }],
      credit: 'Developer rendering',
    },
  ],
  sections: [
    { heading: 'Apartment layouts', body: 'The published plans show two-, three- and four-bedroom homes around the building’s atriums. Most layouts include a balcony. Ask to see how the specific unit is oriented and how much of the listed area is indoors.' },
    { heading: 'Resident spaces', body: 'Plans include a rooftop pool, a prayer space, an urban farm and a dedicated community floor. The building design also includes six lifts, standby power and water storage.' },
    { heading: 'Location', body: 'The building fronts Main Boulevard on the commercial side of Block A, near the main route to the M-1 interchange. Nearby shops in Main Markaz make it possible to check everyday services on the same visit.' },
    { heading: 'Instalments and unit premiums', body: 'The developer has advertised a 30% booking payment followed by 36 monthly instalments. Ask for a current written quote showing any separate documentation, corner or view charges for your chosen apartment.' },
  ],
  comparison: {
    heading: 'E-Park apartment sizes',
    rows: [
      { label: 'Two bedrooms', value: '917–1,640 sq ft across five published layouts' },
      { label: 'Three bedrooms', value: '2,074 or 2,647 sq ft across two published layouts' },
      { label: 'Four bedrooms', value: '3,040 sq ft in the published four-bedroom layout' },
    ],
  },
  map: {
    query: 'Faisal Town Main Markaz, Block A, Islamabad, Pakistan',
    description: 'The map shows Main Markaz in Block A. E-Park is opposite the Markaz at Plot 1 on Main Boulevard, Faisal Town Phase I.',
    zoom: 16,
  },
};

const blueWorld: ProjectPage = {
  ...blueWorldCity,
  type: 'Planned housing community',
  overview: 'Blue World City is a development in the Chakri area, about 8 km from the M-2 interchange according to the developer. Its plans group residential and commercial plots into separately marketed blocks, including General Block, Overseas Block, Sports Valley and Waterfront District.',
  landmarks: [
    {
      title: 'Blue World Water Theme Park',
      description: 'The developer is building this attraction on hilly ground within Blue World City. Its plans include water slides, splash zones and a children’s play area. The site photo shows towers and rides during construction.',
      images: [{ src: '/images/blue-world-water-theme-park.webp', alt: 'Water Theme Park under construction, with slide towers and ride structures on the hillside' }],
      credit: 'Development photo by Blue World City',
    },
  ],
  sections: [
    { heading: 'Grand Entrance Gate', body: 'The development’s photographed entrance has blue-domed towers and a landscaped median where the boulevard meets Chakri Road. The gate is a useful reference point when checking routes to individual blocks.' },
    { heading: 'General and Overseas blocks', body: 'General Block is marketed with residential and commercial plots and a 5-marla villa option. Overseas Block has a separate layout and is marketed to overseas Pakistanis, with parks and community services in the developer’s plans.' },
    { heading: 'Sports Valley', body: 'The developer markets 5-, 8- and 10-marla and 1-kanal residential plot files in this district. Its published plans include a cricket stadium and recreation courts. Ask for the exact street and plot allocation when reviewing an offer.' },
    { heading: 'Waterfront District', body: 'This district is planned around water features and leisure areas. The developer’s concept includes lakeside spaces, shops and recreation facilities. Check which roads and services are already in place near the plot you’re researching.' },
    {
      heading: 'Approval and documentation',
      body: 'The Rawalpindi Development Authority issued a notice in 2018 stating that it had not approved Blue World City. Before making any payment, verify the current approval for the exact block and land parcel with the relevant authority.',
      links: [
        { label: 'RDA approved schemes register', href: 'https://rda.gop.pk/ahs/' },
        { label: 'RDA illegal schemes register', href: 'https://rda.gop.pk/ihs/' },
      ],
    },
  ],
  comparison: {
    heading: 'Other Blue World City developments',
    rows: [
      { label: 'Awami Block', value: 'Marketed as a residential block with neighbourhood parks and green space in its plans.' },
      { label: 'Orbital Apartments', value: 'The developer’s apartment and penthouse concept, with an indoor pool and fitness facilities in the plans.' },
      { label: 'Blue Hills Country Farms', value: 'A farm housing concept along Chakri Road. Check the permitted use for the specific parcel.' },
    ],
  },
  map: {
    query: '33.36457,72.84301',
    description: 'The pin marks the Blue World City site along Chakri Road. General Block, Sports Valley and other districts cover separate areas, so confirm the approach for the block you intend to see.',
    zoom: 14,
  },
};

export const projectPages: ProjectPage[] = [phaseOne, phaseTwo, jewel, ePark, blueWorld];
export const projectDirectory = [...projectPages, parkViewCity, saffronCity];

export const projectPageHref = (slug: string) => `/projects/${slug}/`;
export const projectInquiryHref = (slug: string) => `/contact/?project=${slug}#inquiry`;

const projectMenuLink = ({ name, slug }: ProjectPage, related?: RelatedProject) => ({
  label: related?.name ?? name,
  href: projectPageHref(slug) + (related ? `#${related.slug}` : ''),
});

export const projectNavigation = [
  projectMenuLink(phaseOne),
  projectMenuLink(phaseTwo),
  projectMenuLink(phaseOne, phaseOne.relatedProject),
  projectMenuLink(jewel, jewel.relatedProject),
  projectMenuLink(jewel),
  projectMenuLink(ePark),
  projectMenuLink(blueWorld),
];

export const inquiryProjects = [
  ...projectPages.flatMap(({ name, slug, relatedProject }) =>
    relatedProject ? [{ name, slug }, { name: relatedProject.name, slug: relatedProject.slug }] : [{ name, slug }],
  ),
  projects[0],
  parkViewCity,
  saffronCity,
];
