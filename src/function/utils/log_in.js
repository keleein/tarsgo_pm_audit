export default {
    //判断输入账号密码是否正确，账号密码均正确返回1，密码错误返回2,账号不存在返回3，未填写账号密码返回4
    login: function(at, pw, st) {
        let at_jud = 0;
        let pw_jud = 0;
        return new Promise((resolve, reject) => {
            //未输入账号密码，直接返回
            if(at === '' || pw === '') {
                reject(4)
            }
            //遍历用户账号密码数据库
            st.forEach(item => {
                //存在账号
                if(item.account === at) {
                    at_jud = 1;
                    //密码正确
                    if(item.password === pw) {
                        pw_jud = 1;
                    }
                }
            })
            //判断返回值
            if(at_jud === 1 && pw_jud === 1){
                resolve(1)
            }else if(at_jud === 1 && pw_jud === 0){
                reject(2)
            }else if(at_jud === 0){
                reject(3)
            }
        })
    }
}
