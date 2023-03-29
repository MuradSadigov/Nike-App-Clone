import CartListItem from "../components/CartListItem";
import { Text, StyleSheet, FlatList, View, Pressable } from "react-native";
import { useSelector } from "react-redux";
import { selectSubtotal, selectTotalPrice } from "../store/cartSlice";
import { selectDeliveryPrice } from "../store/cartSlice";

export const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const subtotal = useSelector(selectSubtotal);
  const delPrice = useSelector(selectDeliveryPrice);
  const totalPrice = useSelector(selectTotalPrice);

  return (
    <>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={() => (
          <View style={styles.totalContainer}>
            <View style={styles.row}>
              <Text style={styles.text}>Subtotal</Text>
              <Text style={styles.text}>{subtotal} $</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Delivery</Text>
              <Text style={styles.text}>{delPrice} $</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.textBold}>Total</Text>
              <Text style={styles.textBold}>{totalPrice} $</Text>
            </View>
          </View>
        )}
      />
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Checkout</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  totalContainer: {
    padding: 20,
    paddingTop: 10,
    borderColor: "gainsboro",
    borderTopWidth: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
    color: "gray",
  },
  textBold: {
    fontSize: 16,
    fontWeight: "500",
  },
  button: {
    position: "absolute",
    backgroundColor: "black",
    bottom: 30,
    width: "90%",
    alignSelf: "center",
    padding: 20,
    borderRadius: 50,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
  },
});
