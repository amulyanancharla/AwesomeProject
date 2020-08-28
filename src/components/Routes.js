import React, { useState } from "react";
import { StyleSheet, View, ScrollView, TextInput, Image, TouchableOpacity } from "react-native";
import { Container, Button, Icon, Text, Card, CardItem} from "native-base";
import colors from "./theme/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Searchbar } from "react-native-paper";

const Routes = () => {
  const [value, onChangeText] = React.useState('');
  const Click = () => {
    console.log("Hello");
  };

  return (
      <ScrollView style={styles.container}>
        <View style={styles.headerWrapper}>
          <Text style={styles.header}>ROUTES</Text>
        </View>
        <View style={styles.containerTwo}>
          <View style={styles.searchField}>
            <Searchbar
              style={styles.searchBar}
              onChangeText={text => onChangeText(text)}
              value={value}
              placeholder="Search Zones and Wards"
            />
          </View>
          <View style={styles.area}>
            <TouchableOpacity style={styles.areaButton} onPress={Click}>
              <Text style={styles.areaText}>Kukatpally</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.areaButton} onPress={Click}>
              <Text style={styles.areaText}>Madhapur</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.areaButton} onPress={Click}>
              <Text style={styles.areaText}>Gachibowli</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.showAll} onPress={Click}>
              <Text style={styles.areaText}>Show All</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.routeText}>EXISTING ROUTES</Text>
          <Card style={styles.card}>
            <CardItem>
              <View style={styles.mapCard}>
                <Image
                  style={styles.mapImage}
                  source={{
                    uri: 'https://documentation.logianalytics.com/logiinfov12/content/resources/images/gmpolylines_01.png',
                  }}
                />
                <View style={styles.address}>
                  <Text style={styles.addressTitle}>5th Phase KPHB,Kukatpally</Text>
                    <View style = {styles.avatarFrame}>
                      <Image
                        style = {styles.avatar}
                          source={{
                            uri:
                              "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
                          }}
                      ></Image>

                      <Text style={styles.totalWorkers}>23 Workers</Text>
                      <Text style={styles.workersStatus}>IN PROGRESS</Text>
                    </View>
                </View>
              </View>
            </CardItem>
            <View style = {styles.button}>
              <TouchableOpacity style={styles.textButton} onPress={Click}>
                <Text style={styles.textButtonOne}>Disable</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.textButton} onPress={Click}>
                <Text style={styles.textButtonTwo}>Edit</Text>
              </TouchableOpacity>
            </View>
          </Card>
          <Card style={styles.card}>
            <CardItem>
              <View style={styles.mapCard}>
                <Image
                  style={styles.mapImage}
                  source={{
                    uri: 'https://documentation.logianalytics.com/logiinfov12/content/resources/images/gmpolylines_01.png',
                  }}
                />
                <View style={styles.address}>
                  <Text style={styles.addressTitle}>5th Phase KPHB,Kukatpally</Text>
                    <View style = {styles.avatarFrame}>
                      <Image
                        style = {styles.avatar}
                          source={{
                            uri:
                              "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
                          }}
                      ></Image>
                      <Text style={styles.totalWorkers}>23 Workers</Text>
                    </View>
                </View>
              </View>
            </CardItem>
            <View style = {styles.button}>
              <TouchableOpacity style={styles.textButton} onPress={Click}>
                <Text style={styles.textButtonOne}>Disable</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.textButton} onPress={Click}>
                <Text style={styles.textButtonTwo}>Edit</Text>
              </TouchableOpacity>
            </View>
          </Card>
          <TouchableOpacity style = {styles.addWorker}>
            <MaterialIcons name="add" color={colors.white} size={hp(6)} style={{alignSelf:"center",marginTop:hp(1)}} onPress={Click} />
          </TouchableOpacity>
        </View>
      </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex:1
  },
  headerWrapper: {
    borderBottomWidth: wp(0.5),
    borderColor: colors.grey,
    height: hp("7%"),
  },
  header: {
    fontFamily: "Roboto",
    textAlign: "center",
    margin: hp(2),
    fontWeight: "bold",
    color: colors.accent,

  },
  containerTwo:{
    marginTop: hp(3),
    marginLeft: wp(3),
    marginRight: wp(3),
  },
  searchField:{
    backgroundColor:colors.white
  },
  searchBar: {
    height: hp(10),
    borderColor: colors.grey,
    borderWidth: 1,
    padding: 18,
    borderRadius: 12,
    fontFamily: "Roboto",
    fontWeight: "bold",


  },
  area: {
    flexDirection: "row",
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 12,
    marginTop: hp(2),
  },
  areaButton: {
    height: hp(5),
    borderWidth: 1,
    borderRadius: 15,
    borderColor: colors.grey,
    padding: 13,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 2
  },
  areaText: {
    fontWeight: 'bold',
    marginTop: 1,
    color:colors.primary
  },
  showAll: {
    height: hp(4),
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 2,
  },
  routeText: {
    marginTop: 15,
    color: colors.accent,
    fontWeight: 'bold',
    fontFamily: "Roboto",
    marginLeft: wp(3)
  },
  card: {
    flex: 1,
    marginLeft: wp(2),
    marginRight: wp(1),
    marginTop: hp(3),
    borderColor:colors.grey,
    borderWidth: 2,
    backgroundColor:colors.white,
  },
  mapCard:{
    shadowOffset: { width: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
  },
  mapImage: {
    height: hp(20),
    width: wp(83),
    borderWidth:0,
    marginTop:0,
    borderColor:colors.grey,
  },
  address: {
    padding: 10
  },
  addressTitle:{
    fontWeight: "bold"
  },
  avatarFrame:{
   marginTop:hp(2),
   flexDirection: "row"
  },
  avatar:{
    height:hp(6),
    width:hp(6),
    borderWidth:1,
    borderRadius:hp(5),
    borderColor:colors.grey,
  },
  totalWorkers:{
    marginTop: hp(1),
    marginLeft: wp(4),
    color:colors.primary,
    fontFamily: "Roboto",
    fontWeight: "bold"
  },
  workersStatus:{
    marginTop: hp(1),
    marginLeft: wp(20),
    color:colors.green,
    fontFamily: "Roboto",
    fontWeight: "bold"
  },
  button:{
    marginTop: 1,
    marginBottom:hp(2),
    flexDirection:"row",
    borderTopWidth:0.5,
    justifyContent:"space-around"
  },
  textButtonOne:{
    marginVertical:wp(1),
    color:colors.accent,
    marginTop: hp(2)
  },
  textButtonTwo:{
    marginVertical:wp(1),
    color:colors.primary,
    marginTop: hp(2),
  },
  addWorker:{
    backgroundColor:colors.primary,
    height:hp(8),
    width:hp(8),
    borderRadius:hp(1),
    marginLeft:wp(75)
  }
});

export default Routes;
