import type { TSize, TWeight, TColor } from './types';

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
		sm: 22,
		md: 30,
		lg: 44,
		xl: 60,
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
		background: '#F2F4F5', //100
		shade: '#E4E7EB', // 200
		shadow: '#CCD1D9', //300
		content: '#0D1529', //Text color
		primary: '#5CE8B3',
		primaryContent: '#002C21',
		secondary: '#A1B1FF',
		secondaryContent: '#022D14',
		accent: '#7AF1A7',
		accentContent: '#ffffff',
		neutral: '#00776F',
		neutralContent: '#EFFCF9',
		info: '#00A4F2',
		infoContent: '#EDF7FD',
		success: '#7ACC00',
		successContent: '#F5FCE5',
		warning: '#FA9700',
		warningContent: '#FDF9E8',
		error: '#F43098',
		errorContent: '#FCF2F8',
	} satisfies TColor,
};

const darkTheme = {
	...baseSettings,
	color: {
		background: '#ffffff', //100
		shade: '#f0f0f0', // 200
		shadow: '#f0f0f0', //300
		content: '#d0d0d0', //Text color
		primary: '#000000',
		primaryContent: '#ffffff',
		secondary: '#000000',
		secondaryContent: '#ffffff',
		accent: '#000000',
		accentContent: '#ffffff',
		neutral: '#000000',
		neutralContent: '#ffffff',
		info: '#0000ff',
		infoContent: '#ffffff',
		success: '#00ff00',
		successContent: '#000000',
		warning: '#ffcc00',
		warningContent: '#000000',
		error: '#ff0000',
		errorContent: '#ffffff',
	} satisfies TColor,
};

export const Themes: Record<string, typeof lightTheme> = {
	light: lightTheme,
	dark: darkTheme,
};
