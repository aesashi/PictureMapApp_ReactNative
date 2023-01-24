import { useEffect } from "react";
import { Image, ScrollView, Text, View, StyleSheet } from "react-native";
import OutlinedButton from "../components/UI/OutlinedButton";
import { Colors } from "../constants/Colors";

export default function PlaceDetails({route}) {

  function showOnMapHandler() {

  }
  const selectedPlaceId = route.params.placeId;

  useEffect(()=> {
    //use selectedPlaceId to fetch data for a single place
  }, [selectedPlaceId]);


  return (
    <ScrollView>
      <Image
        style={styles.image}
      />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>ADDRESS</Text>
        </View>
        <OutlinedButton icon='map' onPress={showOnMapHandler}>
          View on Map
        </OutlinedButton>
      </View>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
  image: {
    height: '35%',
    minHeight: 300,
    width: '100%',
  },
  locationContainer: {
    justifyContent: 'center',
    alighItems: 'center',
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: Colors.primary500,
    textAlign: 'center',
    fontWeight: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  }
})
