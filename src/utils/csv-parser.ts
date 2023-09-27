export const csvFileToArray = (string: string) => {
  if (!string) return [];

  // extract header
  const csvHeader = string.slice(0, string.indexOf('\n')).split(',');
  // extract rows
  const csvRows = string.slice(string.indexOf('\n') + 1).split('\n');

  return csvRows.map((i) => {
    const values = i.split(',');
    return csvHeader.reduce((object, header, index) => {
      const o: Record<any, any> = { ...object };
      o[header] = values[index];
      return object;
    }, {});
  });
};
