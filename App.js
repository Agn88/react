//yarn add react-navigation -> Importando lib
import { createAppContainer, createStackNavigator } from 'react-navigation';
import PeoplePage from './source/pages/PeoplePage';
import PeopleDetailPage from './source/pages/PeopleDetailPage';

import { capitalizeFirstLetter } from './source/util';



const AppNavigator = createStackNavigator({
  
  'PeopleDetail': {
    screen: PeopleDetailPage,
    navigationOptions: ({navigation}) => {

      //const peopleName = capitalizeFirstLetter(
			//	navigation.state.params.people.name.first
      //);
      
      const peopleName = "@todo MUDAR ISSO"

      return ({
        title: peopleName,
        headerTitleStyle: {
          color: '#fff',
          fontSize: 30,
        }
      });
    }
  },
  'Main': {
    screen: PeoplePage
  },
}, {
  defaultNavigationOptions:{
    title: 'Pessoas',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#6ca2f7',
      borderBottomWidth: 1,
      borderBottomColor: '#C5C5C5'
    },
    headerTitleStyle:{
      color: 'white',
			fontSize: 30,

			// centralizar o header
			flexGrow: 1,
			textAlign: 'center'
    },
  }
});


const AppContainer = createAppContainer(AppNavigator);


export default AppContainer;


