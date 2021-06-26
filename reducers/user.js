import produce from 'immer';

export const initialState = {

};

const reducer = (state = initialState, action) => produce(state, (draft) => {
    switch (action.type) {
        // case REMOVE_FOLLOWER_REQUEST:
        //     draft.removeFollowerLoading = true;
        //     draft.removeFollowerError = null;
        //     draft.removeFollowerDone = false;
        //     break;
        default:
            break;
    }
});

export default reducer;