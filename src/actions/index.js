export const supportItemRequest = key => ({
  type: "SUPPORT_ITEM_REQUEST",
  key
});

/**
 * An item should be of the form { key: 'key', markdown: 'mkdn' }
 */
export const supportItemSuccess = item => {
  return {
    type: "SUPPORT_ITEM_SUCCESS",
    item
  };
};

export const supportItemFailure = error => {
  return {
    type: "SUPPORT_ITEM_FAILURE",
    error
  };
};

export const closeSupport = () => ({
  type: "CLOSE_SUPPORT_ITEM"
});
