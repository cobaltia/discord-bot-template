import process from 'node:process';
import pino, { Logger } from 'pino';

let logger: Logger;

// TODO(*): Finish production logging
if (process.env.NODE_ENV !== 'production') {
	logger = pino({ level: 'trace' });
} else {
	logger = pino();
}

export { logger };
