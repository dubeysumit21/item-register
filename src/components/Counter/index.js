import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'native-base';

class Counter extends React.Component{
    state={
        quantity: 0.5
    };

    quantityUpdateHandler = type => {
        const { quantity } = this.state;
        if (type === 'increase') {
            this.setState(prevState => {
                return { quantity: prevState.quantity + 0.5 };
            });
        } else{
            if (quantity === 0.5) {
                return;
            }
            this.setState(prevState => {
                return { quantity: prevState.quantity - 0.5 };
            });
        }
    }

    render(){
        const { quantity } = this.state;
        return(
            <View style={styles.counterWrapper}>
                <Button style={styles.button} onPress={() => this.quantityUpdateHandler('decrease')}>
                    <Text style={styles.buttonText}>-</Text>
                </Button>
                <Text style={styles.quantity}>{quantity.toFixed(2)}</Text>
                <Button style={styles.button} onPress={() => this.quantityUpdateHandler('increase')}>
                    <Text style={styles.buttonText}>+</Text>
                </Button>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    counterWrapper: { flexDirection: 'row', width: '100%', justifyContent: 'center', marginTop: 20  },
    button: { height: 65 ,width: 65, backgroundColor: '#06A7AF' },
    buttonText: { color: '#FFFFFF', width: '100%', textAlign: 'center', fontSize: 56 },
    quantity: { width: 100, textAlign: 'center', fontSize: 42, paddingTop: 5 },

});

export default Counter;