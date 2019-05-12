import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class App extends React.Component {
  render() {    
    return (

            <View>
                  <Text style={{fontSize:20,padding:8}}>{this.props.label}</Text>                       
          </View>  
  );
  }
}
const styles = StyleSheet.create({
  
});

