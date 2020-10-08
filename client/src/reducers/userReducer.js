const initialUser = {
    login: false
}

export const user = (state = initialUser, action) => {
    switch (action.type) {
        case "LOGIN":
            let newState = {
                login: true,
                userid: action.payload.id,
                username: action.payload.username,
                fname: action.payload.fname,
                lname: action.payload.lname,
                role: action.payload.role
            }
            return newState
        case "LOGOUT":
            return initialUser

        default:
            return state
    }
}

// let initialvacations = []
// let vacations = {
//     id : {
//         action.payload
//      }
// }

// Add Vacation\
// newState = {
//     ...oldState,
//     [action.payload.id]: action.payload,
// }

// Ad to favorites
// newState = {
//     ...oldState,
//     [action.payload.id]: {
//         ...oldState[wantedId],
//             favorite: true 
//     },

// }

