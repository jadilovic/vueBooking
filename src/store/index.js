import { createStore } from 'vuex';

const store = createStore({
	state: {
		title: 'Vuex Store',
		isEdit: false,
		isInitial: true,
	},
	getters: {
		getIsInitial: (state) => state.isInitial,
	},
	mutations: {
		TOGGLE_EDIT(state) {
			state.isEdit = !state.isEdit;
		},
		TOGGLE_INITIAL(state) {
			console.log('store : ', state.isInitial);
			state.isInitial = !state.isInitial;
		},
	},
	actions: {},
});

export default store;
