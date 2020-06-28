import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const FieldInput = props => {
    const { item, onChangeText, customStyle } = props;
    return(
        <View key={item.id} style={styles.textBoxholder}>
            <TextInput 
                style={{ ...styles.textBox, ...customStyle }} 
                placeholder={item.placeholder} 
                keyboardType={item.id === 2 ? 'number-pad' : 'default'}
                maxLength={item.id === 2 ? 4 : 10 }
                textContentType={item.id === 2 ? 'password' : 'telephoneNumber' }
                onChangeText={text => onChangeText(text, item.id)}
            />
        </View>
    );
}

const styles=StyleSheet.create({
    textBoxholder: { marginTop: 20, width: '100%', justifyContent: 'center', alignItems: 'center' },
    textBox: { paddingHorizontal: 10, width: '80%', borderWidth: 1, borderColor: '#06A7AF', borderRadius: 5, fontSize: 18 },
});

export default FieldInput;