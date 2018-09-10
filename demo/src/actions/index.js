import "cross-fetch/polyfill";
import { supportItemRequest, supportItemSuccess } from "support-drawer-redux";

export function fetchSupportItem(key) {
  return function(dispatch) {
    dispatch(supportItemRequest(key));
    return getKey(key).then(supportItem =>
      dispatch(supportItemSuccess(supportItem))
    );
  };
}

function getKey(key) {
  let url = "https://api.myjson.com/bins/" + key;
  return fetch(url).then(
    response => response.json(),
    error => console.log("An error occurred.", error)
  );
}
