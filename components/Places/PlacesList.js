import { useNavigation } from "@react-navigation/native";
import { FlatList, Text, View, StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";
import PlaceItem from "./PlaceItem";


export default function PlacesList({ places }) {
  const navigation = useNavigation();


  function selectPlaceHandler(id){
    navigation.navigate('PlaceDetails', {
      placeId: id
    });
  }


  if(!places || places.length === 0){
    return(
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>No places added yet - start adding more!</Text>
      </View>
    )
  }

    return (
      <FlatList
        data={places}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <PlaceItem onSelect={selectPlaceHandler} place={item}/>}
        />

    )
  }


  const styles = StyleSheet.create({
    fallbackContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    fallbackText: {
      fontSize: 16,
      color: Colors.primary200,
    }

  })
