/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const goodsRouter = {
  path: '/goods',
  component: Layout,
  redirect: 'noredirect',
  name: 'goods',
  meta: {
    title: 'goods',
    icon: 'goods'
  },
  children: [
    {
      path: 'goods-info',
      name: 'GoodsInfo',
      component: () => import('@/views/goodsMsg/goodsInfo/index'),
      meta: { title: 'GoodsInfo' }
    },
    {
      path: 'goods-batch',
      name: 'GoodsBatch',
      component: () => import('@/views/goodsMsg/goodsBatch/index'),
      meta: { title: 'GoodsBatch' }
    }
  ]
}

export default goodsRouter
