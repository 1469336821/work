import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  // 首页
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // 学生端
  {
    path: '/student',
    name: 'student',
    component: () => import('../views/StudentView.vue'),

    children: [
      {
        path: '',
        component: () => import('../components/student/studentView1.vue'),
      },
      {
        path: 'view2',
        component: () => import('../components/student/studentView2.vue'),
      },
      {
        path: 'view3',
        component: () => import('../components/student/studentView3.vue'),
      },
      {
        path: 'view4',
        component: () => import('../components/student/studentView4.vue'),
      },
    ]
  },
  // 教师端
  {
    path: '/teacher',
    name: 'teacher',
    component: () => import('../views/TeacherView.vue'),

    children: [
      {
        path: '',
        component: () => import('../components/teacher/teacherView1.vue'),
      },
      {
        path: 'view2',
        component: () => import('../components/teacher/teacherView2.vue'),
      },
      {
        path: 'view3',
        component: () => import('../components/teacher/teacherView3.vue'),
      },
      {
        path: 'view4',
        component: () => import('../components/teacher/teacherView4.vue'),
      },
    ]
  },
  // 管理员端
  {
    path: '/root',
    name: 'root',
    component: () => import('../views/RootView.vue'),

    children: [
      {
        path: '',
        component: () => import('../components/root/rootView1.vue'),
      },
      {
        path: 'view2',
        component: () => import('../components/root/rootView2.vue'),
      },
      {
        path: 'view3',
        component: () => import('../components/root/rootView3.vue'),
      },
      {
        path: 'view4',
        component: () => import('../components/root/rootView4.vue'),
      },
      {
        path: 'view6',
        component: () => import('../components/root/rootView6.vue'),
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
