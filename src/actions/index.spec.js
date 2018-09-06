import * as actions from "./index";

describe("support actions", () => {
  it("supportItemRequest should create SUPPORT_ITEM_REQUEST action", () => {
    expect(actions.supportItemRequest("key")).toEqual({
      type: "SUPPORT_ITEM_REQUEST",
      key: "key"
    });
  });

  it("supportItemSuccess should create SUPPORT_ITEM_SUCCESS action", () => {
    expect(
      actions.supportItemSuccess({ key: "key", markdown: "#mkdn" })
    ).toEqual({
      type: "SUPPORT_ITEM_SUCCESS",
      item: { key: "key", markdown: "#mkdn" }
    });
  });

  it("supportItemFailure should create SUPPORT_ITEM_FAILURE action", () => {
    expect(actions.supportItemFailure("error!")).toEqual({
      type: "SUPPORT_ITEM_FAILURE",
      error: "error!"
    });
  });

  it("closeSupport should create CLOSE_SUPPORT_ITEM action", () => {
    expect(actions.closeSupport()).toEqual({
      type: "CLOSE_SUPPORT_ITEM"
    });
  });
});
