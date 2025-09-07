import { getPath } from '@/utils/getPath';

test('returns a string path', () => {
	expect(typeof getPath('foo')).toBe('string');
});
