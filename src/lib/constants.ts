export const COMPANY = {
  name: 'Konkus Construction',
  tagline: 'Honest Craftsmanship. Built to Last.',
  phone: '734-231-5910',
  phoneHref: 'tel:7342315910',
  email: 'Konkus.Construction@yahoo.com',
  emailHref: 'mailto:Konkus.Construction@yahoo.com',
  address: 'Downriver Michigan',
  url: 'https://konkusconstruction.com',
  serviceArea: 'Downriver Michigan',
  facebook: 'https://facebook.com/',    // update with real URL
  instagram: 'https://instagram.com/',  // update with real URL
};

export const NAV_LINKS = [
  { label: 'Home',     href: '/' },
  { label: 'About',    href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery',  href: '/gallery' },
  { label: 'Contact',  href: '/contact' },
];

/** Hero background images — rotate every 5 s */
export const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=85',  // dark luxury kitchen
  'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1920&q=85',  // luxury bathroom
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=85', // finished basement
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=85', // modern living / flooring
  'https://images.unsplash.com/photo-1556228720-da4c0bd8e94a?w=1920&q=85',  // trim & millwork
];

export const SERVICES = [
  {
    id: 'kitchen',
    title: 'Kitchen Remodeling',
    description:
      'Full kitchen transformations — custom cabinetry, countertops, layout redesigns, and premium finishes that turn your kitchen into the heart of your home.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=85',
    panelImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80',
    category: 'Interior',
    icon: 'kitchen',
  },
  {
    id: 'bathroom',
    title: 'Bathroom Remodeling',
    description:
      'Spa-inspired bathroom renovations with custom tile work, modern fixtures, walk-in showers, and luxurious finishes tailored to your style and budget.',
    image: '/images/bathroom/bathroom-vanity-front.jpg',
    panelImage: '/images/bathroom/bathroom-vanity-front.jpg',
    category: 'Interior',
    icon: 'bathroom',
  },
  {
    id: 'basement',
    title: 'Finished Basements',
    description:
      'Transform your unfinished basement into a functional living space — home theater, gym, office, or additional bedroom suite, framed and finished to code.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=85',
    panelImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80',
    category: 'Interior',
    icon: 'basement',
  },
  {
    id: 'flooring',
    title: 'Flooring',
    description:
      'Hardwood, luxury vinyl plank, tile, and carpet installation with expert subfloor prep for a flawless, long-lasting result in any room of the house.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85',
    panelImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
    category: 'Interior',
    icon: 'flooring',
  },
  {
    id: 'painting',
    title: 'Interior Painting',
    description:
      'Clean, precise interior painting with premium materials, thorough prep work, and crisp finish lines that make any room feel like new.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=900&q=85',
    panelImage: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&q=80',
    category: 'Interior',
    icon: 'painting',
  },
  {
    id: 'trim',
    title: 'Trim & Finish Carpentry',
    description:
      'Crown molding, baseboards, door and window casings, built-ins, and wainscoting — precision carpentry that elevates every room it touches.',
    image: 'https://images.unsplash.com/photo-1556228720-da4c0bd8e94a?w=900&q=85',
    panelImage: 'https://images.unsplash.com/photo-1556228720-da4c0bd8e94a?w=400&q=80',
    category: 'Interior',
    icon: 'trim',
  },
  {
    id: 'drywall',
    title: 'Drywall Repair',
    description:
      'Seamless drywall installation, patching, and finishing for any size project — from punch-list repairs to full room build-outs, smooth and paint-ready every time.',
    image: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?w=900&q=85',
    panelImage: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?w=400&q=80',
    category: 'Interior',
    icon: 'drywall',
  },
  {
    id: 'maintenance',
    title: 'Seasonal Maintenance',
    description:
      'Year-round home maintenance that keeps your property in peak condition — gutter cleaning, caulking, pressure washing, and exterior upkeep through every season.',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=900&q=85',
    panelImage: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&q=80',
    category: 'Exterior',
    icon: 'maintenance',
  },
  {
    id: 'repairs',
    title: 'General Home Repairs',
    description:
      'From small fixes to larger repair projects — if something\'s broken, worn, or needs attention, we\'ll get it back in order quickly and correctly.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=85',
    panelImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&q=80',
    category: 'General',
    icon: 'repairs',
  },
  {
    id: 'custom',
    title: 'Custom Projects',
    description:
      'Have something unique in mind? We take on custom builds and special projects that don\'t fit a standard category. Just describe what you\'re envisioning — we\'ll make it happen.',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&q=85',
    panelImage: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&q=80',
    category: 'Custom',
    icon: 'custom',
  },
];

