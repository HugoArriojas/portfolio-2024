export const GA_MEASUREMENT_ID = 'G-XD7K7WC4EB';

export const pageview = () => {
  window.gtag('config', 'G-XD7K7WC4EB', {
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
