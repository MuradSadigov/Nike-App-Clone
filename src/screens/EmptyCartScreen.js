import { View, Text, StyleSheet } from "react-native";

const EmptyCartScreen = () => {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.errorText}>Cart is Empty</Text>
      <Text style={styles.hintText}>
        You need to add a product to the cart.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  errorText: {
    fontSize: 26,
    fontWeight: "400",
  },
  hintText: {
    fontSize: 14,
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
});

export default EmptyCartScreen;
