import { LayoutHeader } from '@/layouts/BasicLayout';
import { root_avatar_img } from '@/assets/images';

export const layout = (config: any) => {
  return {
    ...config,
    headerRender: () => <LayoutHeader />,
    iconfontUrl: '//at.alicdn.com/t/font_2724271_ywgl62i7sen.js',
    logo: root_avatar_img,
    title: false,
    fixSiderbar: true,
    breakpoint: false,
    defaultCollapsed: false,
    fixedHeader: true,
    siderWidth: 200,
    layout:"mix"
  };
};