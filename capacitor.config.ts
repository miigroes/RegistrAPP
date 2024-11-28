import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.registrapp.app',
  appName: 'registrapp',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
