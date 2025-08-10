export const useNavigation = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToElement = (elementId, offset = 0) => {
    const element = document.getElementById(elementId);
    if (element) {
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  };

  const isElementInViewport = (elementId) => {
    const element = document.getElementById(elementId);
    if (!element) return false;
    
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const getActiveSection = (sectionIds) => {
    for (const sectionId of sectionIds) {
      if (isElementInViewport(sectionId)) {
        return sectionId;
      }
    }
    return null;
  };

  return {
    scrollToSection,
    scrollToTop,
    scrollToElement,
    isElementInViewport,
    getActiveSection
  };
};
