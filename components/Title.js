import { StyleSheet, Text } from 'react-native';

import Colors from '../constants/colors';

function Title({children}) {
  return (
    <Text style={styles.title}>{children}</Text>
  );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.primaryOrange,
        textAlign: 'center',
        padding: 10,
        borderWidth: 2,
        borderColor: Colors.primaryOrange,
        borderRadius: 8
    }
})

export default Title;