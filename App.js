import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './source/components/Header';

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

  renderList(){
    const textElements = this.state.peoples.map(people => {
      const { first } = people.name;
      return <Text key={first}>{ first }</Text>
    })

    return textElements;
  }


  render() {
    return (
      <View>
       
        <Header title="Pessoas!"/>
        {this.renderList()}
      </View>
    );
  }
}
