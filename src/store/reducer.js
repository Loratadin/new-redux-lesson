import * as actionTypes from './actions';

const initialState = {
    persons: [],
}

const reducer = (state = initialState, action) => { 
    switch (action.type) {
        case actionTypes.DELETE:
            const updatedArray = state.persons.filter(person => person.id !== personId)
                return {
                    ...state,
                    persons: updatedArray,
                }
        case actionTypes.ADD:
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: 'New Person',
                age: Math.floor( Math.random() * 40 )
            }
            return {
                ...state,
                persons: state.persons.concat(newPerson)
            }
    }
}

export default reducer;