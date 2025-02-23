
const initialState = {
    favourites: {
        content: [],
    },
}

const mainReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_TO_FAV':
            return {
                ...state,
                favourites: {
                    ...state.favourites,
                    content: [...state.favourites.content, action.payload],
                },
            }
        case 'REMOVE_FROM_FAV':
            return {
                ...state,
                favourites: {
                    ...state.favourites,

                    content: state.favourites.content.filter((el, i) => i !== action.payload),
                },
            }
        default:

            return state
    }
}

export default mainReducer