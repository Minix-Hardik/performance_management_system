import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import common_site_config from '../../../../sites/common_site_config.json';

const { webserver_port } = common_site_config;

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5000,
    host: '0.0.0.0',
    proxy: {
      '^/(app|login|api|assets|files|private)': {
        target: `http://127.0.0.1:${webserver_port}`,
        ws: true,
        // @ts-expect-error no error
        router: function (req) {
          const site_name = req.headers.host.split(':')[0];
          return `http://${site_name}:${webserver_port}`;
        }
      }
    }
  },
})
