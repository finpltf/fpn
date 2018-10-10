import {
    SHOW_UK_SMALL_LIST,
    SHOW_UK_SMALL_LIST_MOBILE
} from '../../constants';

// Значения по умолчанию
const initialState = {
    showUkLIst: false,
    showUkLIstMobile: false
};


export default function (state = initialState, action) {
    switch (action.type) {
        case SHOW_UK_SMALL_LIST:
            return Object.assign({}, state, {
                showUkLIst: !state.showUkLIst,
            });
        case SHOW_UK_SMALL_LIST_MOBILE:
            return Object.assign({}, state, {
                showUkLIstMobile: !state.showUkLIstMobile,
            });
        default:
            return state;
    }
}
