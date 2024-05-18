import { type Writable, writable } from "svelte/store";
import { browser } from "$app/environment";

const accentBG = browser ? window.localStorage.colorStore : "#22C55D";
const primaryBGDark = "#18181b";
const primaryBGLight = "#e7e7df";

export var colorStore: Writable<string> = writable<string>(accentBG);

colorStore.subscribe((value) => {
  if (browser) {
    window.localStorage.setItem("colorStore", value);
  }
});

// INFO: Functions to modify theme

export function updateTheme(value: string) {
  updateCSSVariable("--color-primaryaccentbg", value);

  const backgroundColor = getContrastingColor(value);
  updateCSSVariable("--color-primarybg", backgroundColor);
  updateCSSVariable("--color-primaryaccentfg", backgroundColor); // color is same as BG usually

  const foregroundColor = getContrastingColor(backgroundColor);
  updateCSSVariable("--color-primaryfg", foregroundColor);
}

function updateCSSVariable(name: string, value: string) {
  const root = document.documentElement;
  value = value ? value.replace("#", "") : "#22C55D";

  const rgb = hexToWeirdRGB(value);

  root.style.setProperty(name, rgb);
}

function getContrastingColor(accentColor: string) {
  const luminanceDark = calculateContrast(accentColor, primaryBGDark);
  const luminanceLight = calculateContrast(accentColor, primaryBGLight);

  // Keep dark background if contrast is higher with the accent, otherwise switch to light.
  if (luminanceDark + 0.1 > luminanceLight) return primaryBGDark;
  return primaryBGLight;
}

function calculateContrast(value1: string, value2: string) {
  const color1 = value1.match(/[0-9a-fA-F]{2}/g)!.map((x) => parseInt(x, 16));
  const color2 = value2.match(/[0-9a-fA-F]{2}/g)!.map((x) => parseInt(x, 16));

  const l1 = 0.2126 * color1[0] + 0.7152 * color1[1] + 0.0722 * color1[2];
  const l2 = 0.2126 * color2[0] + 0.7152 * color2[1] + 0.0722 * color2[2];

  return Math.abs(l1 - l2) / 255;
}

function hexToWeirdRGB(hex: string) {
  const rgb = hex
    .match(/.{1,2}/g)!
    .map((x) => parseInt(x, 16))
    .join(" ");
  return rgb;
}
