export const GA_MEASUREMENT_ID = 'G-E7CDSP4N58';

// Declare global gtag function
declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      params?: Record<string, any>
    ) => void;
  }
}

export const pageview = (url: string): void => {
  window.gtag('config', 'G-E7CDSP4N58', {
    page_path: url,
  });
};

interface EventParams {
  action: string;
  category: string;
  label: string;
  value?: number;
}

export const event = ({
  action,
  category,
  label,
  value,
}: EventParams): void => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
};
