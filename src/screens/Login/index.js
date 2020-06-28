import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button } from 'native-base';
import MainLogo from '../../assets/MainLogo.png';
import FieldInput from '../../components/FieldInput';

class Login extends React.Component {
    state={
        phoneNumber: '',
        pin: '',
    };

    fieldConfig=[
        { placeholder: 'Phone Number', id: 1 },
        { placeholder: 'PIN', id: 2 },
    ];

    onChangeText = (value, id) => {
        switch(id){
            case 1: 
                this.setState({ phoneNumber: value});
                break;
            case 2: 
                this.setState({ pin: value});
                break;
            default: return;
        }
    };

    authenticateUserHandler = () => {
        console.info(this.state);
    };

    render(){
        return(
            <View style={styles.main}>
                <Image source={MainLogo} style={styles.logoHeader} />
                <View style={styles.loginHeader}>
                    <Text style={styles.subLoginText}>Login to Continue.</Text>
                </View>
                <View>
                    {this.fieldConfig.map(f => <FieldInput item={f} onChangeText={this.onChangeText}/>)}
                    <Button style={styles.loginButton} onPress={this.authenticateUserHandler}>
                        <Text style={styles.buttonText}>Login</Text>
                    </Button>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    main: { width: '100%', justifyContent: 'center', height: '100%' },
    loginHeader: { justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: 20 },
    loginText: { fontSize: 35, width: '100%', textAlign: 'center' },
    subLoginText: { fontSize: 22, color: '#06A7AF', width: '80%', textAlign: 'center' },
    loginButton: { width: '80%', backgroundColor: '#06A7AF', alignSelf: 'center', marginTop: 20, borderRadius: 5 },
    buttonText: { fontSize: 18, color: '#FFFFFF', textAlign: 'center', width: '100%' },
    logoHeader: { width: 240, height: 120, alignSelf: 'center' },
});

export default Login;