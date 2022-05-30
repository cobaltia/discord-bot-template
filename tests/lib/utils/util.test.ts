import { Listener } from '#lib/structures';
import { resloveFile } from '#utils/utils';

describe('Bot', () => {
	describe('util', () => {
		describe('resloveFile', () => {
			test("GIVEN '../../mocks/MockStructure.ts' THEN return instanceOf Listener", async () => {
				expect(await resloveFile<Listener>(__dirname + '/../../mocks/MockStructure.ts')).toBeInstanceOf(Listener);
			});
		});
	});
});
