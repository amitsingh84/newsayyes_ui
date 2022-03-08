import AdminController from "../admin/AdminController.vue"

import AdminLogin from "./views/AdminLogin.vue"
import AdminAllForms from "./views/AdminAllForms.vue"
import AdminDashboard from "./views/AdminDashboard.vue"
import AdminShowAllUsers from "./views/AdminShowAllUsers.vue"
import AdminAllPlans from "./views/AdminAllPlans.vue"

const adminRoutes=[{
    path:"/admin", component:AdminController,
    children:[
        {
            path:'',component:AdminLogin
        },
        {
            path:'dashboard',component:AdminDashboard
        },
        {
            path:'forms',component:AdminAllForms
        },
        {
            path:'all-users',component:AdminShowAllUsers
        },
        {
            path:'all-plans',component:AdminAllPlans
        },
    ]
}]

export default adminRoutes;