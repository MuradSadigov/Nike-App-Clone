import { useNavigation } from "@react-navigation/native";
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  Text,
  useWindowDimensions,
  Pressable,
  Modal,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addCartItem } from "../store/cartSlice";
import { useState } from "react";

export const ProductDetailScreen = () => {
  const navigation = useNavigation();
  const product = useSelector((state) => state.products.selectedProduct);
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const { width } = useWindowDimensions();

  const addToCart = () => {
    dispatch(addCartItem({ product }));
    setModalVisible(true);
    setTimeout(() => navigation.navigate("Products"), 1500);
  };

  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image
              style={{ width: 100, height: 100 }}
              source={require("../../assets/check-green.gif")}
            />
            <Text style={styles.modalText}>Added to the Cart</Text>
          </View>
        </View>
      </Modal>

      <ScrollView>
        <FlatList
          data={product.images}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={{ width, aspectRatio: 1 }} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />

        <View style={{ padding: 20, paddingBottom: 90 }}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>${product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>

      <Pressable onPress={addToCart} style={styles.button}>
        <Text style={styles.buttonText}>Add to Chart</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: "500",
    marginVertical: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: "500",
    letterSpacing: 1.5,
  },
  description: {
    fontSize: 18,
    lineHeight: 30,
    fontWeight: "300",
    marginVertical: 10,
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 20,
    textAlign: "center",
  },
});
