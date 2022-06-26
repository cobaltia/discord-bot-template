import { Listener } from '#lib/structures';
import { resolveFile } from '#utils/utils';

describe('Bot', () => {
	describe('util', () => {
		describe('resolveFile', () => {
			test("GIVEN '../../mocks/MockStructure.ts' THEN return instanceOf Listener", async () => {
				expect(await resolveFile<Listener>(__dirname + '/../../mocks/MockStructure.ts')).toBeInstanceOf(Listener);
			});
		});
	});
});
