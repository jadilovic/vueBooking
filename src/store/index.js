import { createStore } from 'vuex';

const store = createStore({
	state: {
		title: 'Vuex Store',
		isEdit: false,
	},
	getters: {},
	mutations: {
		TOGGLE_EDIT(state, isEdit) {
			state.isEdit = !isEdit;
		},
	},
	actions: {},
});

export default store;
