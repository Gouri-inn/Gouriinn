// SEO Configuration for StayLuxe Hotel Booking System

export const seoConfig = {
  // Site-wide SEO settings
  site: {
    name: 'Gouri Inn',
    url: 'https://gouriinn.com', // Ensure this is the primary domain
    description: 'Gouri Inn offers premium hotel and lawn bookings with exceptional hospitality. Book your stay, events, and special occasions with us.',
    keywords: 'Gouri Inn, hotel booking, lawn booking, event venue, premium hotel, hospitality, luxury stay, rooms, events, special occasions',
    author: 'Gouri Inn',
    language: 'en',
    region: 'IN',
    currency: 'INR',
    phone: '+91-9876543210', // Placeholder, replace with actual phone number
    email: 'info@gouriinn.com', // Placeholder, replace with actual email
    address: {
      street: 'Your Street Address', // Placeholder, replace with actual address
      city: 'Your City', // Placeholder, replace with actual city
      state: 'Your State', // Placeholder, replace with actual state
      postalCode: 'Your Postal Code', // Placeholder, replace with actual postal code
      country: 'IN'
    },
    coordinates: {
      latitude: 'YOUR_LATITUDE', // Placeholder, replace with actual latitude
      longitude: 'YOUR_LONGITUDE' // Placeholder, replace with actual longitude
    },
    social: {
      facebook: 'https://facebook.com/gouriinn', // Placeholder, replace with actual social links
      instagram: 'https://instagram.com/gouriinn',
      linkedin: 'https://linkedin.com/company/gouriinn',
      twitter: 'https://twitter.com/gouriinn'
    }
  },

  // Page-specific SEO configurations
  pages: {
    home: {
      title: 'Gouri Inn | Premium Hotel & Lawn Bookings',
      description: 'Gouri Inn offers premium hotel and lawn bookings with exceptional hospitality. Book your stay, events, and special occasions with us. Best rates guaranteed.',
      keywords: 'Gouri Inn, hotel booking, lawn booking, event venue, premium hotel, hospitality, luxury stay, rooms, events, special occasions',
      image: '/RoomImages/suite.jpg',
      url: '/',
      priority: 1.0,
      changefreq: 'weekly'
    },

    rooms: {
      title: 'Gouri Inn Rooms & Suites | Deluxe, Executive, Family',
      description: 'Explore our premium accommodations including Deluxe Rooms, Executive Suites, and Family Suites. Each room is designed for ultimate comfort and luxury at Gouri Inn.',
      keywords: 'Gouri Inn rooms, hotel rooms, executive suites, family suites, hotel accommodations, hotel stay, deluxe room',
      image: '/RoomImages/deluxe.jpg',
      url: '/Rooms',
      priority: 0.9,
      changefreq: 'weekly'
    },

    booking: {
      title: 'Book Your Stay at Gouri Inn | Hotel & Lawn Reservations',
      description: 'Secure your premium stay or event at Gouri Inn. Easy online booking with instant confirmation, flexible cancellation, and best rate guarantee.',
      keywords: 'Gouri Inn booking, hotel reservation, lawn booking, online booking, event booking system',
      image: '/RoomImages/suite.jpg',
      url: '/room-booking',
      priority: 0.9,
      changefreq: 'daily'
    },

    gallery: {
      title: 'Gouri Inn Gallery | Hotel & Lawn Photos',
      description: 'Browse our photo gallery showcasing luxury rooms, beautiful lawns, amenities, and dining experiences at Gouri Inn.',
      keywords: 'Gouri Inn gallery, hotel photos, lawn photos, event venue pictures, room pictures, hotel interior photos',
      image: '/gallery-preview.jpg',
      url: '/gallery',
      priority: 0.8,
      changefreq: 'weekly'
    },

    contact: {
      title: 'Contact Gouri Inn | Book Your Stay or Event',
      description: 'Get in touch with Gouri Inn. Contact us for reservations, event inquiries, or special requests. We\'re here to make your experience exceptional.',
      keywords: 'contact Gouri Inn, hotel contact information, event venue contact, hotel phone number, hotel email, hotel address',
      image: '/RoomImages/suite.jpg',
      url: '/contact',
      priority: 0.7,
      changefreq: 'monthly'
    },

    services: {
      eventWedding: {
        title: 'Events & Weddings at Gouri Inn | Luxury Venue',
        description: 'Host your dream wedding or special event at Gouri Inn. Beautiful venues, expert planning, and exceptional service for unforgettable celebrations.',
        keywords: 'Gouri Inn wedding venue, event space, hotel wedding, luxury wedding venue, corporate events, party venue',
        image: '/event-venue.jpg',
        url: '/Seva/EventWedding',
        priority: 0.8,
        changefreq: 'weekly'
      },

      foodBeverages: {
        title: 'Fine Dining & Beverages at Gouri Inn | Gourmet Restaurant',
        description: 'Savor exquisite cuisine at our award-winning restaurants. From fine dining to casual meals, experience culinary excellence at Gouri Inn.',
        keywords: 'Gouri Inn fine dining, gourmet restaurant, hotel restaurant, luxury dining, food and beverages, culinary experience',
        image: '/restaurant.jpg',
        url: '/Seva/FoodBeverages',
        priority: 0.8,
        changefreq: 'weekly'
      },

      specialOffers: {
        title: 'Special Offers & Packages at Gouri Inn | Hotel Deals',
        description: 'Discover exclusive offers and packages at Gouri Inn. Special rates, seasonal deals, and luxury packages for your perfect stay or event.',
        keywords: 'Gouri Inn hotel deals, special offers, luxury packages, hotel discounts, seasonal rates, promotional offers',
        image: '/special-offers.jpg',
        url: '/Seva/SpecialOffers',
        priority: 0.8,
        changefreq: 'daily'
      }
    },

    notFound: {
      title: 'Page Not Found | Gouri Inn',
      description: 'The page you\'re looking for doesn\'t exist. Explore our premium hotel accommodations and services at Gouri Inn.',
      keywords: '404, page not found, Gouri Inn booking, luxury accommodation',
      image: '/RoomImages/suite.jpg',
      url: '/404',
      priority: 0.1,
      changefreq: 'monthly'
    }
  },

  // Structured data templates
  structuredData: {
    organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Gouri Inn",
      "url": "https://gouriinn.com",
      "logo": "https://gouriinn.com/logo.png", // Placeholder, replace with actual logo path
      "sameAs": [
        "https://facebook.com/gouriinn", // Placeholder, replace with actual social links
        "https://instagram.com/gouriinn",
        "https://linkedin.com/company/gouriinn"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-XXXXXXXXXX", // Placeholder, replace with actual phone number
        "contactType": "customer service",
        "availableLanguage": "English"
      }
    },

    hotel: {
      "@context": "https://schema.org",
      "@type": "Hotel",
      "name": "Gouri Inn",
      "description": "Gouri Inn offers premium hotel and lawn bookings with exceptional hospitality. Book your stay, events, and special occasions with us.",
      "url": "https://gouriinn.com",
      "logo": "https://gouriinn.com/logo.png", // Placeholder, replace with actual logo path
      "image": "https://gouriinn.com/RoomImages/suite.jpg", // Placeholder, replace with actual hotel image
      "telephone": "+91-XXXXXXXXXX", // Placeholder, replace with actual phone number
      "email": "info@gouriinn.com", // Placeholder, replace with actual email
      "priceRange": "₹₹₹",
      "starRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Your Street Address", // Placeholder, replace with actual street address
        "addressLocality": "Your City", // Placeholder, replace with actual city
        "addressRegion": "Your State", // Placeholder, replace with actual state
        "postalCode": "Your Postal Code", // Placeholder, replace with actual postal code
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "YOUR_LATITUDE", // Placeholder, replace with actual latitude
        "longitude": "YOUR_LONGITUDE" // Placeholder, replace with actual longitude
      },
      "amenityFeature": [
        {
          "@type": "LocationFeatureSpecification",
          "name": "WiFi",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Spa",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Restaurant",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Parking",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Room Service",
          "value": true
        }
      ]
    },

    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://gouriinn.com"
        }
      ]
    }
  },

  // Open Graph configurations
  openGraph: {
    type: 'website',
    siteName: 'Gouri Inn',
    locale: 'en_US',
    imageWidth: 1200,
    imageHeight: 630
  },

  // Twitter Card configurations
  twitter: {
    card: 'summary_large_image',
    site: '@gouriinn', // Placeholder, replace with actual Twitter handle
    creator: '@gouriinn' // Placeholder, replace with actual Twitter handle
  },

  // Analytics configurations
  analytics: {
    googleAnalytics: {
      measurementId: 'GA_MEASUREMENT_ID' // Replace with your GA4 ID
    },
    googleTagManager: {
      containerId: 'GTM_CONTAINER_ID' // Replace with your GTM ID
    }
  },

  // Performance configurations
  performance: {
    preloadCriticalResources: [
      '/favicon.png',
      '/RoomImages/deluxe.jpg',
      '/RoomImages/executive.jpg'
    ],
    preconnectDomains: [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://checkout.razorpay.com'
    ]
  }
};

// Helper function to get page SEO config
export const getPageSEO = (pageName, customData = {}) => {
  const pageConfig = seoConfig.pages[pageName];
  if (!pageConfig) {
    console.warn(`SEO config not found for page: ${pageName}`);
    return seoConfig.pages.home;
  }
  
  return {
    ...pageConfig,
    ...customData
  };
};

// Helper function to generate structured data
export const generateStructuredData = (type, customData = {}) => {
  const baseData = seoConfig.structuredData[type];
  if (!baseData) {
    console.warn(`Structured data template not found for type: ${type}`);
    return {};
  }
  
  return {
    ...baseData,
    ...customData
  };
};
