import Vue from 'vue';
import router from 'vue-router'
Vue.use(router)

import logIn from '../components/logIn';
import errPage from "@/components/errPage";
import auditPage from "@/components/auditPage";

const MyRouter = new router({
    routes:[
        {
            path: '/',
            redirect: '/log_in',
        },
        {
            path: '/log_in',
            component: logIn,
            name: 'logIn',
        },
        {
            path: '/err_page',
            component: errPage,
            name: 'errPage',
        },
        {
            path: '/audit_page/:account',
            component: auditPage,
            name: 'auditPage',
        },
    ]
})
export default MyRouter
