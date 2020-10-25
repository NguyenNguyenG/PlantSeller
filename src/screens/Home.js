import React from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import {
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

const Home = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#FFF",
      }}
    >
      <View
        style={{
          backgroundColor: "#00a46c",
          height: "28%",
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          paddingHorizontal: 20,
        }}
      >
        <Image
          source={require("../images/1.png")}
          style={{ height: 10, width: 20, marginTop: 50 }}
        />
        <View
          style={{
            flexDirection: "row",
            marginTop: 25,
            alignItems: "center",
          }}
        >
          <View style={{ width: "50%" }}>
            <Text style={{ fontWeight: "bold", fontSize: 28, color: "#FFF" }}>
              Hi Nguyen
            </Text>
          </View>
          <View style={{ width: "50%", alignItems: "flex-end" }}>
            <Image
              source={require("../images/g.png")}
              style={{ height: 60, width: 60 }}
            />
          </View>
        </View>
      </View>
      <LinearGradient
        colors={["rgba(0,164,109,0.4)", "transparent"]}
        style={{ left: 0, right: 0, height: 80, marginTop: -45 }}
      >
        <View
          style={{
            backgroundColor: "#FFF",
            paddingVertical: 8,
            paddingHorizontal: 20,
            marginHorizontal: 20,
            borderRadius: 15,
            marginTop: 25,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TextInput
            placeholder="Search"
            placeholderTextColor="#b1e5d3"
            style={{ fontWeight: "bold", fontSize: 18, width: "95%" }}
          />
          <Image
            source={require("../images/3.png")}
            style={{ height: 20, width: 20 }}
          />
        </View>
      </LinearGradient>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 20,
          width: "100%",
          alignItems: "center",
        }}
      >
        <View style={{ width: "50%" }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 17,
              color: "#585a61",
            }}
          >
            Recommended
          </Text>
          <View
            style={{
              height: 4,
              backgroundColor: "#b1e5d3",
              width: 115,
              marginTop: -4,
            }}
          ></View>
        </View>

        <View
          style={{
            width: "50%",
            alignItems: "flex-end",
          }}
        >
          <View
            style={{
              backgroundColor: "#00a46c",
              paddingHorizontal: 20,
              paddingVertical: 5,
              borderRadius: 15,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 13,
                color: "#FFF",
              }}
            >
              More
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 20,
          width: "100%",
          alignItems: "center",
        }}
      >
        <View style={{ width: "50%" }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 17,
              color: "#585a61",
            }}
          >
            Featured Plants
          </Text>
          <View
            style={{
              height: 4,
              backgroundColor: "#b1e5d3",
              width: 115,
              marginTop: -4,
            }}
          ></View>
        </View>
        <View
          style={{
            width: "50%",
            alignItems: "flex-end",
          }}
        >
          <View
            style={{
              backgroundColor: "#00a46c",
              paddingHorizontal: 20,
              paddingVertical: 5,
              borderRadius: 15,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 13,
                color: "#FFF",
              }}
            >
              More
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;
