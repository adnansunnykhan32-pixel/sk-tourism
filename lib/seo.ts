import { BUSINESS_INFO, SERVICES, FAQS } from "./constants";

export function generateJsonLd() {
  const baseUrl = "https://sktourismdubai.com";

  // 1. TravelAgency & LocalBusiness Schema
  const travelAgencySchema = {
    "@context": "https://schema.org",
    "@type": ["TravelAgency", "LocalBusiness"],
    "@id": `${baseUrl}/#organization`,
    name: BUSINESS_INFO.name,
    legalName: BUSINESS_INFO.legalName,
    description: BUSINESS_INFO.tagline,
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    image: `${baseUrl}/logo.png`,
    telephone: BUSINESS_INFO.phonePrimary,
    email: BUSINESS_INFO.email,
    priceRange: "$$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_INFO.address,
      addressLocality: "Dubai",
      addressRegion: "Dubai",
      addressCountry: "AE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "25.1972",
      longitude: "55.2744",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    sameAs: [
      "https://www.instagram.com/sktourismdubai",
      "https://www.facebook.com/sktourismdubai",
      "https://www.linkedin.com/company/sktourismdubai",
    ],
  };

  // 2. Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#corp`,
    name: BUSINESS_INFO.name,
    legalName: BUSINESS_INFO.legalName,
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: BUSINESS_INFO.phonePrimary,
      contactType: "customer service",
      areaServed: "AE",
      availableLanguage: ["English", "Arabic", "Russian", "French"],
    },
  };

  // 3. BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${baseUrl}/#services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Fleet",
        item: `${baseUrl}/#fleet`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Booking Desk",
        item: `${baseUrl}/#booking`,
      },
    ],
  };

  // 4. FAQPage Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  // 5. Individual Service Schemas
  const serviceSchemas = SERVICES.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    provider: {
      "@type": "TravelAgency",
      name: BUSINESS_INFO.name,
      url: baseUrl,
    },
    areaServed: {
      "@type": "City",
      name: "Dubai",
    },
    description: service.fullDesc,
    offers: {
      "@type": "Offer",
      price: service.startingPriceUSD,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  }));

  return [
    travelAgencySchema,
    organizationSchema,
    breadcrumbSchema,
    faqSchema,
    ...serviceSchemas,
  ];
}
