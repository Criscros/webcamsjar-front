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
      name: "Videos",
      slug: "video",
      icon: "VideoIcon",
      submenu: [
        {
          url: '/performer-videos',
          name: 'Mis videos',
          slug: 'dashboard-analytics',
          i18n: 'Analytics'
        },
        {
          url: '/upload-video',
          name: 'agregar video',
          slug: 'dashboard-analytics',
          i18n: 'Analytics'
        },
      ]
      
    },

  ]
  