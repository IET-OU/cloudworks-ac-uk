/*!
 Vue.js app - Display a list of influential users.

 © The Open University (IET)

 Nick Freear, 02-Jul-2019
 https://gist.github.com/nfreear/7e4821e0209226175197dd8634e1c17b
*/

/* global CLOUDWORKS_INFLUENCERS: false */

const Vue = window.Vue;

// import CLOUDWORKS_INFLUENCERS from '../_scripts/influencers-data';
// import Vue from 'https://unpkg.com/vue@2.6.10/dist/vue.js';

Vue.component('CloudworksInfluencers', {

  template: '#cloudworks-influencers-vue-template',

  data () {
    return {
      users: [],
      HOST: null,
    }
  },

  methods: {
    inst (user) {
      return user.institution === 'ou' ? 'The Open University' : user.institution;
    },
  },

  created () {
    const LOC = window.location;

    this.users = CLOUDWORKS_INFLUENCERS.alumni;
    this.HOST = LOC.hostname === 'iet-ou.github.io' ? '/cloudworks-ac-uk/' : '/';

    console.warn('Influencers-vue ~ created:', this)
  },
})

new Vue({  el: '#app' })

/* new Vue({
  el: '#app',

  data () {
    return {
      users: [],
    }
  },

  mounted () {
    this.users = CLOUDWORKS_INFLUENCERS.alumni;

    console.warn('Vue.js app:', this)
  },
}) */
