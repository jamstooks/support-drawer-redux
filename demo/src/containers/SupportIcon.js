import { connect } from "react-redux";
import { fetchSupportItem } from "../actions";
import { SupportIcon } from "support-drawer-redux";

const mapStateToProps = (state, ownProps) => ({
  supportItemKey: ownProps.supportItemKey
});

const mapDispatchToProps = dispatch => ({
  show: supportItemKey => dispatch(fetchSupportItem(supportItemKey))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SupportIcon);
