import type { PackageJson } from 'pkg-types';
import { readPackageJSON } from 'pkg-types';
export const getJsonContent = async (path?: string): Promise<PackageJson> => {
	return await readPackageJSON(path).then((pkg) => pkg);
};
