import * as React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import EventReminder from './components/event-related/EventReminder';

const Nav = createBottomTabNavigator({
  CheckBox: {
    screen: EventReminder
  },
});

export default class extends React.Component {
  render() {
    return <Nav />;
  }
}
