const support = (
  state = {
    isOpen: false,
    isFetching: false,
    key: null,
    markdown: null,
    errorMessage: null
  },
  action
) => {
  switch (action.type) {
    case "SUPPORT_ITEM_REQUEST":
      return {
        ...state,
        ...{
          isFetching: true,
          isOpen: true,
          key: null,
          markdown: null,
          errorMessage: null
        }
      };
    case "SUPPORT_ITEM_SUCCESS":
      return {
        ...state,
        ...{
          isFetching: false,
          key: action.item.key,
          markdown: action.item.markdown
        }
      };
    case "SUPPORT_ITEM_FAILURE":
      return {
        ...state,
        ...{
          isFetching: false,
          errorMessage: action.response.result
        }
      };
    case "CLOSE_SUPPORT_ITEM":
      return { ...state, ...{ isOpen: false } };
    default:
      return state;
  }
};

export default support;
