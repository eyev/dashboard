export interface ChartCard {
  title: string;
  value: string;
  type: string;
  timeFrame: string;
  data: {
    name: string;
    series: any[];
  }[];
}

export function createChartCard(params: Partial<ChartCard>): ChartCard {
  return {
    title: '',
    value: '',
    type: '',
    timeFrame: '',
    data: [],
    ...params,
  };
}
