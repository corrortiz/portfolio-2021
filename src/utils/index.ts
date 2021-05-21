export function setText(text: { es: string; en: string }, language: string) {
  return language === "en" ? text.en : text.es;
}
