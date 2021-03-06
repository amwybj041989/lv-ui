import Vue from 'vue';
import VueRouter from 'vue-router';
// 注册路由
Vue.use(VueRouter);

import {
  WelcomePage,
  NotFoundPage,

  ButtonPage,
  ProgressPage,
  FormsPage,
  AuxiliarPage,
  TabPage,
  AccordionPage,
  TablePage,

  PaginationPage,
  TreePage,

  LayDatePage,

  ModalPage
} from './pages';

/* 路由配置 */
const routes = [
  { path: '', component: WelcomePage },
  { path: '/button', component: ButtonPage },
  { path: '/progress', component: ProgressPage },
  { path: '/forms', component: FormsPage },
  { path: '/auxiliar', component: AuxiliarPage },
  { path: '/tab', component: TabPage },
  { path: '/accordion', component: AccordionPage },
  { path: '/table', component: TablePage },
  { path: '/pagination', component: PaginationPage },
  { path: '/tree', component: TreePage },
  { path: '/laydate', component: LayDatePage },
  { path: '/modal', component: ModalPage },
  { path: '*', component: NotFoundPage }
];

/* 注册路由 */
const router = new VueRouter({
  mode: 'hash',
  routes
});

export default router;
