/**
 * Airbnb Clone App
 * @author: Andy
 * @Url: https://www.cubui.com
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../styles/colors';

import SubmitIssueContainer from '../features/submitissue/SubmitIssueContainer';
import SelectType from '../features/submitissue/screens/SelectType';
import SelectIssue from '../features/submitissue/screens/SelectIssue';
import SelectPrice from '../features/submitissue/screens/SelectPrice';
import AdditionalDetails from '../features/submitissue/screens/AdditionalDetails';
import Success from '../features/submitissue/screens/Success';
import Loading from '../features/submitissue/screens/Loading';

import problemlist from '../features/technicianside/problemlist';
import IssueList from '../features/technicianside/screens/IssueList';

const IssuesTab = createStackNavigator({
  TypesContainer: {
    screen: SubmitIssueContainer,
    navigationOptions: {
      title: 'Submit Issue'
    }
  },
  SelectType: { screen: SelectType },
  SelectIssue: { screen: SelectIssue },
  SelectPrice: { screen: SelectPrice },
  AdditionalDetails: { screen: AdditionalDetails },
  Success: { screen: Success },
  Loading: { screen: Loading }
});

const TechnicianTab = createStackNavigator({
  TypesContainer: {
    screen: problemlist,
    navigationOptions: {
      title: 'Fixit Trips'
    }
  },
  MapRedirect: { screen: IssueList }
});

const CustomTabBarIcon = (name, size) => {
  const icon = ({ tintColor }) => (
    <Icon name={name} size={size} color={tintColor} />
  );

  icon.propTypes = {
    tintColor: PropTypes.string.isRequired
  };

  return icon;
};

const LoggedInTabNavigator = createBottomTabNavigator(
  {
    Issues: {
      screen: IssuesTab,
      navigationOptions: {
        tabBarLabel: 'NEW ISSUE',
        tabBarIcon: CustomTabBarIcon('ios-ionic', 21)
      }
    },
    Technician: {
      screen: TechnicianTab,
      navigationOptions: {
        tabBarLabel: 'TECHNICIAN',
        tabBarIcon: CustomTabBarIcon('ios-archive-outline', 25)
      }
    }
  },
  {
    tabBarOptions: {
      labelStyle: {
        fontWeight: '600',
        marginBottom: 5
      },
      activeTintColor: colors.primary
    },
    tabBarPosition: 'bottom'
  }
);

export default LoggedInTabNavigator;
