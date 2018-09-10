import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";

import ReactMarkdown from "react-markdown";

const styles = theme => ({
  content: {
    width: 250,
    padding: ".5em"
  },
  fullList: {
    width: "auto"
  },
  progress: {
    padding: "1em",
    textAlign: "center"
  }
});

class SupportDrawer extends React.Component {
  getContent = () => {
    return <ReactMarkdown source={this.props.markdown} />;
  };

  render() {
    const { classes } = this.props;

    let content = (
      <div className={classes.progress}>
        <CircularProgress color="secondary" size={50} />
      </div>
    );
    if (!this.props.isFetching) {
      content = this.getContent();
    }

    return (
      <Drawer
        open={this.props.isOpen}
        anchor={this.props.position}
        onClose={this.props.close}
      >
        <div
          tabIndex={0}
          role="button"
          className={classes.content}
          variant="temporary"
        >
          <IconButton
            className={classes.button}
            aria-label="Close"
            onClick={this.props.close}
          >
            <Icon>close</Icon>
          </IconButton>
          <div>{content}</div>
        </div>
      </Drawer>
    );
  }
}

SupportDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
  markdown: PropTypes.string,
  supportItemKey: PropTypes.string,
  errorMessage: PropTypes.string,
  position: PropTypes.string,

  close: PropTypes.func.isRequired,

  classes: PropTypes.object.isRequired
};

SupportDrawer.defaultProps = {
  position: "right"
};

export default withStyles(styles)(SupportDrawer);
