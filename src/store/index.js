import { createStore } from 'vuex';

const store = createStore({
	state: {
		title: 'Vuex Store',
		isEdit: false,
		isInitial: true,
	},
	getters: {},
	mutations: {
		TOGGLE_EDIT(state, isEdit) {
			state.isEdit = !isEdit;
		},
		TOGGLE_INITIAL(state, isInitial) {
			state.isInitial = !isInitial;
		},
	},
	actions: {},
});

export default store;
