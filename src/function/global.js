import log_in from './utils/log_in'
import Obj from '../entity/Obj'

export default {
    //登陆判断函数
    login_func:async function(at, pw) {
        return new Promise((resolve, reject) => {
            log_in.login(at, pw, Obj.administrators).then(res => {
                console.log('验证正确')
                resolve(res)
            }).catch(rej => {
                console.log('验证失败')
                reject(rej)
            })
        })
    }
}
