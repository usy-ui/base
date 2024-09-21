export const getUniqueTime = () => new Date().getTime();

/**
 * Replace Params
 * /dashboard/:section => dashboard/profile
 */

export const buildPath = (pattern: string, params: Record<string, string>) => {
  if (!pattern || !params) {
    return "";
  }

  const paths = pattern.split("/");
  return paths
    .map((path) => {
      return path.startsWith(":") ? params[path.replace(":", "")] : path;
    })
    .join("/");
};
