import { connect } from "react-redux";
import { closeSupport } from "../actions";
import SupportDrawer from "../components/SupportDrawer";

const mapStateToProps = state => ({
  isOpen: state.support.isOpen,
  isFetching: state.support.isFetching,
  markdown: state.support.markdown,
  key: state.support.key,
  errorMessage: state.support.key
});

const mapDispatchToProps = dispatch => ({
  close: () => dispatch(closeSupport())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SupportDrawer);
