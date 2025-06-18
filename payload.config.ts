// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import sharp from 'sharp'; // sharp-import
import path from 'path';
import { buildConfig } from 'payload';
import { fileURLToPath } from 'url';
import { Media } from './collections/Media';
import { Users } from './collections/Users';
import { defaultLexical } from '@/fields/defaultLexical';
import { getServerSideURL } from './utilities/getURL';
import { SiteSettings } from './globals/Settings';
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    importMap: {
      baseDir: path.resolve(dirname),
    },
    user: Users.slug,
    components: {
      graphics: {
        Icon: '@/components/ui/icon',
        Logo: '@/components/ui/logo',
      },
    },
    livePreview: {
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 768,
          height: 1024,
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
          height: 900,
        },
      ],
    },
  },
  // This config helps us configure global or default features that the other editors can inherit
  editor: defaultLexical,
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  collections: [Media, Users],
  cors: [getServerSideURL()].filter(Boolean),
  globals: [SiteSettings],
  plugins: [
    vercelBlobStorage({
      enabled: process.env.VERCEL_BLOB_STORAGE_ENABLED === 'true',
      clientUploads: process.env.VERCEL_BLOB_BYPASS_UPLOAD_LIMIT === 'true',
      collections: {
        [Media.slug]: true,
        [exports]: true,
      },
      token: process.env.VERCEL_BLOB_READ_WRITE_TOKEN || '',
    }),
  ],
  secret: process.env.PAYLOAD_SECRET || '',
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
});
