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
      url: "/sucursals",
      name: "Sedes",
      slug: "sucursal",
      icon: "HomeIcon",
      submenu: [
        {
          url: '/create-sucursal',
          name: 'agregar sede ',
          slug: 'dashboard-analytics',
          i18n: 'Analytics'
        },
        {
          url: '/sucursals',
          name: 'ver sedes',
          slug: 'dashboard-analytics',
          i18n: 'Analytics'
        },
      ]
      
    }
  ]