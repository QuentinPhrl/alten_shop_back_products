import { Server } from './common/server';
import './common/env';

const port: number  = parseInt(process.env.PORT || '3000');

Server(port);

