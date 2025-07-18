import * as dotenv from 'dotenv';
import * as fs from 'fs';

const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env';

if (fs.existsSync(envFile)) {
  dotenv.config({ path: envFile });
} else {
  dotenv.config(); // fallback to default `.env`
}

const DEFAULT_HOSTNAME = 'localhost:1800';

export const hostname = process.env.HOSTNAME || process.env.API_HOST || DEFAULT_HOSTNAME;
