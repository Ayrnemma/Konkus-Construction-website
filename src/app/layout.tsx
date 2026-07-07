import type { Metadata } from 'next';
import '../styles/globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FloatingButtons } from '@/components/layout/FloatingButtons';
import { COMPANY } from '@/lib/constants';

export const metadata: Metadata = {
  title: {
    default: `${COMPANY.name} | ${COMPANY.tagline}`,
    template: `%s | ${COMPANY.name}`,
  },
  description:
    'Serving homeowners throughout Downriver Michigan with dependable construction services, quality workmanship, and honest communication from start to finish. Kitchen remodeling, bathroom renovation, flooring, painting, and more.',
  keywords: [
    'construction Downriver Michigan',
    'home remodeling Wyandotte',
    'kitchen remodel Southgate',
    'bathroom renovation Trenton',
    'flooring installation Taylor',
    'interior painting Allen Park',
    'basement finishing Woodhaven',
    'general contractor Downriver',
    'home repair Riverview',
    'drywall installation Michigan',
  ],
  authors: [{ name: COMPANY.name }],
  creator: COMPANY.name,
  publisher: COMPANY.name,
  formatDetection: { telephone: false },
  metadataBase: new URL(COMPANY.url),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: COMPANY.url,
    siteName: COMPANY.name,
    title: `${COMPANY.name} | Honest Craftsmanship. Built to Last.`,
    description:
      'Downriver Michigan\'s trusted family-owned construction company. Quality workmanship, honest pricing, and reliable communication on every project.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${COMPANY.name} - Honest Craftsmanship Built to Last`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${COMPANY.name} | Honest Craftsmanship. Built to Last.`,
    description: 'Downriver Michigan\'s trusted family-owned construction company.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png' }],
  },
  manifest: '/site.webmanifest',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': COMPANY.url,
  name: COMPANY.name,
  description:
    'Family-owned construction company serving Downriver Michigan with kitchen remodeling, bathroom renovation, flooring installation, painting, drywall, basement finishing, and general home repairs.',
  url: COMPANY.url,
  telephone: COMPANY.phone,
  email: COMPANY.email,
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'MI',
    addressCountry: 'US',
    addressLocality: 'Downriver Michigan',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 42.2311,
    longitude: -83.1474,
  },
  areaServed: [
    'Southgate', 'Wyandotte', 'Trenton', 'Taylor', 'Allen Park',
    'Woodhaven', 'Brownstown', 'Riverview', 'Flat Rock', 'Lincoln Park',
    'Dearborn', 'Dearborn Heights', 'Romulus', 'Gibraltar', 'Rockwood',
  ],
  priceRange: '$$',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '08:00',
      closes: '14:00',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Construction & Remodeling Services',
    itemListElement: [
      'Kitchen Remodeling', 'Bathroom Remodeling', 'Flooring Installation',
      'Interior Painting', 'Exterior Painting', 'Drywall Repair & Installation',
      'Trim & Finish Carpentry', 'Door & Window Installation',
      'Basement Finishing', 'General Home Repairs', 'Seasonal Home Maintenance',
    ].map((service) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: service } })),
  },
  sameAs: [],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
