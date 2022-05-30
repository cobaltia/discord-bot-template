import { BotClient } from '#lib/BotClient';
import { resloveFile } from '#utils/utils';
import { sync } from 'glob';
import { resolve } from 'node:path';
import { Listener } from '../listeners';
import { logger } from '../logger';

export async function ListenerRegistry(bot: BotClient) {
	const files = sync(resolve(__dirname + '/../../../listeners/**/*.js'));
	for (const file of files) {
		const listener = await resloveFile<Listener>(file);
		if (!listener) continue;
		listener.bot = bot;
		bot.events.set(listener.name, listener);
		bot[listener.once ? 'once' : 'on'](listener.name, (...args: any[]) => listener.run(...args));
		logger.info({ listener: { name: listener.name } }, `Registering listener: ${listener.name}`);
	}
}
