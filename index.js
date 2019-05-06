import Vue from 'vue'
import Router from 'vue-router'
// import SuiVue from 'semantic-ui-vue';
// import 'semantic-ui-css/semantic.min.css';
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Contact from '@/components/Contact'
import EditContact from '@/components/EditContact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/Helloworld',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/editcontact/:userId',
      name: 'EditContact',
      component: EditContact
    },
  ]
})

// Vue.use(SuiVue);
