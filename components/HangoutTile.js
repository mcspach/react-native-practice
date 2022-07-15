import { Pressable, View, Text, StyleSheet, ImageBackground } from 'react-native';

function HangoutTile({ title, category, imageUrl, onPress }) {
    const image = { uri: imageUrl };
    return (
        <View style={styles.tile}>
            <ImageBackground source={image} style={{width: '100%', height: '100%'}}>
            <Pressable
            style={({pressed}) => [
                styles.container, 
                pressed ? styles.buttonPressed : null,
            ]}
            onPress={onPress}
            >
                <View>
                    <View style={styles.titlesContainer}>
                        <Text style={styles.titleText}>{title}</Text>
                        <Text style={styles.categoryText}>{category}</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Pressable>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Visit</Text>
                        </View>
                        </Pressable>
                    </View>
                </View>
            </Pressable>
            </ImageBackground>
        </View>
    );
}

export default HangoutTile;

const styles = StyleSheet.create({
  tile: {
    marginHorizontal: 12,
    marginVertical: 8,
    height: 160,
    width: 160,
    borderRadius: 12,
  },
  container: {
    width: 160,
    height: 160,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, .6)',
    borderRadius: 12,
    borderColor: 'white',
    borderWidth: .5,
  },
  titlesContainer: {
    height: 90,
    width: 150,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    marginTop: -20,
    marginBottom: 4,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'hotpink',
    textAlign: 'center',
  },
  categoryText: {
    color: 'white',
    textAlign: 'center',
  },
  buttonContainer: {
    height: 50,
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    width: 120,
    backgroundColor: 'hotpink',
    padding: 6,
    borderRadius: 16,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
  buttonPressed: {
    borderWidth: 2,
  }
});