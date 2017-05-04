/**
 * Created by Jisen on 2017/5/4 0004.
 * 轮播管理路由配置 -- ChannelMmanagement
 */

import CarouselManagement from '@/pages/CarouselManagement'
import ChannelManagement from './ChannelManagement/index.js'
import SchedulingManagement from './SchedulingManagement/index.js'
import ProgramCheck from './ProgramCheck/index.js'
import ProgramView from './ProgramView/index.js'

const routes = {
  path: '/carouselManagement',
  name: 'CarouselManagement',
  component: CarouselManagement,
  redirect: '/carouselManagement/channelManagement',
  children: [
    ChannelManagement,
    SchedulingManagement,
    ProgramCheck,
    ProgramView
  ]
}

export default routes
