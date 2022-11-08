import colors from '../sass/_colors.scss';

type Group = 'core' | 'neutral' | 'primaryblue';
export type Color = {
  key: string;
  value: string;
};

export function ColorExport(group: Group) {
  const keys = Object.keys(colors).filter(key => key.startsWith(group));

  return keys.map(key => {
    return {
      key,
      value: colors[key]
    };
  });
}
