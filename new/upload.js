import * as React from 'react';
import { Text, View, StyleSheet, ScrollView,TextInput,CheckBox } from 'react-native';
import TAPicker from './picker';
import TALabel from './label';

export default class App extends React.Component {
  render() {    
    return (

      <ScrollView > 
            <View style={styles.box}>
                <TALabel label="Country"/> 
                <TAPicker/>
                <TALabel label="City"/> 
                <TAPicker/>
                <TALabel label="Category"/> 
                <TAPicker/>
                <TALabel label="Sub Category"/> 
                <TAPicker/>
                <TALabel label="Description"/>
                <TextInput multiline={true} numberOfLines={5} style={{borderWidth:.5,margin:8}}/>
                <TALabel label="Price"/>
                <TextInput style={{borderWidth:.5,margin:10}}/>
                <View style={{flex:0,flexDirection:'row',alignItems:'center'}}>
                      <CheckBox style={{padding:8}} />
                      <Text style={{fontSize:17}}>Include content information</Text>
                </View>
                <Text style={{fontSize:18,margin:8}}>Payment method for item is 999 AED for each item</Text>
          </View>          

      </ScrollView>
  );
  }
}


const styles = StyleSheet.create({
  box:{
    padding:10,
  },
});

