type ClassNameType = Record<string, string[]>;

/** 类名格式化 */
export const defineStyle = <T extends ClassNameType>(className: T) => {
  const ens = Object.entries(className).map((item) => [item[0], item[1].join(' ')]);
  return Object.fromEntries(ens) as Record<keyof T, string>;
};
