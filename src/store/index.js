import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import PlaylistModule from '@/store/modules/playlist';

export default new Vuex.Store({
    strict: true,
    modules: {
        PlaylistModule,
    }
});