# support-drawer-redux

An inline support tool that allows you to embed support icons in your
app that open up relevant documentation inside a drawer when clicked.

## Requirements

- [redux]
- [material-ui]

## Installation

    npm install react-inline-support

## Configuration

Since actions can vary significantly between applications, this
package doesn't provide actions of its own, and will require
you to write your own actions and one simple container.

Don't worry, it should be really simple and you can use the
example app for reference.

### Required Actions

 - `fetchSupportItem`

### Required Containers

 - `SupportIcon`
