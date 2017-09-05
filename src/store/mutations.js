import {
	INCREMENT,
	DECREMENT
} from './types'

export default {
	[INCREMENT](state) {
		state.count++;
	},
	[DECREMENT](state) {
		state.count--;
	}
}