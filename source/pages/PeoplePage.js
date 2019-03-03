import React from 'react';
import {Text, View } from 'react-native';
import PeopleList from '../components/PeopleList';

import axios from 'axios';

export default class PeoplePage extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      peoples: []
    };
  }

  componentDidMount(){
    /* Promises */
    axios
      .get('https://randomuser.me/api/?nat=br&results=5')
      .then(response => {
        const { results } = response.data;
        this.setState({
          peoples: results
        });
    })

  }



  render() {
    //this.props.navigation.navigate(' Chave da página, State')
    //this.props.navigation.navigate('PeopleDetail');
    return (
        <View>
            <PeopleList 
                peoples={this.state.peoples}
                onPressItem={pageParams => {
                    this.props.navigation.navigate('PeopleDetail', pageParams);
                }} />
        </View>
    );
  }
}
