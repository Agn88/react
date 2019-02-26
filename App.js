//yarn add react-navigation -> Importando lib
import { createAppContainer, createStackNavigator } from 'react-navigation';
import PeoplePage from './source/pages/PeoplePage';
import PeopleDetailPage from './source/pages/PeopleDetailPage';


const AppNavigator = createStackNavigator({
  'Main': {
    screen: PeoplePage
  },
  'PeopleDetail': {
    screen: PeopleDetailPage
  }
}, {
  defaultNavigationOptions:{
    title: 'Pessoas',
    headerStyle: {
      backgroundColor: '#6ca2f7',
      borderBottomWidth: 1,
      borderBottomColor: '#C5C5C5'
    },
    headerTitleStyle:{
      color: '#fff',
      fontSize: 30,
      flexGrow: 1,
      textAlign: 'center'
    }
  }
});


const AppContainer = createAppContainer(AppNavigator);


export default AppContainer;


