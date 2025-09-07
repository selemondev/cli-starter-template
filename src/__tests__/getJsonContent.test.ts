import type { PackageJson } from 'pkg-types';
import { getJsonContent } from '@/utils/getJsonContent';

it('returns a promise with the specified type', async () => {
	const pkgJson = await getJsonContent();
	expectTypeOf(pkgJson).toEqualTypeOf<PackageJson>();
});
