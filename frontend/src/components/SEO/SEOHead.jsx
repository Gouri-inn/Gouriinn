import React from 'react';
import { Helmet } from 'react-helmet-async';
import { seoConfig } from '../../config/seo'; // Import seoConfig

const SEOHead = ({ 
  title, 
  description, 
  keywords, 
  image,
  type = 'website',
  structuredData = null,
  canonicalPath = null
}) => {
  const siteName = seoConfig.site.name;
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const defaultDescription = seoConfig.site.description;
  const defaultKeywords = seoConfig.site.keywords;
  const defaultImage = `${seoConfig.site.url}/RoomImages/suite.jpg`; // Use site URL for absolute image path
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
  const canonicalUrl = `${seoConfig.site.url}${canonicalPath || currentPath}`; // Construct canonical URL

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:site_name" content={siteName} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description || defaultDescription} />
      <meta property="twitter:image" content={image || defaultImage} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
