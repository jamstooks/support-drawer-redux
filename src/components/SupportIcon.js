import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";

const styles = theme => ({});

class SupportIcon extends React.Component {
  showKey = () => this.props.show(this.props.supportItemKey);

  render() {
    const { classes } = this.props;

    return (
      <IconButton
        className={classes.button}
        aria-label="Show"
        onClick={this.showKey}
      >
        <Icon>{this.props.iconName}</Icon>
      </IconButton>
    );
  }
}

SupportIcon.propTypes = {
  iconName: PropTypes.string,
  supportItemKey: PropTypes.string.isRequired,
  show: PropTypes.func.isRequired,

  classes: PropTypes.object.isRequired
};

SupportIcon.defaultProps = {
  iconName: "help"
};

export default withStyles(styles)(SupportIcon);
