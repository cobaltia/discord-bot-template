import { CLIENT_OPTIONS } from '#root/config';
import { Client, Collection } from 'discord.js';
import { ListenerOptions, ListenerRegistry } from '#lib/structures';

export class BotClient extends Client {
	public events = new Collection<string, ListenerOptions>();
	constructor() {
		super(CLIENT_OPTIONS);
	}

	async login(token?: string) {
		await Promise.all([ListenerRegistry(this)]);
		return await super.login(token);
	}
}
