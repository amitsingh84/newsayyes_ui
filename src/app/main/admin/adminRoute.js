import AdminController from "../admin/AdminController.vue"

import AdminLogin from "./views/AdminLogin.vue"
import AdminDashboard from "./views/AdminDashboard.vue"

const adminRoutes=[{
    path:"/admin", component:AdminController,
    children:[
        {
            path:'',component:AdminLogin
        },
        {
            path:'dashboard',component:AdminDashboard
        }
    ]
}]

export default adminRoutes;