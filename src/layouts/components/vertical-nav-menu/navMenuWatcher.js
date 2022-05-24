/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default [

    {
      url: "/performer-videos",
      name: "Jar Tv",
      slug: "video",
      icon: "VideoIcon",
      submenu: [
        {
          url: '/last-videos',
          name: 'Recientes',
          slug: 'dashboard-analytics',
          i18n: 'Analytics'
        },
        {
          url: '/buscar-performer',
          name: 'buscar',
          slug: 'dashboard-analytics',
          i18n: 'Analytics'
        },
        {
          url: '/upload-video',
          name: 'favoritas',
          slug: 'dashboard-analytics',
          i18n: 'Analytics'
        },
        {
          url: '/upload-video',
          name: 'tv',
          slug: 'dashboard-analytics',
          i18n: 'Analytics'
        },
      ]
      
    },

  ]
  