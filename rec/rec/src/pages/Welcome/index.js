
import React from 'react';
import { 
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

import { useNavigation } from '@react-navigation/native'

export default function Welcome() {
  const navigation = useNavigation

 return (
   <View styles={styles.container}>
       
       <View>
         <Image
          source={require('../../assets/logo-nike-1200x900')}
          style={{ width: '100%' }}
          resizeMode='contain'
        />
       </View>

       <View style={styles.containerForm}>
        <Text style={styles.title}>Monitore, organize seus gastos de qualquer lugar!</Text>
        <Text style={styles.text}>Faça o login para começar</Text>

        <TouchableOpacity 
        style={styles.button}
        onPress={ () => navigation.navigate('SingIn')}
        >
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
       </View>

   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#706F6F'
  },
  containerLogo: {
    flex: 2,
    backgroundColor: '#706F6F',
    justifyContent: 'center',
    alignitems: 'center'
  },
  containerForm: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
  },
  text: {
    color: '#a1a1a1'
  },
  button: {
    position: 'absolute',
    backgroundColor: '#706F6F',
    borderRadius: 50,
    paddingVerttical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '15%',
    alignitems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  }
})