/**
 * Created by Jisen on 2017/5/4 0004.
 */

import ResourceManagement from '@/pages/ResourceManagement'
import DirectoryTree from './DirectoryTree/index.js'
import ResourceUpload from './ResourceUpload/index.js'
import ResourceAudit from './ResourceAudit/index.js'

const routes = {
  path: '/resourceManagement',
  name: 'ResourceManagement',
  component: ResourceManagement,
  redirect: '/resourceManagement/directoryAudit',
  children: [
    DirectoryTree,
    ResourceUpload,
    ResourceAudit
  ]
}

export default routes
