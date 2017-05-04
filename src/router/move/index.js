/**
 * Created by Jisen on 2017/5/4 0004.
 * d电影模块路由配置 -- move
 */

import Move from '@/pages/move/'
import Move1 from './move1'
import Move2 from './move2'
import Move3 from './move3'

const routes = {
  path: '/move',
  name: 'Move',
  component: Move,
  // redirect: '/move/move1',
  children: [
    Move1, Move2, Move3
  ]
}

export default routes
