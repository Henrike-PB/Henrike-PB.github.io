export const LOCALES = ['pt-BR', 'en'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'pt-BR';

export type Localized<T> = { [K in Locale]: T };

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (LOCALES as readonly string[]).includes(value);
}

export function pick<T>(value: Localized<T>, locale: Locale): T {
  return value[locale];
}

export function localePath(path: string, locale: Locale): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (locale === DEFAULT_LOCALE) return clean;
  return `/${locale.toLowerCase().split('-')[0]}${clean === '/' ? '' : clean}`;
}

export function htmlLang(locale: Locale): string {
  return locale === 'pt-BR' ? 'pt-BR' : 'en';
}

export function ogLocale(locale: Locale): string {
  return locale === 'pt-BR' ? 'pt_BR' : 'en_US';
}

export function otherLocale(locale: Locale): Locale {
  return locale === 'pt-BR' ? 'en' : 'pt-BR';
}
