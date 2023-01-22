// // // import {View} from 'react-native';
// // // import React,{FC} from 'react';
// // // import Signup from './Signup';
// // // // import Signup from './Signup';
 
// // // // const App: React.FC = () => {
// // // //   const handleSubmit = (username: string, email: string, password: string, employee: string, role: string) => {
// // // //       console.log(username, email, password, employee, role);
// // // //       // Perform some action with the form data, such as sending it to a server
// // // //   };

// // // //   return (
// // // //      <Signup onSubmit={handleSubmit}/>
// // // //   );
// // // // };
 

// // // // export default App;


// // // const App: React.FC = () => {
// // //   const handleSubmit = (username: string, email: string, password: string, employee: string, role: string) => {
// // //       console.log(username, email, password, employee, role);
// // //       // Perform some action with the form data, such as sending it to a server
// // //   };

// // //   return (
// // //     <View>
// // //       <Signup onSubmit={handleSubmit}/>
// // //       </View>
// // //   );
// // // };


// // // export default App;

// // import React,{FC,useState} from 'react';
// // import { Text,Button, TextInput } from 'react-native-paper'
// // import { View } from 'react-native';
// // import { SelectList } from 'react-native-dropdown-select-list'

// // const App:FC= () => {
// //   const [selected,setSelected]=React.useState('')
// //   const data=[{key:'1',value:"No Data Found"},
// //  ];
// //  return(
  
// //     <View>
// //       <Text style={{fontSize:20}}>User Creation Form</Text>
// //       <Text> ___________________________________________________________</Text>
// //       <Text style={{fontSize:18}}>                           User Details</Text>
// //   <Text> </Text>
// //   <View style={{flexDirection:'row'}}>

// //     <Text style={{color:'red'}}>*</Text>
 
// //   <Text > </Text>
// //   </View>
// //   <TextInput style={{width:300,height:30}}
// // placeholder=' Username'
// // mode='outlined'/>


// // <Text>&nbsp;</Text>
// //   <View style={{flexDirection:'row'}}>
// //     <Text style={{color:'red'}}>*</Text>

// //   <Text > </Text>
// //   </View>
// //   <TextInput style={{width:300,height:30}}
// // placeholder=' Password'
// // mode='outlined'/>

// // <Text>&nbsp;</Text>
// //   <View style={{flexDirection:'row'}}>
// //     <Text style={{color:'red'}}>*</Text>

// //   <Text > </Text>
// //   </View>
// //   <TextInput style={{width:300,height:30}}
// // placeholder=' Email'
// // mode='outlined'/>

// // <Text>&nbsp;</Text>
// //   <View style={{flexDirection:'row'}}>
// //     <Text style={{color:'red'}}>*</Text>
  
// //   <Text > </Text>
// //   </View>
// //   <TextInput style={{width:300,height:30}}
// // placeholder=' Role'
// // mode='outlined'/>

// // <Text>&nbsp;</Text>
// //   <View style={{flexDirection:'row'}}>
// //     <Text style={{color:'red'}}>*</Text>

// //   <Text > </Text>
// //   </View>
// //   <TextInput style={{width:300,height:30}}
// // placeholder=' Employee :'
// // mode='outlined'/>


// // <Text>&nbsp;</Text>
// //   <View style={{flexDirection:'row'}}>
// //     <Text style={{color:'red'}}>*</Text>
 
// //   <Text > </Text>
// //   </View>
// //   <TextInput style={{width:300,height:30}}

// // placeholder='Plant :'
// // mode='outlined'/>
// // <View style={{flexDirection:'row'}}>
// // <Button buttonColor='skyblue'
// //  textColor='white' style={{height:40,width:100,marginLeft:40,
// //   borderRadius:1}}>Submit </Button>

// // <Button   style=
// // {{height:40,width:100,marginRight:40,borderRadius:1}}>Reset</Button></View>
// // </View>
  
// //  )
// // }
// // export default App;


// import React,{useState} from 'react';
// import { View, StyleSheet } from 'react-native';
// import { TextInput, Button, HelperText, Text } from 'react-native-paper';

