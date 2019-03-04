import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class PeopleDetailPage extends React.Component {
     render(){

        //const { people } = this.props.navigation.state.params;
        const people = {
            "gender": "male",
            "name": {
              "title": "mr",
              "first": "rolf",
              "last": "hegdal"
            },
            "location": {
              "street": "ljan terrasse 346",
              "city": "vear",
              "state": "rogaland",
              "postcode": "3095",
              "coordinates": {
                "latitude": "54.8646",
                "longitude": "-97.3136"
              },
              "timezone": {
                "offset": "-10:00",
                "description": "Hawaii"
              }
            },
            "email": "rolf.hegdal@example.com",
            "login": {
              "uuid": "c4168eac-84b8-46ea-b735-c9da9bfb97fd",
              "username": "bluefrog786",
              "password": "ingrid",
              "salt": "GtRFz4NE",
              "md5": "5c581c5748fc8c35bd7f16eac9efbb55",
              "sha1": "c3feb8887abed9ec1561b9aa2c9f58de21d1d3d9",
              "sha256": "684c478a98b43f1ef1703b35b8bbf61b27dbc93d52acd515e141e97e04447712"
            },
            "dob": {
              "date": "1975-11-12T06:34:44Z",
              "age": 42
            },
            "registered": {
              "date": "2015-11-04T22:09:36Z",
              "age": 2
            },
            "phone": "66976498",
            "cell": "40652479",
            "id": {
              "name": "FN",
              "value": "12117533881"
            },
            "picture": {
              "large": "https://randomuser.me/api/portraits/men/65.jpg",
              "medium": "https://randomuser.me/api/portraits/med/men/65.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/men/65.jpg"
            },
            "nat": "NO"
          }


         return (
            <View style={styles.container}>
                <Image 
                    source={{ uri: people.picture.large }}
                    style={styles.avatar}    />
                <View style={styles.detailContainer}>
                    <View style={styles.line}>
                        <Text style={[styles.cell, styles.label]}>Email: </Text>
                        <Text style={styles.cell}>{people.email}</Text>
                    </View>
                </View>
            </View>
         );
     }
}


const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    avatar: {
        aspectRatio: 1
    },
    detailContainer: {
        backgroundColor: '#e2f9ff',
        marginTop: 20,
        elevation: 1
    },
    line: {
        flexDirection: 'row',
        paddingTop: 3,
        paddingBottom: 3,
        borderWidth: 1, 
        borderColor: '#C5C5C5',
    },
    cell: {
        fontSize: 18,
        paddingLeft: 5
    },
    label: {
      fontWeight: 'bold',
    }

});