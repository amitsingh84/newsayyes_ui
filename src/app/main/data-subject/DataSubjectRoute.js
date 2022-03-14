import PasswordProtectedPage from "../data-subject/views/PasswordProtectedPage";
import EmailVerifyPage from "../data-subject/views/EmailVerifyPage.vue";
import DataSubjectController from "../data-subject/DataSubjectController";
import CreatePssword from "../data-subject/views/CreatePssword";
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
            path:'verify',component:EmailVerifyPage
        },
        {
            path:'email-verify',component:CreatePssword
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