import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SEOProps } from '../utils/seo';

interface SEOHeadProps extends SEOProps {
  children?: React.ReactNode;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Qbrain Team - Elite B.Tech Student Technology Team',
  description = 'Join Qbrain Team, an elite B.Tech student team specializing in AI, IoT, and cutting-edge technology solutions for hackathons and competitions. AUAT Techfest 2025 Winners.',
  keywords = 'qbrain, hackathon team, AI, IoT, technology, B.Tech students, smart india hackathon, tech competition, innovation, BWU',
  image = 'https://qbrain.in/social.jpg',
  url = 'https://qbrain.in',
  type = 'website',
  author = 'Team Qbrain',
  publishedTime,
  modifiedTime,
  children
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Qbrain Team",
    "description": description,
    "url": url,
    "logo": "https://qbrain.in/favicon.png",
    "sameAs": [
      "https://linkedin.com/company/qbrain",
      "https://github.com/qbrain",
      "https://instagram.com/qbrain"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-869-5205-637",
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "398, Ramkrishnapur Rd, near Jagadighata Market",
      "addressLocality": "Barasat",
      "addressRegion": "West Bengal",
      "postalCode": "700125",
      "addressCountry": "IN"
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />

      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Qbrain Team" />
      <meta property="og:locale" content="en_US" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:url" content={url} />

      {/* Additional SEO Tags */}
      <link rel="canonical" href={url} />
      <meta name="theme-color" content="#00D4FF" />
      <meta name="msapplication-TileColor" content="#00D4FF" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {children}
    </Helmet>
  );
};

export default SEOHead;