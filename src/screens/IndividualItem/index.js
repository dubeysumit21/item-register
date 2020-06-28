import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { Button } from 'native-base';
import MainLogo from '../../assets/MainLogo.png';
import Back from '../../assets/back.png';
import FieldInput from '../../components/FieldInput';
import Counter from '../../components/Counter';

class IndividualItem extends React.Component{

    render(){
        return(
            <View style={styles.main}>
                <Image source={MainLogo} style={styles.logoHeader} />
                <View style={styles.headingContainer}>
                    <Text style={styles.heading}>Potatoes</Text>
                </View>
                <View style={styles.itemDetailsContianer}>
                    <View style={styles.itemInfoWrapper}>
                        <Image source={{ uri: 'https://cdn.britannica.com/s:900x675/89/170689-131-D20F8F0A/Potatoes.jpg' }} style={styles.itemImage}/>
                        <View style={styles.infoDetailsWrapper}>
                            <Text style={styles.itemName}>Potatoes</Text>
                            <Text style={styles.itemStock}>In Stock : </Text>
                            <Text style={styles.itemPriceLabel}>Price : <Text style={styles.itemPrice}>₹ 45/KG</Text></Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 20, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.itemPriceLabel}>Item Break up</Text>
                        <Counter />
                        <View style={{ width: '95%', justifyContent: 'center', marginTop: 20, position: 'relative', top: 110 }}>
                            <Button style={{ backgroundColor: '#06A7AF', height: 60 }}>
                                <Text style={{ color: '#FFFFFF', fontSize: 36, width: '100%', textAlign: 'center' }}>Total : ₹ 90.00</Text>
                            </Button>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    main: { width: '100%', justifyContent: 'center' },
    logoHeader: { width: 150, height: 70, alignSelf: 'center', marginTop: 20 },
    heading: { fontSize: 18, color: '#06A7AF', textAlign: 'center' },
    headingContainer: { borderBottomWidth: 1, width: '94%', padding: 15, alignSelf: 'center', borderBottomColor: '#00000040' },
    itemDetailsContianer: { marginVertical: 20, justifyContent: 'center', alignItems: 'center' },
    itemInfoWrapper: { width: '95%', flexDirection: 'row', justifyContent: 'space-between' },
    itemImage: { width: 218, height: 150 },
    infoDetailsWrapper: { width: '50%', marginLeft: 10 },
    itemName: { fontSize: 30 },
    itemStock: { fontSize: 18, color: '#A4A4A4' },
    itemPriceLabel: { fontSize: 18, color: '#A4A4A4' },
    itemPrice: { fontSize: 18, color: '#228B22' },
});

export default IndividualItem;