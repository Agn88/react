import React from 'react';
import {Text, View } from 'react-native';

import Header from './source/components/Header';
import PeopleList from './source/components/PeopleList';

import axios from 'axios';

export default class App extends React.Component {

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
    return (
      <View>
        <Header title="Pessoas!"/>
        <PeopleList peoples={this.state.peoples}/>
      </View>
    );
  }
}
