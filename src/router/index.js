import {
  createRouter,
  createWebHistory
} from 'vue-router'

import BlackPlag from "@/components/BlackPlag.vue"
import BlackFile from "@/components/BlackFile.vue"
import MainPlag from "@/components/MainPlag.vue"
import SuccessPlag from "@/components/SuccessPlag"
import ProgressPlag from "@/components/ProgressPlag"
import AchievementCircle from "@/components/AchievementCircle.vue"
import AgainPlag from "@/components/AgainPlag.vue"
import UploadPlag from "@/components/UploadPlag.vue"
import CloudPlag from "@/components/CloudPlag.vue"

const routes = [

  {
    path: '/black-plag',
    name: 'BlackPlag',
    component: BlackPlag
  },
  {
    path: '/black-file',
    name: 'BlackFile',
    component: BlackFile
  },
  {
    path: '/main-plag/:id',
    name: 'MainPlag',
    component: MainPlag
  },
  {
    path: '/success-plag',
    name: 'SuccessPlag',
    component: SuccessPlag
  },
  {
    path: '/progress-plag',
    name: 'ProgressPlag',
    component: ProgressPlag
  },
  {
    path: '/achievement-circle',
    name: 'AchievementCircle',
    component: AchievementCircle
  },
  {
    path: '/again-plag',
    name: 'AgainPlag',
    component: AgainPlag
  },
  {
    path: '/upload-plag',
    name: 'UploadPlag',
    component: UploadPlag
  },
  {
    path: '/cloud-plag',
    name: 'CloudPlag',
    component: CloudPlag
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
