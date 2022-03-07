import { BotClient } from '#lib/BotClient';

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
