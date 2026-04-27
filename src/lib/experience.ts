import { experiences, type Experience } from '@/data/experience';

export function currentPrimaryRole(): { title: string; company: string } | null {
  const dataRole = experiences.find((e) => e.current && e.category === 'data');
  const target = dataRole ?? experiences.find((e) => e.current);
  if (!target) return null;
  return {
    title: target.roles[0]?.title ?? '',
    company: target.company,
  };
}

export function sortedExperiences(): Experience[] {
  return [...experiences].sort((a, b) => {
    if (a.current !== b.current) return a.current ? -1 : 1;
    return b.startYear - a.startYear;
  });
}
