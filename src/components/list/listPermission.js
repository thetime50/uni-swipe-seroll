import store from "@/store"
import dayjs from "dayjs"

//  返回true允许跳转 返回false不跳转
export function detailPmsCheck({
    url,// 完整的小程序路径
    pageName, //提示文本
    key,//一天弹窗一次查重的key
}){
    console.log(`store`, store)
    // const pmsDialog = store.state.listPage.pmsDialog
    const isAuth = store.getters['user/isAuth']
    const isLogin = store.getters['user/isLogin']

    if (!isLogin) { // 未登录跳转登录页
        uni.reLaunch({
            url: '/pages/login/index',
        })
        return false
    }

    if (isAuth){
        // 已登录 是会员
        return true
    }

    // 已登录 非会员

    const storageKey = `list-pms-dialog-${key}`
    const beforeDate = uni.getStorageSync(storageKey)
    const currentDate = dayjs().format('YYYY.MM.DD')
    if (beforeDate == currentDate) { // 今天提示过
        // uni.reLaunch({
        //     url: pmsDialog.url
        // })
        return true
    }
    uni.setStorageSync(storageKey, currentDate)
    store.commit('listPage/setPmsDialog', {
        url,
        pageName,
    })
    return false
}

