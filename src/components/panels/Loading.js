import React from 'react'
import { Component } from 'react'
import { Loading } from 'react-loading'


export class LoadScreen extends Component {
  render() {
    return (
      <Loading type='bars' color='#e3e3e3' />
    );
  }
};
