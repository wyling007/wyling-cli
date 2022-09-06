import { onBeforeUnmount, onMounted } from 'vue';
import { echartsClockOption } from '@/config';
import { CronJob } from 'cron';
import { useEcharts } from '@/hooks';

/** 使用时钟图表 */
export const useClockEcharts = () => {
  const { echartsRef, echartsInstance } = useEcharts(echartsClockOption);

  const calcTime = new CronJob('* * * * * *', function () {
    const date = new Date();
    const second = date.getSeconds();
    const minute = date.getMinutes() + second / 60;
    const hour = (date.getHours() % 12) + minute / 60;

    echartsInstance.value?.setOption({
      series: [
        {
          name: 'hour',
          animation: hour !== 0,
          data: [{ value: hour }],
        },
        {
          name: 'minute',
          animation: minute !== 0,
          data: [{ value: minute }],
        },
        {
          animation: second !== 0,
          name: 'second',
          data: [{ value: second }],
        },
      ],
    });
  });

  onMounted(() => {
    calcTime.start();
  });
  onBeforeUnmount(() => {
    calcTime.stop();
  });

  return {
    clockEchartsRef: echartsRef,
  };
};
