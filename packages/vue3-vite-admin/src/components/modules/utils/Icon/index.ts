import { h } from 'vue';

const iconJson = [
  {
    icon_id: '4781601',
    name: '地图',
    font_class: 'ditu',
    unicode: 'e610',
    unicode_decimal: 58896,
  },
  {
    icon_id: '288984',
    name: '微信',
    font_class: 'weixin',
    unicode: 'e679',
    unicode_decimal: 59001,
  },
  {
    icon_id: '1246668',
    name: '支付宝支付',
    font_class: 'zhifubao',
    unicode: 'e654',
    unicode_decimal: 58964,
  },
  {
    icon_id: '4936984',
    name: 'QQ',
    font_class: 'qq',
    unicode: 'e882',
    unicode_decimal: 59522,
  },
  {
    icon_id: '12884221',
    name: '系统管理',
    font_class: 'xitongguanli',
    unicode: 'e6ae',
    unicode_decimal: 59054,
  },
  {
    icon_id: '2472132',
    name: '500',
    font_class: 'icon-500',
    unicode: 'e683',
    unicode_decimal: 59011,
  },
  {
    icon_id: '412644',
    name: '403',
    font_class: '403',
    unicode: 'e79b',
    unicode_decimal: 59291,
  },
  {
    icon_id: '673799',
    name: '首页',
    font_class: 'shouye',
    unicode: 'e6cb',
    unicode_decimal: 59083,
  },
  {
    icon_id: '1009221',
    name: '关于',
    font_class: 'guanyu',
    unicode: 'e6a1',
    unicode_decimal: 59041,
  },
  {
    icon_id: '1115013',
    name: '404',
    font_class: '404',
    unicode: 'e605',
    unicode_decimal: 58885,
  },
  {
    icon_id: '2099018',
    name: '权限管理',
    font_class: 'quanxianguanli',
    unicode: 'e600',
    unicode_decimal: 58880,
  },
  {
    icon_id: '2468138',
    name: '角色管理',
    font_class: 'jueseguanli',
    unicode: 'e613',
    unicode_decimal: 58899,
  },
  {
    icon_id: '5243982',
    name: '插件',
    font_class: 'chajian',
    unicode: 'e69c',
    unicode_decimal: 59036,
  },
  {
    icon_id: '5323797',
    name: '系统管理_用户管理',
    font_class: 'yonghuguanli',
    unicode: 'e629',
    unicode_decimal: 58921,
  },
  {
    icon_id: '5777534',
    name: '路由管理',
    font_class: 'luyouguanli',
    unicode: 'e607',
    unicode_decimal: 58887,
  },
  {
    icon_id: '11682316',
    name: '异常分析',
    font_class: 'yichang',
    unicode: 'e637',
    unicode_decimal: 58935,
  },
  {
    icon_id: '30797724',
    name: '向右',
    font_class: 'xiangyou',
    unicode: 'e65b',
    unicode_decimal: 58971,
  },
  {
    icon_id: '30797726',
    name: '向左',
    font_class: 'xiangzuo',
    unicode: 'e65c',
    unicode_decimal: 58972,
  },
] as const;

type IconNameType = typeof iconJson[number]['font_class'];

export const icon = (iconName: IconNameType) => {
  return h('i', { class: `iconfont icon-${iconName}` });
};

export const Icon = (props: { iconName: IconNameType }) => icon(props.iconName);
