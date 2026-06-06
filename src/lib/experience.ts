import { experiences, type Experience } from '@/data/experience';
import type { Locale } from '@/lib/i18n';

export function currentPrimaryRole(locale: Locale): { title: string; company: string } | null {
  const dataRole = experiences.find((e) => e.current && e.category === 'data');
  const target = dataRole ?? experiences.find((e) => e.current);
  if (!target) return null;
  const role = target.roles[0];
  return {
    title: role ? role.title[locale] : '',
    company: target.company,
  };
}

export function sortedExperiences(): Experience[] {
  return [...experiences].sort((a, b) => {
    if (a.current !== b.current) return a.current ? -1 : 1;
    return b.startYear - a.startYear;
  });
}