export const WHY_CHOOSE_US = [
  {
    title: 'Licensed & Insured',
    description: 'Fully licensed and insured for your complete protection on every project.',
  },
  {
    title: 'Free Estimates',
    description: 'Detailed, no-obligation written estimates before any work begins.',
  },
  {
    title: 'Honest Pricing',
    description: 'The number we quote is the number you pay. No surprises, ever.',
  },
  {
    title: 'Quality Materials',
    description: 'We source premium materials built to stand up to Michigan\'s seasons.',
  },
  {
    title: 'Reliable Communication',
    description: 'We answer our phones and keep you informed throughout your project.',
  },
  {
    title: 'Local & Family-Owned',
    description: 'We\'re your neighbors — invested in the quality of our community.',
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Jennifer M.',
    location: 'Southgate, MI',
    project: 'Kitchen Remodel',
    rating: 5,
    text: 'Konkus Construction completely transformed our outdated kitchen. The team was professional, on time, and communicated throughout every step. I never had to wonder what was happening — they kept me informed from day one.',
    avatar: 'J',
  },
  {
    id: 2,
    name: 'Mike & Sarah T.',
    location: 'Wyandotte, MI',
    project: 'Bathroom Renovation',
    rating: 5,
    text: 'We\'ve hired contractors before and always had a bad experience. Konkus was completely different. They showed up when they said they would, the work was impeccable, and the price was exactly what they quoted.',
    avatar: 'M',
  },
  {
    id: 3,
    name: 'David K.',
    location: 'Trenton, MI',
    project: 'Basement Finishing',
    rating: 5,
    text: 'Our basement was an eyesore for years. In just a few weeks, Konkus turned it into a beautiful space for our family. The attention to detail in the trim work and finishing is remarkable. They truly take pride in their craft.',
    avatar: 'D',
  },
  {
    id: 4,
    name: 'Patricia L.',
    location: 'Taylor, MI',
    project: 'Interior Painting',
    rating: 5,
    text: 'The Konkus team was incredibly respectful of my home — they protected all my furniture, cleaned up every day, and the paint job is flawless. Worth every penny.',
    avatar: 'P',
  },
  {
    id: 5,
    name: 'Robert H.',
    location: 'Allen Park, MI',
    project: 'Flooring Installation',
    rating: 5,
    text: 'Had hardwood flooring installed throughout the main level. The results are gorgeous. The team worked efficiently, stayed within the timeline, and the finished floors are exactly what I envisioned.',
    avatar: 'R',
  },
  {
    id: 6,
    name: 'Angela N.',
    location: 'Woodhaven, MI',
    project: 'General Home Repairs',
    rating: 5,
    text: 'Called Konkus for several small repairs. They came out quickly, fixed everything with quality workmanship, and were incredibly fair on price. I now use them for all my home maintenance needs.',
    avatar: 'A',
  },
];

export const SERVICE_AREAS = [
  'Southgate', 'Wyandotte', 'Trenton', 'Taylor', 'Allen Park',
  'Woodhaven', 'Brownstown', 'Riverview', 'Flat Rock', 'Lincoln Park',
  'Dearborn', 'Dearborn Heights', 'Romulus', 'Gibraltar', 'Rockwood',
];

export const GALLERY_FILTERS = [
  'All', 'Kitchen', 'Bathroom', 'Basement', 'Flooring', 'Painting', 'Trim',
];

