import type { TColor, TSize, TWeight } from './types';

const breakpoints: TSize = {
	xxs: 0,
	xs: 150,
	sm: 300,
	md: 500,
	lg: 800,
	xl: 1200,
};

const spacing: TSize = {
	xxs: 2,
	xs: 4,
	sm: 6,
	md: 9,
	lg: 14,
	xl: 21,
};

const radius: TSize = {
	xxs: 2,
	xs: 4,
	sm: 6,
	md: 9,
	lg: 14,
	xl: 21,
};

const font = {
	size: {
		xxs: 5,
		xs: 7.5,
		sm: 11,
		md: 17,
		lg: 25.5,
		xl: 35,
	} satisfies TSize,
	weight: {
		normal: 'latoRegular',
		bold: 'latoBold',
		black: 'latoBlack',
	} satisfies TWeight,
	leading: {
		xxs: 12,
		xs: 18,
		sm: 30,
		md: 45,
		lg: 62,
		xl: 87,
	} satisfies TSize,
};

const baseSettings = {
	breakpoints,
	spacing,
	radius,
	font,
};

const lightTheme = {
	...baseSettings,
	color: {
		background: '#EEF2F6', //100
		shade: '#F7F9FA', // 200
		shadow: '#DFE5ED', //300
		content: '#0D1529', //Text color
		primary: '#002C21',
		primaryContent: '#5CE8B3',
		secondary: '#030712',
		secondaryContent: '#F7F8FA',
		accent: '#8BC2FF',
		accentContent: '#162455',
		neutral: '#18181B',
		neutralContent: '#F8F8F8',
		info: '#2A7EFF',
		infoContent: '#EFF6FF',
		success: '#00BAA6',
		successContent: '#EFFCF9',
		warning: '#EEAF00',
		warningContent: '#FCFAE6',
		error: '#F82834',
		errorContent: '#FEF2F2',
	} satisfies TColor,
};

const darkTheme = {
	...baseSettings,
	color: {
		background: '#0D1529', //100
		shade: '#1A273A', // 200
		shadow: '#010515', //300
		content: '#EEF2F6', //Text color
		primary: '#002C21',
		primaryContent: '#5CE8B3',
		secondary: '#030712',
		secondaryContent: '#F7F8FA',
		accent: '#8BC2FF',
		accentContent: '#162455',
		neutral: '#18181B',
		neutralContent: '#F8F8F8',
		info: '#2A7EFF',
		infoContent: '#EFF6FF',
		success: '#00BAA6',
		successContent: '#EFFCF9',
		warning: '#EEAF00',
		warningContent: '#FCFAE6',
		error: '#F82834',
		errorContent: '#FEF2F2',
	} satisfies TColor,
};

export const Themes: Record<string, typeof lightTheme> = {
	light: lightTheme,
	dark: darkTheme,
};
