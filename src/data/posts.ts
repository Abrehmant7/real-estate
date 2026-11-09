export const posts = [
  {
    slug: 'site-visit-checklist',
    category: 'Site visits',
    title: 'What to look for on a property site visit',
    description: 'Use the visit to check the route, the exact location, and what’s already on the ground.',
    image: '/images/hero-tree-lined-neighborhood.webp',
    sections: [
      {
        heading: 'Try the route you’d actually use',
        body: 'Drive in from the area you’ll travel from most often. Note the turns, road conditions, and any stretches that feel awkward at busy times. If the commute is a deciding factor, try it at the hour you’d normally leave.',
      },
      {
        heading: 'Find the exact plot or unit',
        body: 'Ask to see where the property sits within the block. Look at the street, slope, light, and nearby construction. Take a few photos from fixed points so you can compare the site with other options later.',
      },
      {
        heading: 'Separate what you see from what’s planned',
        body: 'Make two lists for facilities you saw during the visit and facilities mentioned in the plans. Follow up on anything that matters to your decision, such as road access, utility connections, or when a particular block will be ready.',
      },
    ],
  },
  {
    slug: 'compare-two-developments',
    category: 'Project research',
    title: 'How to compare two developments side by side',
    description: 'Start with the same questions for each project so the differences are easy to see.',
    image: '/images/hero-hillside-outlook.webp',
    sections: [
      {
        heading: 'Write down your priorities',
        body: 'Choose the three things that matter most for your plans. A buyer who intends to move in soon might put access and readiness first. Someone looking for a plot to build on may care more about dimensions, the slope, and when work can begin.',
      },
      {
        heading: 'Compare like with like',
        body: 'Record the block, plot size or unit type, and payment schedule for each option. Ask for a breakdown of what’s included and which charges are listed separately. This makes it easier to understand why two headline prices differ.',
      },
      {
        heading: 'Keep open questions visible',
        body: 'Leave a blank beside any detail you still need to confirm. Bring those questions to a visit or follow-up call, then update the comparison before deciding which option to pursue.',
      },
    ],
  },
  {
    slug: 'prepare-a-project-inquiry',
    category: 'Getting started',
    title: 'What to include in a project inquiry',
    description: 'A few details about your plans can make the first conversation more focused.',
    image: '/images/hero-garden-apartments.webp',
    sections: [
      {
        heading: 'Describe the property you have in mind',
        body: 'Say whether you’re looking for a plot, a home, or an apartment, and mention any areas you prefer. If a particular project or block caught your eye, include its name so the conversation starts in the right place.',
      },
      {
        heading: 'Share a budget range and timeframe',
        body: 'An approximate range is enough for a first inquiry. Mention whether you’re researching, planning a site visit, or hoping to choose soon. Your timeframe helps shape which questions to cover first.',
      },
      {
        heading: 'Ask the question you want answered first',
        body: 'If you mainly want to understand access, plot sizes, payment schedules, or how to arrange a visit, say so. One specific question gives the team a clear starting point for its reply.',
      },
    ],
  },
];

export type Post = (typeof posts)[number];
