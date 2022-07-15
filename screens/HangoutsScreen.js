import { View, FlatList, StyleSheet } from 'react-native';
 
import { HANGOUTS } from '../data/data';

import HangoutTile from '../components/HangoutTile';

function HangoutsScreen({ navigation }) {
  function renderHangoutItem(itemData) {

    function pressHandler() {
      navigation.navigate('HangoutDetailsScreen');
    }

    return (
        <HangoutTile 
        title={itemData.item.title} 
        color={itemData.item.color} 
        category={itemData.item.category}
        imageUrl={itemData.item.imageUrl}
        onPress={pressHandler}
        />
    );
}
    return (
      <View style={styles.screen}>
        <FlatList 
        data={HANGOUTS} 
        keyExtractor={(item)=> item.id} 
        renderItem={renderHangoutItem} 
        numColumns={2}
        />
      </View>
    );
}
export default HangoutsScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 25,
  }
})