// const App = () => {
//   const [username, setUsername]= useState('');
//   const [password, setPassword] = useState('');
//   const [email, setEmail] = useState('');
//   const [role,setRole]=useState('');
//   const [employee,setEmployee]=useState('');
//   const [plant,setPlant]=useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = () => {
    
//     if (!username|| !password|| !email ||!role|| !employee|| !plant ) {
//       setError('Email and password are required');
//     } else {
//       // Add code here to handle form submission
//     }
//   };

//   return (
    
//     <View style={styles.container}>
//       <Text style={{fontSize:20}}>                  User Creation Form</Text>
//       <TextInput
//         label='User Name'
//         value={username}
//         onChangeText={setUsername}
//         style={styles.input}
//         mode="outlined"
//       />

// <TextInput
//         label='Password'
//         value={password}
//         onChangeText={setPassword}
//         style={styles.input}
//         secureTextEntry={true}
//         mode="outlined"
//       />
//       <TextInput
//         label='Email'
//         value={email}
//         onChangeText={setEmail}
//         style={styles.input}
//         mode="outlined"
//       />
//       <TextInput
//         label='Role'
//         value={role}
//         onChangeText={setRole}
//         style={styles.input}
     
//         mode="outlined"
//       />
//         <TextInput
//         label='Employee'
//         value={employee}
//         onChangeText={setEmployee}
//         style={styles.input}
//         secureTextEntry={true}
//         mode="outlined"
//       />
//         <TextInput
//         label='Plant'
//         value={plant}
//         onChangeText={setPlant}
//         style={styles.input}
//         secureTextEntry={true}
//         mode="outlined"
//       />
//       <HelperText type='error' visible={error !== ''}>
//         {error}
//       </HelperText>
//       <View style={{flexDirection:'row'}}>
//       <Button mode='contained' onPress={handleSubmit}  style={{marginLeft:30}} >
//         Submit
//       </Button>
//       <Button mode='contained' onPress={handleSubmit}  style={{marginLeft:80}}>
//         Reset
//       </Button>
//     </View>
// </View>
   
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   input: {
//     marginVertical: 10,
//   },
//   button: {
//     marginVertical: 10,
  
//   },
// });

// export default App;


import React from "react";
import { View } from "react-native";
import { TextInput,Button,Text } from "react-native-paper";
import Realm from "realm";

const UserSchema={
  name:'User',
  properties:{
    username:'string',
    email:'string',
    password:'string',
    role:'string',
    employee:'string',
    plant:'string',

  }
};

const realm=new Realm({
  path:'deepika.realm',
  schema:[UserSchema]
});

class App extends React.Component {
  state={
    
username:'',
    email:'',
    password:'',
    role:'',
    employee:'',
    plant:'',

  };
  handleChange=(name:any,value:string)=>{
    this.setState({[name]:value});
  }
  handleSubmit=()=>{
    const{username,email,password,role,employee,plant}=this.state;
    realm.write(()=>{
      realm.create('User',{username,email,password,role,employee,plant});
    })
  }
  render(){
    return(
      <View>
        <Text>username</Text>
        <TextInput value={this.state.username}
        onChangeText={username=>this.setState({username})}/>
<Text>email</Text>
        <TextInput value={this.state.email}
        onChangeText={email=>this.setState({email})}/>

<Text>password</Text>
        <TextInput value={this.state.password}
        onChangeText={password=>this.setState({password})}
        secureTextEntry={true}/>

<Text>Role</Text>
        <TextInput value={this.state.role}
        onChangeText={role=>this.setState({role})}/>

        
<Text>Employee</Text>
        <TextInput value={this.state.employee}
        onChangeText={employee=>this.setState({employee})}/>


        
<Text>plant</Text>
        <TextInput value={this.state.plant}
        onChangeText={plant=>this.setState({plant})}/>
<Button
onPress={()=>{Realm.open({schema:[UserSchema]}).then(realm=>{
  realm.write(()=>{
    const newUser=realm.create('user',{
username:this.state.email,
email:this.state.email,
password:this.state.password,
role:this.state.password,
employee:this.state.employee,
plant:this.state.plant

    });
  });
    
  });
}}
> submit</Button>
      </View>
    )
  }
};

export default App;


