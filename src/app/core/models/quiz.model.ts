export type Language = 'en' | 'th';
export type RPGStat = 'STR' | 'INT' | 'AGI' | 'WIS' | 'DEX' | 'CHA';

export interface Choice {
  text: Record<Language, string>;
  stat: RPGStat;
}

export interface Question {
  id: number;
  text: Record<Language, string>;
  choices: Choice[];
}

export interface RPGClass {
  id: string;
  name: Record<Language, string>;
  description: Record<Language, string>;
  primaryStat: RPGStat;
  imageUrl?: string;
  gearRecommendation: {
    en: { description: string; name: string; url: string };
    th: { description: string; name: string; url: string };
  };
}
