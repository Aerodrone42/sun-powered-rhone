import { useEffect } from 'react';

const SitemapRedirect = () => {
  useEffect(() => {
    window.location.href = '/sitemap.xml';
  }, []);

  return null;
};

export default SitemapRedirect;