import { create } from 'zustand';
import {
	persist,
	createJSONStorage,
} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
	Appearance,
	type ColorSchemeName,
} from 'react-native'; // Importar Appearance y ColorSchemeName
import { Themes } from '../themes/themes'; // Asegúrate que la ruta sea correcta

// Tipos para las preferencias y temas resueltos
export type TThemeUserPreference =
	| 'light'
	| 'dark'
	| 'system';
type TResolvedThemeName = 'light' | 'dark';

// Función para obtener el nombre del tema resuelto ('light' o 'dark')
// basado en la preferencia del usuario y el esquema de color del sistema.
const getResolvedThemeName = (
	preference: TThemeUserPreference,
): TResolvedThemeName => {
	if (preference === 'system') {
		const systemScheme = Appearance.getColorScheme();
		return systemScheme || 'light'; // 'light' como fallback si getColorScheme() es null/undefined
	}
	return preference;
};

// Valores iniciales
const initialUserPreference: TThemeUserPreference =
	'system'; // Por defecto, seguir el sistema
const initialResolvedName = getResolvedThemeName(
	initialUserPreference,
);
const initialThemeObject = Themes[initialResolvedName];

interface IThemeState {
	userPreference: TThemeUserPreference;
	activeThemeName: TResolvedThemeName;
	activeTheme: typeof initialThemeObject;
	setThemePreference: (
		preference: TThemeUserPreference,
	) => void;
	handleSystemAppearanceChange: (
		systemScheme: ColorSchemeName,
	) => void; // Acción interna
}

export const useThemeStore = create<IThemeState>()(
	persist(
		(set, get) => ({
			userPreference: initialUserPreference,
			activeThemeName: initialResolvedName,
			activeTheme: initialThemeObject,

			setThemePreference: (
				preference: TThemeUserPreference,
			) => {
				const newResolvedThemeName =
					getResolvedThemeName(preference);
				const newThemeObject = Themes[newResolvedThemeName];

				if (newThemeObject) {
					set({
						userPreference: preference,
						activeThemeName: newResolvedThemeName,
						activeTheme: newThemeObject,
					});
				} else {
					// Este caso es improbable si Themes solo contiene 'light' y 'dark'
					console.warn(
						`Could not resolve theme for preference "${preference}". Reverting to system default.`,
					);
					const fallbackResolvedName =
						getResolvedThemeName('system');
					set({
						userPreference: 'system',
						activeThemeName: fallbackResolvedName,
						activeTheme: Themes[fallbackResolvedName],
					});
				}
			},

			// Acción interna para manejar cambios de apariencia del sistema
			handleSystemAppearanceChange: (
				systemScheme: ColorSchemeName,
			) => {
				// Solo actualiza si la preferencia actual del usuario es 'system'
				if (get().userPreference === 'system') {
					const newResolvedThemeName =
						systemScheme || 'light'; // Fallback
					if (
						newResolvedThemeName !== get().activeThemeName
					) {
						// Solo actualiza si el tema realmente cambió
						const newThemeObject =
							Themes[newResolvedThemeName];
						if (newThemeObject) {
							set({
								activeThemeName: newResolvedThemeName,
								activeTheme: newThemeObject,
							});
						}
					}
				}
			},
		}),
		{
			name: 'app-theme-storage-system', // Nuevo nombre para la clave de almacenamiento
			storage: createJSONStorage(() => AsyncStorage),
			// onRehydrateStorage se llama después de que el estado se carga desde AsyncStorage.
			// Es un buen lugar para asegurar que el tema activo es correcto, especialmente si
			// la preferencia es 'system' y el tema del sistema cambió mientras la app estaba cerrada.
			onRehydrateStorage: () => {
				return (hydratedState, error) => {
					if (error) {
						console.error(
							'Failed to rehydrate theme store:',
							error,
						);
						// Podrías querer establecer un estado por defecto seguro aquí
					} else if (hydratedState) {
						console.log(
							'Theme store rehydrated. User preference:',
							hydratedState.userPreference,
						);
						// Vuelve a aplicar la preferencia del usuario. Esto es crucial porque si la preferencia
						// es 'system', llamará a getResolvedThemeName() que consulta Appearance.getColorScheme()
						// actual, actualizando el tema activo si el sistema cambió.
						hydratedState.setThemePreference(
							hydratedState.userPreference,
						);
					}
				};
			},
		},
	),
);

// Configurar el listener para los cambios de apariencia del sistema.
// Esto se ejecuta una vez cuando este módulo (el store) se carga.
Appearance.addChangeListener(({ colorScheme }) => {
	// Llama a la acción interna del store para que maneje el cambio.
	useThemeStore
		.getState()
		.handleSystemAppearanceChange(colorScheme);
});
