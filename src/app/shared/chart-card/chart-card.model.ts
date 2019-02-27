export interface ChartCardConfig {
  title: string;
  value: string;
  type: string;
  timeFrame: string;
  data: {
    name: string;
    series: any[];
  }[];
}
