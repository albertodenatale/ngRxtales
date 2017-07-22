import { ADD_GUEST, ADD_PERSON, REMOVE_PERSON, REMOVE_GUEST, TOGGLE_ATTENDING } from './actions';

export let detailsReducer = (state, action) => {
    if (state.id === action.payload) {
        switch (action.type) {
            case ADD_GUEST: return Object.assign({}, state, { guests: state.guests + 1 })
            case REMOVE_GUEST: return Object.assign({}, state, { guests: state.guests - 1 })
            case TOGGLE_ATTENDING: return Object.assign({}, state, { attending: !state.attending })
        }
    }

    return state;
}

export let peopleReducer = (state, action) => {
    if (state == null) {
        state = [];
    }
    switch (action.type) {
        case ADD_PERSON: return [
            ...state,
            Object.assign({}, { id: action.payload.id, name: action.payload.name, guests: 0, attending: false })
        ]
        case REMOVE_PERSON: return state.filter(person => person.id !== action.payload);
        case ADD_GUEST: return state.map(person => detailsReducer(person, action));
        case REMOVE_GUEST: return state.map(person => detailsReducer(person, action))
        case TOGGLE_ATTENDING: return state.map(person => detailsReducer(person, action))
        default: return state;
    }
}