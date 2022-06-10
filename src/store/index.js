import { createStore } from 'vuex';

const store = createStore({
	state: {
		title: 'Vuex Store',
		isEdit: false,
		isInitial: false,
	},
	getters: {},
	mutations: {
		TOGGLE_EDIT(state, isEdit) {
			state.isEdit = !isEdit;
		},
		TOGGLE_INITIAL(state, isInitial) {
			console.log('store : ', isInitial);
			state.isInitial = !isInitial;
		},
	},
	actions: {},
});

export default store;
