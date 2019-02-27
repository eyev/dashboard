export interface LineChart {
  name: string;
  series: { name: string; value: string }[];
}

/**
 * A factory function that creates LineChart
 */
export function createLineChart(params: Partial<LineChart>) {
  return {
    name: '',
    series: [],
    ...params,
  };
}
