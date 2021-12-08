import dayjs from 'dayjs'
// import {getLoginMode} from '@/utils/auth.js'; // 循环引用了

export default {
    namespaced: true,
    state: {
		userInfo: {},
	},
    mutations: {
        setUserInfo(state, data) {
			state.userInfo = data
			uni.setStorageSync('userinfo',data)
		},
    },
	actions: {
		// 
	},
}