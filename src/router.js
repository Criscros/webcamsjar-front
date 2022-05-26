/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Router from 'vue-router'

import auth from '@/auth/authService'

Vue.use(Router)

// VUE META 
import VueMeta from 'vue-meta';
Vue.use(VueMeta);


const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior () {
        return { x: 0, y: 0 }
    },
    routes: [
        // =============================================================================
        //  FRONT-END PAGES
        // =============================================================================
        
        {
          path: '',
          component: () => import('@/layouts/full-page/front-page.vue'),
          meta:{
            authRequired : true
          }
        },
        {
          path: '/estudio-webcam',
          component: () => import('@/layouts/full-page/studio-page.vue'),
          pageTitle: 'Crear Estudio Webcam',
          meta: {

          },
        },
        {
          path: '/ser-modelo-webcam',
          component: () => import('@/layouts/full-page/model-page.vue'),
          pageTitle: 'Ser Modelo Webcam',
        },
        {
          path: '/vender-videos',
          name :'vender videos',
          pageTitle: 'Vender Videos',
          component: () => import('@/layouts/full-page/model-page.vue'),
          meta: {
            rule: 'admin',
            authRequired : true
          },
        },
        {
          path: '/generar-nomina',
          name : 'generar nomina',
          pageTitle: 'Generar Nomina Atuomatica',
          component: () => import('@/layouts/full-page/model-page.vue'),
          meta: {
            rule: 'admin',
            authRequired : true
          }
        },
        {
          path: '/buscar-studio',
          name :'Buscar Estudio',
          pageTitle: 'Buscar Estudio',
          component: () => import('@/layouts/full-page/search-studio.vue'),
        },
        {
          path: '/noticias',
          pageTitle: 'Noticias',
          component: () => import('@/layouts/full-page/noticias.vue'),
        },
        // =============================================================================
        // ADMIN LAYOUT ROUTES
        // =============================================================================
        {
            path: '',
            component: () => import('./layouts/main/Main.vue'),
            children: [
              
              {
                path: '/performers',
                name: 'performer',
                component: () => import('./views/performers/PerformerList.vue'),
                meta: {
                  rule: 'admin',
                  authRequired : true
                }
              },
             
              {
                path: '/last-videos',
                name: 'last videos',
                component: () => import('./views/performers/LastVideos.vue'),
                meta: {
                  rule: 'admin',
                  authRequired : true
                }
              },
            
              {
                path: '/page2',
                name: 'page-2',
                component: () => import('./views/Page2.vue')
              },
            ],
        },
        // =============================================================================
        // FULL PAGE LAYOUTS
        // =============================================================================
        {
            path: '',
            component: () => import('@/layouts/full-page/FullPage.vue'),
            children: [
        // =============================================================================
        //  AUTH  PAGES
        // =============================================================================
              {
                path: '/login',
                name: 'page-login',
                pageTitle: 'logiin estudios',
                component: () => import('@/views/login/Login.vue')
              },
              {
                path: '/pages/error-404',
                name: 'page-error-404',
                component: () => import('@/views/pages/Error404.vue')
              },
              {
                path: '/register',
                name: 'register',
                pageTitle: 'Registrarme como estudio',
                component: () => import('@/views/register/Register.vue')
              },
              {
                path: '/forgot-password',
                name: 'page-forgot-password',
                component: () => import('@/views/login/ForgotPassword.vue'),
                meta: {
                  rule: 'editor'
                }
              },
              {
                path: '/api/resetpassword/auth/:id/:token',
                name: 'page-forgot-password',
                component: () => import('@/views/login/ResetPassword.vue'),
                meta: {
                  rule: 'editor'
                }
              }

            ]
        },
        // Redirect to 404 page, if no match found
        {
            path: '*',
            redirect: '/pages/error-404'
        }
    ],
})

router.beforeEach((to, from, next) => {
  
  // Remove initial loading
  console.log('beforEach',to)
  // AUTH ROUTES .....
  if(to.meta.authRequired){
    if (!(auth.isAuthenticated())) {

        next({ name: 'page-login' })
    
    }
    //IF NO LOGIN 
    next()
  }
  next()
})

router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
    if (appLoading) {
        appLoading.style.display = "none";
    }
})

export default router
