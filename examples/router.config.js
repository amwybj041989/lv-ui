import Vue from 'vue';
import VueRouter from 'vue-router';
// 注册路由
Vue.use(VueRouter);

import {
  WelcomePage,

  ButtonPage,
  ProgressPage
} from './pages';

/* 路由配置 */
const routes = [
  { path: '', component: WelcomePage },
  { path: '/button', component: ButtonPage },
  { path: '/progress', component: ProgressPage }
  // { path: '/testresume', component: TestResumeDetail },
  // { path: '*', component: NotFoundPage }
];

/* 注册路由 */
const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;