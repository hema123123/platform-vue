const Login=resolve=>{require(['@/pages/login/login'],resolve)}
const LoginMobile=resolve=>{require(['@/pages/login/login-mobile'],resolve)}
const Home=resolve=>{require(['@/pages/home/home'],resolve)}
const Category=resolve=>{require(['@/pages/category/category'],resolve)}
const Topic=resolve=>{require(['@/pages/topic/topic'],resolve)}
const Cart=resolve=>{require(['@/pages/cart/cart'],resolve)}
const Center=resolve=>{require(['@/pages/center/center'],resolve)}
const Account=resolve=>{require(['@/pages/account/account'],resolve)}
const AddressUpdate=resolve=>{require(['@/pages/address-update/address-update'],resolve)}
const AccountName=resolve=>{require(['@/pages/account/account-name'],resolve)}
const Search=resolve=>{require(['@/pages/search/search'],resolve)}
const GoodsByCategory=resolve=>{require(['@/pages/goods-by-category/goods-by-category'],resolve)}
const Order=resolve=>{require(['@/pages/order/order'],resolve)}
const Checkout=resolve=>{require(['@/pages/checkout/checkout'],resolve)}
const CheckoutAddress=resolve=>{require(['@/pages/checkout-address/checkout-address'],resolve)}
const Transaction=resolve=>{require(['@/pages/transaction/transaction'],resolve)}
const Goods=resolve=>{require(['@/pages/goods/goods'],resolve)}
const Evaluate=resolve=>{require(['@/pages/evaluate/evaluate'],resolve)}

export default [
  {
    path: '/',
    name: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/login-mobile',
    name: 'loginMobile',
    meta: {
      title: '手机号登录'
    },
    component: LoginMobile
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      keepAlive: true
    },
    component: Home
  },
  {
    path: '/category',
    name: 'category',
    meta: {
      keepAlive: true
    },
    component: Category
  },
  {
    path: '/topic',
    name: 'topic',
    meta: {
      keepAlive: true
    },
    component: Topic
  },
  {
    path: '/cart',
    name: 'cart',
    meta: {
      keepAlive: true
    },
    component: Cart
  },
  {
    path: '/center',
    name: 'center',
    meta: {
      keepAlive: true
    },
    component: Center
  },
  {
    path: '/account',
    name: 'account',
    meta: {
      title: '个人资料',
      requiresAuth: true
    },
    component: Account
  },
  {
    path: '/address/update',
    name: 'address-update',
    meta: {
      requiresAuth: true
    },
    component: AddressUpdate
  },
  {
    path: '/account/name',
    name: 'account-name',
    meta: {
      title: '修改昵称',
      requiresAuth: true
    },
    component: AccountName
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  },
  {
    path: '/goods-by-category',
    name: 'goods-by-category',
    component: GoodsByCategory
  },
  {
    path: '/order',
    name: 'order',
    meta: {
      title: '我的订单',
      requiresAuth: true
    },
    component: Order
  },
  {
    path: '/checkout',
    name: 'checkout',
    meta: {
      title: '确认信息',
      requiresAuth: true
    },
    component: Checkout
  },
  {
    path: '/checkout/address',
    name: 'checkout-address',
    meta: {
      title: '选择地址',
      requiresAuth: true
    },
    component: CheckoutAddress
  },
  {
    path: '/transaction/:id',
    name: 'transaction',
    meta: {
      requiresAuth: true
    },
    component: Transaction
  },
  {
    path: '/goods/:id',
    name: 'goods',
    component: Goods
  },
  {
    path: '/evaluate',
    name: 'evaluate',
    meta: {
      title: '评价详情'
    },
    component: Evaluate
  }
]
