import { env } from '@strapi/utils';

export default () => ({
  'strapi-location-picker': {
    enabled: true,
  },
  'color-picker': {
    enabled: true,
  },
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
    },
  },
});
