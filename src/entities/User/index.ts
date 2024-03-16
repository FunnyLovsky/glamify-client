import ProfileIcon from './ui/ProfileIcon/ProfileIcon'
import { authUser } from './model/sevices/auth'
import { Services } from './api/service'
import { loginUser } from './model/sevices/login'
import { logoutUser } from './model/sevices/logout'
import userSilce from './model/slice/userSilce'
import authSlice from './model/slice/authSlice'

export {
    ProfileIcon,
    authUser,
    Services,
    loginUser,
    logoutUser,
    userSilce as userReducer,
    authSlice as authReducer,
}
