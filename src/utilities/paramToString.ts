export const paramToString = (param: any) => {
  if (param === null || param === undefined) {
    return "";
  }

  if (Array.isArray(param)) {
    return param
      .map((element) => {
        if (element !== null && element !== undefined) {
          return element.toString();
        } else {
          return "";
        }
      })
      .join(",");
  }

  return param.toString();
};
