import { BotClient } from '#lib/BotClient';
import process from 'node:process';

const bot = new BotClient();

async function main() {
	try {
		await bot.login();
	} catch (error) {
		bot.destroy();
		process.exit(1);
	}
}

main().catch(console.error);
