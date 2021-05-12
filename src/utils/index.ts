import { store } from "../store";

export function setText(text: { es: string; en: string }) {
  const state = store.getState();
  const language = state.global.language;
  return language === "en" ? text.en : text.es;
}
