# support-drawer-redux

[![Build Status](https://travis-ci.org/jamstooks/support-drawer-redux.svg?branch=master)](https://travis-ci.org/jamstooks/support-drawer-redux)

An inline support tool that allows you to embed support icons in your
app that open up relevant documentation inside a drawer when clicked.

## Requirements

- [redux](https://redux.js.org/)
- [material-ui](https://material-ui.com/)

## Installation

    npm install react-inline-support

## Configuration

Most of the actions and all the reducers are written for you,
but you will need to create one along with a custom container
for the `SupportIcon`.

Most implementations will be really simple and you can use the
example app (coming soon) for reference.

### Required Actions

 - `fetchSupportItem`

### Required Containers

 - `SupportIcon`
