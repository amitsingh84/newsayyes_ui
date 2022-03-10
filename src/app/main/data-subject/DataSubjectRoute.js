import PasswordProtectedPage from "../data-subject/views/PasswordProtectedPage";
import DataSubjectVerify from "../data-subject/views/DataSubjectVerify";
import DataSubjectController from "../data-subject/DataSubjectController";
import DataSubjectEmailVerify from "../data-subject/views/DataSubjectEmailVerify";
import DataSubjectMobileVerify from "../data-subject/views/DataSubjectMobileVerify";
import DataSubjectAddressVerify from "../data-subject/views/DataSubjectAddressVerify";
import AddressVerifyCode from "../data-subject/views/AddressVerifyCode";

const dataSubjectRoutes=[{
    path:"/data-subject", component:DataSubjectController,
    children:[
        {
            path:'',component:PasswordProtectedPage
        },
        {
            path:'verify',component:DataSubjectVerify
        },
        {
            path:'email-verify',component:DataSubjectEmailVerify
        },
        {
            path:'email-mobile',component:DataSubjectMobileVerify
        },
        {
            path:'email-address',component:DataSubjectAddressVerify
        },
        {
            path:'email-address-code',component:AddressVerifyCode
        },
        
    ]
}]
export default dataSubjectRoutes;