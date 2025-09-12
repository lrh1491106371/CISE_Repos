/**
 * Function to sort data based on a sortKey, and whether the sorting should be reversed
 * or not.
 *
 * @param tableData The data to sort. This is an array of objects
 * @param sortkey The key to sort by.
 * @param reverse True if we should reverse the order of sorting (sorts ascending if
 * false, descending if true)
 * @returns
 */
export function sortData<T>(
  tableData: T[],
  sortkey: keyof T,
  reverse: boolean
): T[] {
  const sortedData = [...tableData].sort((a, b) => { // 添加 ...tableData 进行浅拷贝，避免修改原始数组
    if (a[sortkey] > b[sortkey]) {
      return 1;
    }
    if (a[sortkey] < b[sortkey]) {
      return -1;
    }
    return 0;
  });

  if (reverse) {
    return sortedData.reverse();
  }

  return sortedData;
}