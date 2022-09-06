import AMapLoader from '@amap/amap-jsapi-loader';
import '@amap/amap-jsapi-types';
import { onMounted, ref } from 'vue';
import { useLoading } from '@/hooks';

export const useMap = () => {
  /** div实例 */
  const mapRef = ref<HTMLDivElement>();

  /** map实例 */
  const mapInstance = ref<InstanceType<typeof AMap.Map>>();

  const { loading, setLoading } = useLoading();

  /** 初始化地图 */
  const initMap = async () => {
    setLoading(true);
    await AMapLoader.load({
      key: '4267e4e385492265450645c960ba8610', // 申请好的Web端开发者Key，首次调用 load 时必填
      version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins: [], //插件列表
    });
    if (mapRef.value) {
      mapInstance.value = new AMap.Map(mapRef.value, {
        center: [120.002023, 30.017042],
        zoom: 11,
        pitch: 0, // 地图俯仰角度，有效范围 0 度- 83 度
        viewMode: '3D', // 地图模式
        // defaultCursor: 'pointer',
      });
    }
    setLoading(false);
  };

  onMounted(initMap);

  return {
    mapRef,
    mapInstance,
    loading,
  };
};
