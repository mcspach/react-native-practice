import { StyleSheet, View, Text } from 'react-native';

function GuessLogItem({ roundNumber, guess}) {
    return (
        <View style={styles.logItem}>
            <Text style={styles.guessNumber}>{guess}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    logItem: {
        backgroundColor: 'rgba(255, 255, 230, .7)',
        padding: 3,
        width: 48,
        height: 48,
        borderRadius: 24,
        margin: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0 },
    },
    guessNumber: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
    }
})

export default GuessLogItem;