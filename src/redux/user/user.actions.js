import { userActionsTypes } from './user.actions.types'

export const setCurrentUser = user =>({
    type : userActionsTypes.SET_CURRENT_USER,
    payload : user
})

export default setCurrentUser;