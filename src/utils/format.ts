/**
 * capitalizeFirstChar
 * Ex: primary => Primary
 */

export const capitalizeFirstChar = (input: string) =>
  `${input.charAt(0).toUpperCase()}${input.slice(1)}`;

/**
 * splitWords
 * Ex: colorPrimary => ['color', 'Primary']
 */

export const splitWords = (input: string): string[] =>
  input.match(
    /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
  ) || [];

/**
 * toCssVariable
 * Ex: colorPrimary => --usy-color-primary
 */

export const toCssVariable = (input: string, prefix: string = "usy") => {
  const bunOfChars = splitWords(input);
  const linkCase = (bunOfChars || []).map((s) => s.toLowerCase()).join("-");

  return `--${prefix}-${linkCase}`;
};

/**
 * camelCase
 * ColorPrimary => colorPrimary
 */

export const camelCase = (input: string): string => {
  return input
    .toLowerCase()
    .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) =>
      index === 0 ? match.toLowerCase() : match.toUpperCase()
    )
    .replace(/\s+/g, "");
};

/**
 * formatAmount
 * 3400 => $3,400
 */

export const formatAmount = (num: number, prefix?: string): string =>
  `${prefix || ""}${num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
