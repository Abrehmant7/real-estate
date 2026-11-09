export const projects = [
  {
    name: 'Faisal Town',
    slug: 'faisal-town',
    location: 'Islamabad–Rawalpindi region',
    summary: 'Compare Phase I and Phase II, two residential developments from FaisalTown Group.',
    image: '/images/faisal-town.webp',
    imageAlt: 'Aerial view of Faisal Town Phase I',
  },
  {
    name: 'Faisal Hills',
    slug: 'faisal-hills',
    location: 'Margalla foothills',
    summary: 'A residential township from FaisalTown Group near the Margalla Hills.',
    image: '/images/faisal-hills.webp',
    imageAlt: 'Roots International campus in Faisal Hills at dusk',
  },
  {
    name: 'Park View City',
    slug: 'park-view-city',
    location: 'Zone IV, Islamabad',
    summary: 'A housing scheme in Islamabad’s Zone IV. Ask us about the location and which blocks to compare.',
    image: '/images/park-view-city.webp',
    imageAlt: 'Landscaped plaza with domed pavilions in Park View City',
  },
  {
    name: 'Saffron City',
    slug: 'saffron-city',
    location: 'Rawat, Rawalpindi',
    summary: 'A planned residential and commercial community along GT Road near Rawat.',
    image: '/images/saffron-city.webp',
    imageAlt: 'Modern home with a landscaped front garden',
    illustrative: true,
  },
  {
    name: 'Blue World City',
    slug: 'blue-world-city',
    location: 'Chakri, Rawalpindi',
    summary: 'A development off Chakri Interchange on the Lahore–Islamabad Motorway.',
    image: '/images/blue-world-city.webp',
    imageAlt: 'Aerial view of the Grand Entrance Gate at Blue World City',
  },
];

export type Project = (typeof projects)[number];
