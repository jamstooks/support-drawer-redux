# support-drawer-redux

[![Build Status](https://travis-ci.org/jamstooks/support-drawer-redux.svg?branch=master)](https://travis-ci.org/jamstooks/support-drawer-redux)

An inline support tool that allows you to embed support icons in your
app that open up relevant documentation inside a drawer when clicked.

See it in action with the [demo](https://codesandbox.io/s/github/jamstooks/support-drawer-redux/tree/master/demo).

## Requirements

- [redux](https://redux.js.org/)
- [material-ui](https://material-ui.com/)

## Installation

    npm install react-inline-support

## Configuration

Add `SupportDrawer` to the root of your app, and then add your
custom `SupportIcon` container within any component.

    import SupportIcon from "../containers/SupportIcon";
    import { SupportDrawer } from "support-drawer-redux";

    class App extends Component {
      render() {
        return (
          <div className="App">
            ...
            <SupportDrawer />
            <p>
              <SupportIcon supportItemKey="homepage-help"/>
            </p>
            ...
          </div>
        );
      }
    }                   
    export default App;

Most of the actions and all the reducers are written for you,
but you will need to create one action along with a custom container
for the `SupportIcon`.

Most implementations will be really simple and you can use the
[example app](./demo/) for reference.

### Required Actions

 - `fetchSupportItem`

### Required Containers

 - `SupportIcon`
