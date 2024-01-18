export const GA_MEASUREMENT_ID = 'G-E7CDSP4N58';

export const pageview = () => {
  window.gtag('config', 'G-E7CDSP4N58', {
    page_path: url,
  });
};

export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
};
