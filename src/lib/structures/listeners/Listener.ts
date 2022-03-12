import { BotClient } from '#lib/BotClient';
import { ClientEvents } from 'discord.js';

export abstract class Listener {
	/**
	 * The name of the listener.
	 */
	public name: keyof ClientEvents;

	/**
	 * Option to run the listener only once.
	 */
	public once: boolean;

	public abstract bot: BotClient;
	/**
	 * Constructs a Listener.
	 * @param options The options for the listener.
	 */
	constructor(options: ListenerOptions) {
		this.name = options.name;
		this.once = options.once ?? false;
	}

	/**
	 * Executes the listener's logic.
	 * @param args The arguments for the listener.
	 */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	public abstract run(...args: any[]): Promise<void>;
}

export interface ListenerOptions {
	/**
	 * The name of the listener.
	 */
	name: keyof ClientEvents;

	/**
	 * Option to run the listener only once.
	 * @default false
	 */
	once?: boolean;
}
