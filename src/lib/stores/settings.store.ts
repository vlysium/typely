import { create } from "zustand";

import type { ScaleOption } from "@/components/sidebar/base";
import type { Weight } from "@/server/fonts";

type Settings = {
	base: {
		size: number;
		scale: ScaleOption["value"];
	};
	body: {
		fontFamily: string;
		fontWeight: Weight;
		lineHeight: number;
		letterSpacing: number;
	};
	fluid: {
		size: number;
		scale: ScaleOption["value"] | "_inherit";
		minWidth: number;
		maxWidth: number;
	};
}

interface SettingsState {
	settings: Settings;

	setBaseSize: (size: number) => void;
	setBaseScale: (scale: ScaleOption["value"]) => void;
	setBodyFontFamily: (fontFamily: string) => void;
	setBodyFontWeight: (weight: Weight) => void;
	setBodyLineHeight: (lineHeight: number) => void;
	setBodyLetterSpacing: (letterSpacing: number) => void;
	setFluidSize: (size: number) => void;
	setFluidScale: (scale: ScaleOption["value"] | "_inherit") => void;
	setFluidMinWidth: (minWidth: number) => void;
	setFluidMaxWidth: (maxWidth: number) => void;
}

const useSettingsStore = create<SettingsState>((set) => ({
	settings: {
		base: {
			size: 16,
			scale: 1.2
		},
		body: {
			fontFamily: "Inter",
			fontWeight: "400",
			lineHeight: 1.5,
			letterSpacing: 0
		},
		fluid: {
			size: 16,
			scale: "_inherit",
			minWidth: 320,
			maxWidth: 1280
		}
	},

	setBaseSize: (size) => set((state) => ({
		settings: { ...state.settings, base: { ...state.settings.base, size } }
	})),

	setBaseScale: (scale) => set((state) => ({
		settings: { ...state.settings, base: { ...state.settings.base, scale } }
	})),

	setBodyFontFamily: (fontFamily) => set((state) => ({
		settings: { ...state.settings, body: { ...state.settings.body, fontFamily: fontFamily } }
	})),

	setBodyFontWeight: (fontWeight) => set((state) => ({
		settings: { ...state.settings, body: { ...state.settings.body, fontWeight: fontWeight } }
	})),

	setBodyLineHeight: (lineHeight) => set((state) => ({
		settings: { ...state.settings, body: { ...state.settings.body, lineHeight: lineHeight } }
	})),

	setBodyLetterSpacing: (letterSpacing) => set((state) => ({
		settings: { ...state.settings, body: { ...state.settings.body, letterSpacing: letterSpacing } }
	})),

	setFluidSize: (size) => set((state) => ({
		settings: { ...state.settings, fluid: { ...state.settings.fluid, size: size } }
	})),

	setFluidScale: (scale) => set((state) => ({
		settings: { ...state.settings, fluid: { ...state.settings.fluid, scale: scale } }
	})),

	setFluidMinWidth: (minWidth) => set((state) => ({
		settings: { ...state.settings, fluid: { ...state.settings.fluid, minWidth: minWidth } }
	})),

	setFluidMaxWidth: (maxWidth) => set((state) => ({
		settings: { ...state.settings, fluid: { ...state.settings.fluid, maxWidth: maxWidth } }
	}))
}));

export default useSettingsStore;
