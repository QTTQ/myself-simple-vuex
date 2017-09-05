export default {
	count: (state) => {
		return state.count;
	},
	getOdd: (state) => {
		return state.count % 2 == 0 ? '偶数' : '奇数'
	}
}

// const getters = {
// 	count(state) {
// 		return state.count;
// 	},
// 	getOdd(state) {
// 		return state.count % 2 == 0 ? '偶数' : '奇数';
// 	}
// };
// export default{
// 	getters
// }