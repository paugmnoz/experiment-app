import React, { Component } from 'react';

import './App.scss';
import { TestDashboard } from './components/TestDashboard/TestDashboard';
import { dashboardStore } from './store/DashboardStore';
import { observer } from "mobx-react";

@observer
export default class App extends React.Component {
  
  render(){
    document.body.addEventListener('click', () => {
      dashboardStore.atomClicks++;
      console.log(dashboardStore.atomClicks)
  }, true)
      return <TestDashboard></TestDashboard>
  }
}