export const NEW_STORIES = "NEW_STORIES";
export const ITEM = "ITEM";

const initialState = { items: [], item: [] };

const storyReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_STORIES:
      return {
        ...state,
        items: action.payload.data
      };
    case ITEM:
      return {
        ...state,
        item: action.payload.data
      };
    default:
      return state;
  }
};

export default storyReducer;
