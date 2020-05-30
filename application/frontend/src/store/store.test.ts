import { store, initialState } from './index';


test("Initial state equal to initialState", () => {
	const state = store.getState();
	expect(state).toBe(initialState);
});

test("Initial user is null", () => {
	const state = store.getState();
	expect(state.user).toBe(null);
});
