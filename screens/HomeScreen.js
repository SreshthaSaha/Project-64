import * as React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity, Alert } from 'react-native';
import dictionary from '../database';

export default class HomeScreen extends React.Component {
    constructor(){
        super();
        this.state = {
            isSearchPressed: true,
            text : '',
            lexicalCategory : '',
            definition : "",
            word : ''
        }
    }
    getWord = (text)=>{
        var text = text.toLowerCase()
        try{
            var word = dictionary[text]["word"]
            var lexicalCategory = dictionary[text]["lexicalCategory"]
            var definition = dictionary[text]["definition"]
           
            this.setState({
                "word" : word,
                "lexicalCategory" : lexicalCategory,                
                "definition": definition
            })
        }  
        catch(err){
            Alert.alert("Sorry, This word is not available for now")
            this.setState({
                'text':'',
                'isSearchPressed ': false
            })
        }     
    }
render(){
    return(   
   <View style = {styles.Container}>
       <View>
           <Text style = {{fontWeight : 'bold',fontSize : 30}}>Dictionary App</Text>
       </View>
       <View style = {styles.container}>
            <TextInput
            style = {styles.inputBox}
            placeholder = "Enter word"
            onChangeText = {text =>{
                this.setState({
                    text:text,
                    isSearchPressed: false,
                    word : '',
                    lexicalCategory : '',
                    examples : [],
                    definition : ''
                    });
            }}
            value ={this.state.text}
            />
       </View>
       <View >
            <TouchableOpacity
            style = {{borderWidth : 3 , borderRadius : 5,marginTop : 20  ,width : 100,height : 50,justifyContent : 'center',backgroundColor:'#5811ff'}}
            onPress = {()=>{
                this.setState({isSearchPressed : "true"});
                this.getWord(this.state.text)
            }}
                ><Text style = {{fontWeight : 'bold',textAlign : 'center',fontSize:20}}>Search</Text>
            </TouchableOpacity>
        </View>
        <View>
            <Text style ={{fontSize :20,fontWeight:'bold',marginTop:20}}>
                Word :
            </Text>
            <Text style ={{fontSize :20,marginTop : -28,marginLeft: 65}}>
               {this.state.word}
            </Text>
        </View>
        <View>
            <Text style ={{fontSize :20,fontWeight:'bold',marginTop:30}}>
                Type :
            </Text>
            <Text style ={{fontSize :20,marginTop : -28,marginLeft: 65}}>
                {this.state.lexicalCategory}
            </Text>
        </View>
        <View style = {{flexDirection : 'row',flexWrap : 'wrap'}}>
            <Text style ={{fontSize :20,fontWeight:'bold',marginTop:30}}>
                Definition :
            </Text>
            <Text style ={{fontSize :20,marginTop:30}}>
                {this.state.definition}
            </Text>
        </View>
        
   </View>
    );
 }
}
const styles = StyleSheet.create({
    Container : {
        flex: 1,
        alignItems: 'center',
        backgroundColor :'#00ffdd'
    },
    inputBox: {
        width: 300,
        alignSelf: 'center',
        height: 40,
        textAlign: 'center', 
        borderWidth: 4,
        marginTop  :20,
        fontSize:20
    },

})