export const GALLERY_IMAGES = [
  { id: 1,  category: 'Kitchen',   src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',  alt: 'Dark luxury kitchen remodel',        height: 'tall'   },
  { id: 2,  category: 'Bathroom',  src: '/images/bathroom/bathroom-vanity-front.jpg',  alt: 'Bathroom remodel with wood vanity, round mirror, and black fixtures — Downriver Michigan',  height: 'short'  },
  { id: 3,  category: 'Flooring',  src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',  alt: 'Hardwood flooring installation',     height: 'medium' },
  { id: 4,  category: 'Painting',  src: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80', alt: 'Interior painting project',         height: 'tall'   },
  { id: 5,  category: 'Kitchen',   src: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&q=80',  alt: 'Kitchen cabinet installation',       height: 'medium' },
  { id: 6,  category: 'Trim',      src: 'https://images.unsplash.com/photo-1556228720-da4c0bd8e94a?w=800&q=80',  alt: 'Trim and finish carpentry',          height: 'short'  },
  { id: 7,  category: 'Basement',  src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80', alt: 'Finished basement',                height: 'medium' },
  { id: 8,  category: 'Bathroom',  src: '/images/bathroom/bathroom-shower-front.jpg', alt: 'Tub and shower remodel with light gray subway tile, black hexagon niche, and linen curtains — Downriver Michigan',  height: 'tall'   },
  { id: 9,  category: 'Painting',  src: 'https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=800&q=80',  alt: 'Drywall and painting work',          height: 'short'  },
  { id: 10, category: 'Flooring',  src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80', alt: 'Modern living room flooring',      height: 'medium' },
  { id: 11, category: 'Kitchen',   src: 'https://images.unsplash.com/photo-1556909048-f473395fd891?w=800&q=80',  alt: 'White kitchen renovation',           height: 'short'  },
  { id: 12, category: 'Trim',      src: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&q=80', alt: 'Custom built-in carpentry',        height: 'tall'   },
  { id: 13, category: 'Bathroom',  src: '/images/bathroom/bathroom-shower-angle.jpg', alt: 'Bathroom renovation with soaking tub, subway tile, black matte hardware, and large hexagon floor tile — Downriver Michigan',  height: 'medium' },
  { id: 14, category: 'Basement',  src: 'https://images.unsplash.com/photo-1565183928294-7063f23ce0f8?w=800&q=80', alt: 'Basement entertainment area',      height: 'short'  },
  { id: 15, category: 'Flooring',  src: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&q=80', alt: 'Luxury vinyl plank flooring',      height: 'medium' },
  { id: 16, category: 'Kitchen',   src: 'https://images.unsplash.com/photo-1556911220-bda9ca8d7fe9?w=800&q=80',  alt: 'Modern dark kitchen',               height: 'tall'   },
  { id: 17, category: 'Painting',  src: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?w=800&q=80', alt: 'Interior drywall finishing',       height: 'short'  },
  { id: 18, category: 'Bathroom',  src: '/images/bathroom/bathroom-vanity-angle.jpg', alt: 'Custom bathroom vanity with white quartz countertop, black faucet, and black hexagon floor tile — Downriver Michigan',  height: 'tall'   },
  { id: 19, category: 'Kitchen',   src: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80',  alt: 'Kitchen countertop installation',    height: 'medium' },
  { id: 20, category: 'Trim',      src: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&q=80',  alt: 'Crown molding installation',         height: 'short'  },
];

export const PROJECT_TYPES = [
  'Kitchen Remodeling',
  'Bathroom Remodeling',
  'Finished Basements',
  'Flooring',
  'Interior Painting',
  'Trim & Finish Carpentry',
  'Drywall Repair',
  'Seasonal Maintenance',
  'General Home Repairs',
  'Custom Projects',
  'Other',
];

export const BUDGET_RANGES = [
  'Under $1,000',
  '$1,000 – $5,000',
  '$5,000 – $10,000',
  '$10,000 – $25,000',
  '$25,000 – $50,000',
  '$50,000+',
  'Not sure yet',
];
