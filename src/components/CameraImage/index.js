import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as Permissions from "expo-permissions";
import { Camera } from "expo-camera";

import { ButtonFoto, ImageFoto, Container } from "./style";

export default function CameraImage() {
  const [cameraPermission, setCameraPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    async function loadCamera() {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);

      // console.log(status);
      setCameraPermission(status === "granted");
    }
    loadCamera();
  }, []);

  function handleCamera() {
    setType(
      Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  }

  if (cameraPermission === null) {
    return <View />;
  } else if (cameraPermission === false) {
    return <Text>No access to camera</Text>;
  } else {
    return (
      <Container>
        <Camera style={{ flex: 1 }} type={type}>
          <View
            style={{
              flex: 1,
              backgroundColor: "transparent",
              flexDirection: "row"
            }}
          >
            <ButtonFoto
              onPress={() =>
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                )
              }
            >
              <Text style={{ fontSize: 18, marginBottom: 10, color: "white" }}>
                {cameraPermission}
              </Text>
            </ButtonFoto>
          </View>
        </Camera>
      </Container>
    );
  }
}
