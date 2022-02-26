import AppController from "../controller/AppController.vue"

import ControllerLogin from "./views/ControllerLogin.vue"
import ControllerDashboard from "./views/ControllerDashboard.vue"

import ControllerDatasubject from "./views/ControllerDatasubject.vue"
import ControllerNewForm from "./views/ControllerNewForm.vue"
import ControllerRegister from "./views/ControllerRegister.vue"
const controllerRoutes=[{
    path:"/controller", component:AppController,
    children:[
        {
            path:'',component:ControllerLogin, name:'controller Login'
        },
        {
            path:'dashboard',component:ControllerDashboard, name:'controller Dashboard'
        },
        {
            path:'alldatasubject',component:ControllerDatasubject, name:'controller Datasubject'
        },
        {
            path:'createform',component:ControllerNewForm, name:'create form'
        },
        {
            path:'register',component:ControllerRegister, name:'controller Register'
        },
        // {
        //     path:'alldatasubject',component:ControllerDatasubject
        // },
        // {
        //     path:'alldatasubject',component:ControllerDatasubject
        // },
    ]
}]

export default controllerRoutes;