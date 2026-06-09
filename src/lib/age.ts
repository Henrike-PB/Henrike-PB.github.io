// Datas dinâmicas (idade, ano) são ancoradas no fuso do Brasil, então viram
// no dia certo pelo horário de Brasília independente do fuso de quem acessa.
const TIME_ZONE = 'America/Sao_Paulo';

function dateParts(date: Date): { year: number; month: number; day: number } {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: TIME_ZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(date);
  const value = (type: string) => Number(parts.find((p) => p.type === type)?.value);
  return { year: value('year'), month: value('month'), day: value('day') };
}

export function computeAge(birthDateIso: string, now: Date = new Date()): number {
  const birth = dateParts(new Date(birthDateIso));
  const today = dateParts(now);
  let age = today.year - birth.year;
  if (today.month < birth.month || (today.month === birth.month && today.day < birth.day)) {
    age -= 1;
  }
  return age;
}

export function currentYear(now: Date = new Date()): number {
  return dateParts(now).year;
}
