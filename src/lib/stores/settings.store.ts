import { create } from "zustand";

import type { ScaleOption } from "@/components/sidebar/base";
import type { Weight } from "@/server/fonts";

export type Unit = "px" | "rem";

export type Settings = {
	preview: {
		unit: Unit;
		text: string;
	};
	base: {
		size: number;
		scale: ScaleOption["value"];
	};
	fluid: {
		isEnabled: boolean;
		size: number;
		scale: ScaleOption["value"];
		minWidth: number;
		maxWidth: number;
	};
	body: {
		fontFamily: string;
		fontWeight: Weight;
		lineHeight: number;
		letterSpacing: number;
	};
}

interface SettingsState {
	settings: Settings;

	setPreviewUnit: (unit: Unit) => void;
	setPreviewText: (text: string) => void;
	setBaseSize: (size: number) => void;
	setBaseScale: (scale: ScaleOption["value"]) => void;
	setFluidIsEnabled: (isEnabled: boolean) => void;
	setFluidSize: (size: number) => void;
	setFluidScale: (scale: ScaleOption["value"]) => void;
	setFluidMinWidth: (minWidth: number) => void;
	setFluidMaxWidth: (maxWidth: number) => void;
	setBodyFontFamily: (fontFamily: string) => void;
	setBodyFontWeight: (weight: Weight) => void;
	setBodyLineHeight: (lineHeight: number) => void;
	setBodyLetterSpacing: (letterSpacing: number) => void;
}

const useSettingsStore = create<SettingsState>((set) => ({
	settings: {
		preview: {
			unit: "px",
			text: "The quick brown fox jumps over the lazy dog."
		},
		base: {
			size: 16,
			scale: 1.2,
		},
		fluid: {
			isEnabled: false,
			size: 16,
			scale: 1.2,
			minWidth: 320,
			maxWidth: 1280
		},
		body: {
			fontFamily: "Inter",
			fontWeight: "400",
			lineHeight: 1.5,
			letterSpacing: 0
		}
	},

	setPreviewUnit: (unit) => set((state) => ({
		settings: { ...state.settings, preview: { ...state.settings.preview, unit } }
	})),

	setPreviewText: (text) => set((state) => ({
		settings: { ...state.settings, preview: { ...state.settings.preview, text: text } }
	})),

	setBaseSize: (size) => set((state) => ({
		settings: { ...state.settings, base: { ...state.settings.base, size } }
	})),

	setBaseScale: (scale) => set((state) => ({
		settings: { ...state.settings, base: { ...state.settings.base, scale } }
	})),

	setFluidIsEnabled: (isEnabled) => set((state) => ({
		settings: { ...state.settings, fluid: { ...state.settings.fluid, isEnabled } }
	})),

	setFluidSize: (size) => set((state) => ({
		settings: { ...state.settings, fluid: { ...state.settings.fluid, size } }
	})),

	setFluidScale: (scale) => set((state) => ({
		settings: { ...state.settings, fluid: { ...state.settings.fluid, scale } }
	})),

	setFluidMinWidth: (minWidth) => set((state) => ({
		settings: { ...state.settings, fluid: { ...state.settings.fluid, minWidth } }
	})),

	setFluidMaxWidth: (maxWidth) => set((state) => ({
		settings: { ...state.settings, fluid: { ...state.settings.fluid, maxWidth } }
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
