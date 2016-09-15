import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

export default class AccountUIWrapper extends Component {
  componentDidMount() {
    // use Meteor Blaze to render the Login buttons
    this.view = Blaze.render(Template.loginButtons,
      ReactDom.findDOMNode(this.refs.container));
  }
  componentWillUnmount() {
    // Clean up Blaze view
    Blaze.remove(this.view);
  }
  render() {
    // render the placeholder to be filled in
    // by Blaze in componentDidMount
    return <span ref="container" />;
  }
}
