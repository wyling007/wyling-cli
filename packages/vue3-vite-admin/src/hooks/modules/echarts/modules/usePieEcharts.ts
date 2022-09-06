import { echartsPieOption } from '@/config';
import { useEcharts } from '@/hooks';

export const usePieEcharts = () => {
  const { echartsInstance, echartsRef } = useEcharts(echartsPieOption);

  return {
    pieEchartsRef: echartsRef,
    echartsInstance,
  };
};
