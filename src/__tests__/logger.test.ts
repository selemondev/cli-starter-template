import { logger } from '@/utils/logger';

it('has all the methods', () => {
	expect(Object.keys(logger).length).toEqual(4);
	expect(typeof logger.info('CLI version 3')).toBeTypeOf('string');
	expect(typeof logger.error('Operation cancelled')).toBeTypeOf('string');
	expect(typeof logger.success('Created successfully!')).toBeTypeOf('string');
	expect(typeof logger.warn('Update dependencies!')).toBeTypeOf('string');
});
