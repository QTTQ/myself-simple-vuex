import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const state = {
	count: 20
};

export default new Vuex.Store({
	// modules:{
	// 	mutations
	// },
	state,
	mutations,
	getters,
	actions
});