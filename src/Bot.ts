import { BotClient } from '#lib/BotClient';
import process from 'node:process';

const bot = new BotClient();

try {
	await bot.login();
} catch (error) {
	bot.destroy();
	process.exit(1);
}
