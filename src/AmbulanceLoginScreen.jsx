import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView, TouchableOpacity, Alert } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import RNPickerSelect from 'react-native-picker-select';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';

const validationSchema = Yup.object().shape({
  user: Yup.string().required('Name is required'),
  experience: Yup.string().required('Experience is required'),
  address: Yup.string().required('Address is required'),
  mobile: Yup.string()
  .matches(/^[0-9]+$/, 'Mobile number must contain only digits')
  .min(10, 'Mobile number must be at least 10 digits')
  .max(15, 'Mobile number cannot be more than 15 digits')
  .required('Mobile number is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
  .min(6, 'Password must be at least 6 characters') 
  .max(15,'Password cannot be more than 15 characters')
  .required('Password is required'),
});

const AmbulanceLoginScreen = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigation = useNavigation();

  const handleLoginPress = (values) => {
    console.log('Logging in with values:', values);
    Alert.alert(
      'Login Successful',
      'You have successfully logged in!',
      [
        { text: 'OK', onPress: () => {
          console.log('OK Pressed');
          navigation.navigate('AmbulanceHomeScreen'); // Navigate to AmbulanceHomeScreen
        }}
      ],
      { cancelable: false }
    );
  };

  const handleSignupPress = () => {
    console.log('Navigating to signup screen or handling signup logic');
  };

  return (
    <Formik
      initialValues={{
        user: '',
        experience: '',
        address: '',
        mobile: '',
        email: '',
        password: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => handleLoginPress(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.loginBox}>
            <View style={styles.textcontainer}>
              <Text style={styles.text}>Please Enter Your Details</Text>
            </View>
            <View style={styles.usercontainer}>
              <FontAwesome name='user' size={20} color="black" style={styles.inputicon} />
              <TextInput
                style={styles.user}
                placeholder='Enter your name'
                placeholderTextColor="black"
                onChangeText={handleChange('user')}
                onBlur={handleBlur('user')}
                value={values.user}
              />
            </View>
            {touched.user && errors.user &&
              <Text style={styles.errorText}>{errors.user}</Text>
            }
            <View style={styles.experiencecontainer}>
              <RNPickerSelect
                onValueChange={handleChange('experience')}
                items={[
                  { label: '0-1 year', value: '0-1' },
                  { label: '1-2 years', value: '1-2' },
                  { label: '3-4 years', value: '3-4' },
                  { label: 'More than 5 years', value: '5+' },
                ]}
                placeholder={{
                  label: 'Select your experience...',
                  value: null,
                  color: 'black',
                }}
                style={pickerSelectStyles}
                value={values.experience}
              />
            </View>
            {touched.experience && errors.experience &&
              <Text style={styles.errorText}>{errors.experience}</Text>
            }
            <View style={styles.addresscontainer}>
              <FontAwesome name='home' size={20} color="black" style={styles.inputicon} />
              <TextInput
                style={styles.address}
                placeholder='Enter your address'
                placeholderTextColor="black"
                onChangeText={handleChange('address')}
                onBlur={handleBlur('address')}
                value={values.address}
              />
            </View>
            {touched.address && errors.address &&
              <Text style={styles.errorText}>{errors.address}</Text>
            }
            <View style={styles.mobilecontainer}>
              <FontAwesome name='phone' size={20} color="black" style={styles.inputicon} />
              <TextInput
                style={styles.mobile}
                placeholder='Enter your mobile number'
                placeholderTextColor="black"
                keyboardType='phone-pad'
                onChangeText={handleChange('mobile')}
                onBlur={handleBlur('mobile')}
                value={values.mobile}
              />
            </View>
            {touched.mobile && errors.mobile &&
              <Text style={styles.errorText}>{errors.mobile}</Text>
            }
            <View style={styles.emailcontainer}>
              <FontAwesome name='envelope' size={20} color="black" style={styles.inputicon} />
              <TextInput
                style={styles.email}
                placeholder='Enter your email'
                placeholderTextColor="black"
                keyboardType='email-address'
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
            </View>
            {touched.email && errors.email &&
              <Text style={styles.errorText}>{errors.email}</Text>
            }
            <View style={styles.passwordcontainer}>
              <FontAwesome name='lock' size={20} color="black" style={styles.inputicon} />
              <TextInput
                style={styles.password}
                placeholder='Create Your Own Password'
                placeholderTextColor="black"
                secureTextEntry={!passwordVisible}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
              <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                <FontAwesome name={passwordVisible ? 'eye' : 'eye-slash'} size={20} color="black" />
              </TouchableOpacity>
            </View>
            {touched.password && errors.password &&
              <Text style={styles.errorText}>{errors.password}</Text>
            }
            <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
            <Text style={styles.signupText} onPress={handleSignupPress}>
              Already Have an Account?.. Sign Up
            </Text>
          </View>
        </ScrollView>
      )}
    </Formik>
  );
};

export default AmbulanceLoginScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: "#f0eeee",
  },
  loginBox: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '90%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5,
  },
  textcontainer: {
    marginBottom: 25,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  usercontainer: {
    backgroundColor: "#d3cfcf",
    width: '100%',
    height: 50,
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  addresscontainer: {
    backgroundColor: "#d3cfcf",
    width: '100%',
    height: 50,
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  mobilecontainer: {
    backgroundColor: "#d3cfcf",
    width: '100%',
    height: 50,
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  emailcontainer: {
    backgroundColor: "#d3cfcf",
    width: '100%',
    height: 50,
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  passwordcontainer: {
    backgroundColor: "#d3cfcf",
    width: '100%',
    height: 50,
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  inputicon: {
    marginRight: 10,
  },
  user: {
    flex: 1,
  },
  address: {
    flex: 1,
  },
  mobile: {
    flex: 1,
  },
  email: {
    flex: 1,
  },
  password: {
    flex: 1,
  },
  experiencecontainer: {
    backgroundColor: "#d3cfcf",
    width: '100%',
    height: 50,
    justifyContent: 'center',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginVertical: 20,
  },
  loginButton: {
    backgroundColor: '#28a745',
    borderRadius: 20,
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupText: {
    marginTop: 10,
    fontSize: 16,
    color: '',
    textDecorationLine: 'underline',
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    color: 'black',
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    color: 'black',
    paddingRight: 30,
  },
  placeholder: {
    color: 'black',
  },
});
