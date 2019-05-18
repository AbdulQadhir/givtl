import React, { Component } from 'react';
import {StyleSheet, Text, CheckBox, View, ScrollView, TextInput} from 'react-native';
import TALabel from './label';
import TAPicker from './picker';
import GButton from './btnRed';
import { connect } from "react-redux";

class UploadFrm extends Component {

  
  static navigationOptions = ({ navigation }) => {
      return {
      headerTitle: (<View style={{ flex:1, alignItems:"center" }}><Text style={{ textAlign:"center", color:"#FFF", fontSize: 18, fontWeight:"bold" }} >Post Gift</Text></View>),
      }
  };

  componentDidMount = () => {
    
  };

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
                      <Text style={{fontSize:15}}>Include contact information</Text>
                </View>
                <GButton label="Upload" />
                <Text style={{fontSize:15,fontWeight: "bold", margin:8, textAlign: "center"}}>Payment method for each item is 9.99 AED for each item</Text>
          </View>          

      </ScrollView>
    )
  }
}

const mapStateToProps = ({  }) => ({
  
});

const mapDispatchToProps = dispatch => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadFrm);


const styles = StyleSheet.create({
  box:{
    padding:10,
  },
});