import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Senha:', password);
  };

  return (
    <View style={styles.container}>
    
      <View style={styles.square}>
      <Image
          source={require('../../../assets/sesi-logo.webp')}
          style={styles.image}
          resizeMode="contain"
        />
        
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={text => setEmail(text)}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    backgroundColor: '#E6E6E6'
  },
  square: {
    width: '90%',
    height: '40%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative', 
  },
  image: {
    height:"50%",
    width:'70%',
    borderRadius: 30 
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderBottomWidth: 1, 
    borderColor: '#000000',
    paddingHorizontal: 10,
    marginBottom: 10,
    paddingTop: '5%',
    fontSize: 20
  },
  button: {
    backgroundColor: '#FA5858', 
    borderRadius: 20, 
    paddingVertical: 10, 
    paddingHorizontal: 50, 
    marginTop: '3%'
  },
  buttonText: {
    color: 'white', 
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center', 
  },

});

export default Login;