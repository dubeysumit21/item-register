import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { Container } from 'native-base';
import MainLogo from '../../assets/MainLogo.png';
import Back from '../../assets/back.png';
import FieldInput from '../../components/FieldInput';

class Home extends React.Component{

    onChangeText = value => {
        console.info(value);
    }

    itemConfig = [
        { name: 'Potatoes', id: 1, cost: 45, url: 'https://cdn.britannica.com/s:900x675/89/170689-131-D20F8F0A/Potatoes.jpg' },
        { name: 'Onions', id: 2, cost: 35, url: 'https://images-na.ssl-images-amazon.com/images/I/81UeYuulNjL._SL1500_.jpg' },
        { name: 'Garlic', id: 3, cost: 100, url: 'https://www.jessicagavin.com/wp-content/uploads/2019/09/types-of-garlic-1-1200.jpg' },
        { name: 'Ginger', id: 4, cost: 56, url: 'https://files.nccih.nih.gov/files/ginger-ThinkstockPhotos-531052216-square.jpg' },
        { name: 'Eggs', id: 5, cost: 78, url: 'https://chriskresser.com/wp-content/uploads/iStock-172696992.jpg' },
        { name: 'Mixture', id: 6, cost: 95, url: 'https://www.sweetkadai.com/123-large_default/buy-bombay-mixture-online.jpg' },
        { name: 'Flour', id: 7, cost: 40, url: 'https://nation.com.pk/print_images/medium/2020-01-19/stakeholders-blame-each-other-for-flour-crises-1579405888-2976.jpg' },
        { name: 'Mangoes', id: 8, cost: 80 , url: 'https://images.herzindagi.info/image/2019/Apr/tips-to-buy-mangoes.jpg'},
        { name: 'Incense Sticks', id: 9, cost: 100, url: 'https://ik.imagekit.io/bfrs/tr:w-550,h-582,pr-true,cm-pad_resize,bg-FFFFFF/image_ancientliving/data/Basil-Incense-1.jpg' },
        { name: 'Match Box', id: 10, cost: 100, url: 'https://3.imimg.com/data3/BN/NA/MY-1405286/safety-match-box-500x500.jpg' },
    ];

    render(){
        return(
            <View style={styles.main}>
                <Image source={MainLogo} style={styles.logoHeader} />
                <View style={styles.headingContainer}>
                    <Text style={styles.heading}>Available Items</Text>
                </View>
                <FieldInput 
                    item={{ placeholder: 'Search for items...', id: 3 }} 
                    customStyle={{ width: '94%' }}
                    onChangeText={this.onChangeText}
                />
                <View style={{ marginVertical: 20, justifyContent: 'center', alignItems: 'center' }}>
                    <FlatList 
                        data={this.itemConfig}
                        renderItem={({ item }) => 
                        <TouchableOpacity style={styles.individualTile}>
                            <Image source={{ uri: item.url }} style={{ width: 118, height: 91 }}/>
                            <Text style={styles.itemText}>{item.name}</Text>
                        </TouchableOpacity>}
                        numColumns={3}
                        scrollEnabled={true}
                        style={{ height: 400 }}
                    />
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
    individualTile: { paddingBottom: 7, justifyContent: 'flex-end', width: 120, height: 120, borderWidth: 1, borderColor: '#06A7AF', marginHorizontal: 5, marginVertical: 5, borderRadius: 3 },
    itemText: { width: '100%', textAlign: 'center' }
});

export default Home;