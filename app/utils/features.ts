export interface CleaFeature {
  title: string;
  description: string;
  icon: string;
  iconClass: string;
}

export const publicFeatures: CleaFeature[] = [
  {
    title: 'Calendrier du cycle',
    description:
      'Repère tes règles, l’ovulation estimée et les phases de ton cycle au fil des semaines.',
    icon: 'i-lucide-calendar-heart',
    iconClass: 'bg-primary/15 text-primary',
  },
  {
    title: 'Suivi quotidien',
    description:
      'Note en quelques gestes ton humeur, ton énergie et tes ressentis de la journée.',
    icon: 'i-lucide-list-checks',
    iconClass: 'bg-secondary/15 text-secondary',
  },
  {
    title: 'Symptômes et ressentis',
    description:
      'Observe ce que ton corps te dit d’une période à l’autre, selon tes propres repères.',
    icon: 'i-lucide-activity',
    iconClass: 'bg-accent/15 text-accent',
  },
  {
    title: 'Prédictions du cycle',
    description:
      'CLEA estime tes prochaines périodes et ta fenêtre fertile à partir de ton historique. Des indications, pas des certitudes.',
    icon: 'i-lucide-trending-up',
    iconClass: 'bg-primary/15 text-primary',
  },
  {
    title: 'Accompagnement',
    description:
      'Un suivi plus personnel avec des mentores et femmes leaders, quand tu en as besoin.',
    icon: 'i-lucide-hand-heart',
    iconClass: 'bg-earth/15 text-earth',
  },
  {
    title: 'Conseils et contenus',
    description:
      'Des informations simples et bienveillantes pour mieux comprendre ton corps au quotidien.',
    icon: 'i-lucide-book-heart',
    iconClass: 'bg-secondary/15 text-secondary',
  },
];
