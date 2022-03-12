import { CLIENT_OPTIONS } from '#root/config';
import { Client, Collection } from 'discord.js';
import { ListenerOptions } from './structures';

export class BotClient extends Client {
	public events = new Collection<string, ListenerOptions>();
	constructor() {
		super(CLIENT_OPTIONS);
	}
}
