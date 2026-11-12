import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import Boat from './Boats';

class AllBoats extends React.Component {
  render() {
    return (
        <ScrollView style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>GETABOAT - FOR SALE</Text>
            <Text style={styles.subtitle}>Find Your Dream Boat!</Text>
          </View>
          <Boat
              name={"SEA RAY 500 SUNDANCER"}
              description={"Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."}
              poster={require("./img/sea_ray.jpg")}
          />
          <Boat
              name={"FOUR WINNS HORIZON 180"}
              description={"A sporty look and refined details truly set the Horizon 180 above all others."}
              poster={require("./img/four_winns.jpg")}
          />
          <Boat
              name={"FLIPPER 640 ST"}
              description={"A modern take on the classic, traditional hardtop and perfect for a family picnic."}
              poster={require("./img/flipper.jpg")}
          />
          <Boat
              name={"PRINCESS V48"}
              description={"There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."}
              poster={require("./img/princess.jpg")}
          />
          <Boat
              name={"BAYLINER 175 BOWRIDER"}
              description={"Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."}
              poster={require("./img/bayliner.jpg")}
          />
          <Boat
              name={"FAIRLINE TARGA 47"}
              description={"Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."}
              poster={require("./img/fairline.jpg")}
          />
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    padding: 15,
  },

  header: {
    backgroundColor: 'navy',
    padding: 20,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 20,
    color: 'lightblue',
    textAlign: 'center',
    marginTop: 5,
  },
});

export default AllBoats;
