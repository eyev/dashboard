export interface GaugeChart {
  name: string;
  value: number;
}

export function createGaugeChart(params: Partial<GaugeChart>): GaugeChart {
  return {
    name: '',
    value: 0,
    ...params,
  };
}
