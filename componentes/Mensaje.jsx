import { View, Text, StyleSheet } from "react-native";

export default function Mensaje(props) {

    const variableMensaje = "Esto es mi mensaje";
    const num = 1000;

    const double = (n) => {
        return n * 2;
    };

    return (
        <View>
            <Text style={styles.mensaje}>
                {props.msg}
            </Text>

            <Text style={styles.mensaje}>
                {props.num}
            </Text>

            <Text style={styles.mensaje}>
                {double(props.num)}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    mensaje: {
        color: "red",
        backgroundColor: "yellow",
        padding: 5,
    },
});