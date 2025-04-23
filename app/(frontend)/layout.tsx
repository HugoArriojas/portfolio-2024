import React from 'react';
import '../globals.scss'; // Import App Router global styles
import '../../styles/globals.scss'; // Import global styles as fallback
import './styles.css';

import ClientLayout from './client-layout';

export const metadata = {
  description: 'Hugo Arriojas - Software Engineer & Marine Biologist',
  title: 'Hugo Arriojas Portfolio',
};

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <html
      lang='en'
      className='portfolio-site'
    >
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
