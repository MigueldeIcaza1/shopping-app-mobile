import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


export function Order({ navigation }) {

    function navigateToShopping() {
        navigation.navigate('Products');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Your order is confirmed. </Text>
            <Text style={styles.label}>Please find the below.</Text>
            <Text style={styles.label}>Tracking Number: 1122334455</Text>

            <TouchableOpacity style={styles.shoppingButton} onPress={navigateToShopping}>
                <Text style={styles.btnText}>BACK TO SHOPPING</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
    },
    label: {
        fontSize: 18,
        padding: 15
    },
    shoppingButton: {
        alignItems: "center",
        justifyContent: "center",
        height: 40,
        marginTop: 10,
        color: "#fff",
        backgroundColor: "orange",
        borderRadius: 5,
        padding: 10,
        paddingRight: 20,
        paddingLeft: 20,
        height: 50,
        fontSize: 15,
        marginBottom: 20,
        borderRadius: 5
      },
});
