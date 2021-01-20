

import React,{useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Pressable
} from 'react-native';

import D1 from './assets/dice1.png'
import D2 from './assets/dice2.png'
import D3 from './assets/dice3.png'
import D4 from './assets/dice4.png'
import D5 from './assets/dice5.png'
import D6 from './assets/dice6.png'

const App = ()=>{
  const[uri1,setUri1] = useState(D1)
  const[uri2,setUri2] = useState(D2)
  const playButtonPressed =()=>{
    let rnum1 = Math.floor((Math.random()*6)+1);
    let rnum2 = Math.floor((Math.random()*6)+1);

    switch(rnum1){
      case 1 :
        setUri1(D1);
        break; 
      case 2 :
        setUri1(D2);
        break; 
      case 3 :
        setUri1(D3);
        break; 
      case 4 :
        setUri1(D4);
        break; 
      case 5 :
        setUri1(D5);
        break; 
      case 6 :
        setUri1(D6);
        break;
        default :
        setUri1(D1);
        break; 
    }
    switch(rnum2){
      case 1 :
        setUri2(D1);
        break; 
      case 2 :
        setUri2(D2);
        break; 
      case 3 :
        setUri2(D3);
        break; 
      case 4 :
        setUri2(D4);
        break; 
      case 5 :
        setUri2(D5);
        break; 
      case 6 :
        setUri2(D6);
        break;
        default :
        setUri2(D1);
        break; 
    }
  }

  return (
    <>
    
      <View style = {styles.Container}>
      <Pressable onPress={playButtonPressed}>
        <Image style = {styles.img} source = {uri1}/>
        <Image style = {styles.img} source = {uri2}/>
      </Pressable>
      </View>
    
    </>
  )
}


const styles = StyleSheet.create({
  Container : {
    flex:1,
    backgroundColor: '#222831',
    alignItems : 'center',
    justifyContent: 'center',
  },
  img :{
    width :200,
    height :200
  },
  btn : {
    paddingHorizontal:40,
    paddingVertical  : 20,
    fontSize :20,
    marginTop:40,
    borderRadius:10,
    color : '#F2A365',
    borderColor:'#F2A365',
    borderWidth:3,
  }
})

export default App;
