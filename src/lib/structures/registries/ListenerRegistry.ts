import { BotClient } from '#lib/BotClient';
import { resolveFile } from '#utils/utils';
import { globbySync as sync } from 'globby';
import { Listener } from '../listeners/index.js';
import { logger } from '../logger.js';

export async function ListenerRegistry(bot: BotClient) {
	try {
		const files = sync('./dist/listeners/**/*.js');
		await Promise.all(files.map(async file => loadListener(file, bot)));
	} catch (err) {
		const error = err as Error;
		logger.error(error, error.message);
	}
}

async function loadListener(file: string, bot: BotClient) {
	const listener = await resolveFile<Listener>(file);
	if (!listener) return;
	listener.bot = bot;
	bot.events.set(listener.name, listener);
	bot[listener.once ? 'once' : 'on'](listener.name, (...args: unknown[]) => listener.run(...args));
	logger.info({ listener: { name: listener.name } }, `Registering listener: ${listener.name}`);
}
