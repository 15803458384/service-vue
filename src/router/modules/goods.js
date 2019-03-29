/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const goodsRouter = {
  path: '/goods',
  component: Layout,
  redirect: 'noredirect',
  name: 'goods',
  meta: {
    title: '商品管理',
    icon: 'goods'
  },
  children: [
    {
      path: 'goods-info',
      name: 'GoodsInfo',
      component: () => import('@/views/goodsMsg/goodsInfo/index'),
      meta: { title: '商品信息' }
    },
    {
      path: 'goods-batch',
      name: 'GoodsBatch',
      component: () => import('@/views/goodsMsg/goodsBatch/index'),
      meta: { title: '商品批处理' }
    }
  ]
}

export default goodsRouter
