import React from 'React';
import { View, Text, StyleSheet} from 'react-native';
import PeopleDetailPage from '../pages/PeopleDetailPage';

const Line = ({label, content}) => {
    return (
        <View style={styles.line}>
            <Text style={[styles.cell, styles.label]}> { label } </Text>
            <Text styles={styles.cell}> { content} </Text>
        </View>
    );
}

const styles = StyleSheet.create({
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


export default Line;