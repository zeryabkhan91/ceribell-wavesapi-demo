import Papa from 'papaparse';

export const csvDataToArray = (string: string, multiplier = 1) => {
  if (!string) return [];

  // extract rows
  const csvRows = string.slice(string.indexOf('\n') + 1).split('\n');

  return csvRows
    .map((i) => i.split(','))
    .flatMap((item) =>
      item.map((val) => (Number(val) * multiplier).toString())
    );
};

export const convertColumnsToRows = (csvString: string): Promise<number[][]> =>
  new Promise((resolve, reject) => {
    const data: any = [];
    Papa.parse(csvString as any, {
      dynamicTyping: true,
      transform: (value, index) => {
        if (!Array.isArray(data[index])) {
          data[index] = [];
        }
      },
      complete() {
        resolve(data);
      },
      error() {
        reject(new Error('parsing error'));
      },
    });
  });
