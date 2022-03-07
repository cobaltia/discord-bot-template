import { CLIENT_OPTIONS } from '#root/config';
import { Client } from 'discord.js';

export class BotClient extends Client {
	constructor() {
		super(CLIENT_OPTIONS);
	}
}
