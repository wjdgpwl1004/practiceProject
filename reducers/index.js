import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

import auth from './auth';
import user from './user';

// (이전상태, 액션) => 다음상태
const rootReducer = (state, action) => {
    switch (action.type) {
        case HYDRATE:
            return action.payload;
        default: {
            const combinedReducer = combineReducers({
                auth,
                user,
            });
            return combinedReducer(state, action);
        }
    }
};

export default rootReducer;