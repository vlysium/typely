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
	}
}

interface SettingsState {
	settings: Settings;

	setBaseSize: (size: number) => void;
	setBaseScale: (scale: ScaleOption["value"]) => void;
	setBodyFontFamily: (fontFamily: string) => void;
	setBodyFontWeight: (weight: Weight) => void;
	setBodyLineHeight: (lineHeight: number) => void;
	setBodyLetterSpacing: (letterSpacing: number) => void;
}

const useSettingsStore = create<SettingsState>((set) => ({
	settings: {
		base: {
			size: 16,
			scale: 1.2,
		},
		body: {
			fontFamily: "Inter",
			fontWeight: "400",
			lineHeight: 1.5,
			letterSpacing: 0,
		},
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
}));

export default useSettingsStore;
