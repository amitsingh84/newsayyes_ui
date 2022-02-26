import AppController from "../controller/AppController.vue"

import ControllLogin from "./views/ControllLogin.vue"
import ControllerDashboard from "./views/ControllerDashboard.vue"

const controllerRoutes=[{
    path:"/controller", component:AppController,
    children:[
        {
            path:'',component:ControllLogin
        },
        {
            path:'dashboard',component:ControllerDashboard
        }
    ]
}]

export default controllerRoutes;