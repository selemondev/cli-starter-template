import consola from 'consola';
import pc from 'picocolors';
export const logger = {
	info: (...args: string[]) => {
		return consola.info(pc.cyan(args.map(String).join(' ')));
	},
	warn: (...args: string[]) => {
		return consola.fatal(pc.yellow(args.map(String).join(' ')));
	},
	error: (...args: string[]) => {
		return consola.fatal(pc.red(args.map(String).join(' ')));
	},
	success: (...args: string[]) => {
		return consola.success(pc.green(args.map(String).join(' ')));
	},
};
