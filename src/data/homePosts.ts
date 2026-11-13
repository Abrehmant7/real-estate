import type { Post } from './posts';

export const homePosts: Post[] = [
  {
    slug: 'islamabad-plots-vs-apartments-2026',
    category: 'Market trends',
    title: 'Plots or apartments in Islamabad in 2026?',
    description: 'Use recent listing data to compare the two markets, then narrow your search to one area and size range.',
    image: '/images/hero-garden-apartments.webp',
    sections: [
      { heading: 'Start with the listing data', body: 'Zameen’s September 2026 Islamabad indexes put the average listed flat at PKR 2.81 crore and the average listed residential plot at PKR 3.05 crore. These are citywide asking prices. The two series cover different properties and locations, so the difference cannot price a particular unit or plot.' },
      { heading: 'Compare the same neighbourhood', body: 'Pick an area and compare listings by size, condition, and access. With an apartment, ask about usable floor area, parking, building maintenance, and when you could move in. With a plot, check its dimensions, site levels, utility access, and whether you can take possession.' },
      { heading: 'Account for the time until you can use it', body: 'A completed apartment can suit someone who needs a place to live soon. A plot gives you control over what you build, and its budget needs room for construction and the time it takes. Work out which option fits your plans before comparing the numbers.' },
    ],
    sources: [
      { label: 'Zameen Islamabad flats price index', href: 'https://www.zameen.com/index/buy/flats/islamabad-3/' },
      { label: 'Zameen Islamabad residential plot price index', href: 'https://www.zameen.com/index/buy/residential_plots/islamabad-3/' },
    ],
  },
  {
    slug: 'check-housing-scheme-noc-islamabad-rawalpindi',
    category: 'Buyer checks',
    title: 'How to check a housing scheme’s NOC',
    description: 'Find the right authority and check the specific phase or block before paying a booking amount.',
    image: '/images/hero-hillside-outlook.webp',
    sections: [
      { heading: 'Find the authority for the location', body: 'Start with the scheme’s full name, phase, and location. Check the Capital Development Authority’s register for schemes in its jurisdiction and the Rawalpindi Development Authority’s records where applicable. Ask the relevant authority which register applies if the location is unclear.' },
      { heading: 'Read the approval entries separately', body: 'CDA records the layout plan and development No Objection Certificate separately. Look for both entries, check the current status, and confirm the boundaries covered by the documents. A phase or extension can have a different record from the original scheme.' },
      { heading: 'Confirm the exact property', body: 'Cross-check the block or plot on the relevant plan and verify the seller’s records with the authority or developer. If an approval document or boundary is unclear, request written clarification before paying.' },
    ],
    sources: [
      { label: 'CDA housing schemes register', href: 'https://www.cda.gov.pk/housing-schemes' },
      { label: 'RDA private housing scheme records', href: 'https://rda.gop.pk/private-housing-schemes' },
    ],
  },
  {
    slug: 'apna-ghar-home-finance-2026',
    category: 'Home finance',
    title: 'Apna Ghar in 2026 and what to ask your bank',
    description: 'Pakistan expanded its affordable housing programme in 2026. Here’s what to confirm before choosing a property.',
    image: '/images/homes-villas.webp',
    sections: [
      { heading: 'Check the latest scheme terms', body: 'In June 2026, the State Bank of Pakistan announced additional channels for the Wazir-e-Azam Apna Ghar programme. The circular includes a route for eligible overseas Pakistanis holding a NICOP or POC and allows participating institutions to finance qualifying developer-led projects.' },
      { heading: 'Ask about the property and your application', body: 'Give the bank the property type, size, location, and intended use. Ask which documents it needs, how it assesses eligibility, and whether the unit or development can be considered under the programme. Get the bank’s response before relying on financing for a booking.' },
      { heading: 'Request the full payment schedule', body: 'Ask for the down payment, monthly instalment, any fees, and how payments may change over the loan term. Put those figures alongside any developer booking deadlines so you can see when each payment would be due.' },
    ],
    sources: [{ label: 'State Bank of Pakistan June 2026 Apna Ghar circular', href: 'https://www.sbp.org.pk/circulars/shsfd-circular-letter-no-03-of-2026' }],
  },
  {
    slug: 'property-buying-from-overseas-pakistan',
    category: 'Overseas buyers',
    title: 'Buying property in Pakistan while living abroad',
    description: 'Plan how you’ll view the property, verify the paperwork, and handle payment or transfer from overseas.',
    image: '/images/hero-margalla-residence.webp',
    sections: [
      { heading: 'Verify what you’re seeing remotely', body: 'Ask for a recent walkthrough, the exact property location, and the documents that identify the unit or plot. Have someone you trust visit in person when possible and confirm what has been completed on the ground.' },
      { heading: 'Talk to a participating bank', body: 'State Bank’s Roshan Apna Ghar initiative describes routes for eligible non-resident buyers to purchase using their own funds or bank financing. Ask the bank which options apply to the property and whether it needs a valuation, a nominee, or a power of attorney for the chosen route.' },
      { heading: 'Agree on the handover of paperwork', body: 'Before paying, establish who will review the documents, sign where required, receive official receipts, and follow up on transfer. Keep written copies of those arrangements and of the property and payment details.' },
    ],
    sources: [{ label: 'State Bank of Pakistan Roshan Apna Ghar guidance', href: 'https://www.sbp.org.pk/our-operations/roshan-digital-accounts/roshan-apna-ghar' }],
  },
  {
    slug: 'pakistan-property-transfer-costs-2026-27',
    category: 'Taxes and fees',
    title: 'Budgeting for a property transfer in 2026–27',
    description: 'Build a written estimate that covers the purchase price, transfer taxes, registration, and project charges.',
    image: '/images/islamabad-skyline.webp',
    sections: [
      { heading: 'Ask for an itemised estimate', body: 'Start with the agreed purchase price and list each amount payable before or at transfer. Ask which costs are federal taxes, which are local or provincial charges, and which are collected by the developer or society.' },
      { heading: 'Use the current FBR rate card', body: 'The Federal Board of Revenue publishes a tax year 2027 withholding rate card updated for the Finance Act 2026. Ask a tax professional to confirm the applicable rate, tax base, and responsibility for payment for your particular transaction.' },
      { heading: 'Check what will be payable later', body: 'Ask about outstanding dues, maintenance charges, or amounts payable at possession. Record who is responsible for each charge and when it comes due. Keep the estimate with the written terms and revise it when you have confirmed amounts.' },
    ],
    sources: [
      { label: 'FBR withholding tax rate cards', href: 'https://www.fbr.gov.pk/withholding-taxes-rate-card/174298/174301' },
      { label: 'FBR Finance Act 2026', href: 'https://fbr.gov.pk/Budget2026-27/FinanceAct.html' },
    ],
  },
  {
    slug: 'compare-property-instalment-plans-pakistan',
    category: 'Payment plans',
    title: 'What to check in a property instalment plan',
    description: 'Compare the total cost, the due dates, and the conditions for possession before reserving a unit or plot.',
    image: '/images/faisal-town.webp',
    sections: [
      { heading: 'Request the developer’s current schedule', body: 'Check that the schedule matches the specific phase, block, and size you’re considering. Developers such as FaisalTown Group publish resources for individual projects. Ask the developer to confirm the version and terms for your booking in writing.' },
      { heading: 'Put every payment on one timeline', body: 'Record the booking amount, confirmation payment, regular instalments, and any larger amounts due at allocation or possession. Identify charges excluded from the quoted price, then compare the total and the timing across options.' },
      { heading: 'Ask what happens if plans change', body: 'Read the terms for late payments, cancellation, transfer, and possession. Ask when payments become non-refundable and how the developer confirms receipt. Keep the written schedule and receipts together as payments are made.' },
    ],
    sources: [{ label: 'FaisalTown Group project resources', href: 'https://faisaltowngroup.com/downloads/' }],
  },
];
