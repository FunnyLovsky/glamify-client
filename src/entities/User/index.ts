import ProfileIcon from './ui/ProfileIcon/ProfileIcon'
import { authUser } from './model/sevices/auth'
import { Services } from './api/service'
import { loginUser } from './model/sevices/login'
import { logoutUser } from './model/sevices/logout'
import userSilce, { clearError } from './model/slice/userSilce'
import authSlice from './model/slice/authSlice'
import { registUser } from './model/sevices/registr'

export {
    ProfileIcon,
    authUser,
    Services,
    loginUser,
    logoutUser,
    registUser,
    clearError,
    userSilce as userReducer,
    authSlice as authReducer,
}
