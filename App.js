import React, { useState, useEffect } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from './screens/login-screen';
import HomeScreen from './screens/home-screen';
import HomeUserScreen from './screens/home-user-screen';
import jwt_decode from "jwt-decode"; 
import { createStackNavigator } from '@react-navigation/stack';
import { HomeStack } from './screens/navigation/stack';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="NEXO" component={HomeStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userRole, setUserRole] = useState('');
 

//   useEffect(() => {
//     AsyncStorage.getItem('token')
//       .then(token => {
//         if (token) {
//           setIsLoggedIn(true);
//           const decodedToken = decodeToken(token);
//           setUserRole(decodedToken.user.role.toString()); 
          
//         }
//       })
//       .catch(error => console.error('Error al obtener el token:', error));
//   }, []);

//   const decodeToken = token => {
//     const decoded = jwt_decode(token);
//     return decoded;
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     AsyncStorage.removeItem('token')
//       .catch(error => console.error('Error al eliminar el token:', error));
//   };

//   return (
//     <NavigationContainer>
//       {isLoggedIn ? (
        
//         userRole === 1 ? <HomeUserScreen /> : <HomeScreen onLogout={handleLogout} />
//       ) : (
//         <LoginScreen onLoginSuccess={() => setIsLoggedIn(true)} />
//       )}
//     </NavigationContainer>
//   );