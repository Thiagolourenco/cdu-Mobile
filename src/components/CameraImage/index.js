import React, { useState, useEffect } from "react";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";

import { ButtonFoto, ImageFoto, Container, ButtonFotoSelect } from "./style";

export default function CameraImage() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    async function loadCamera() {
      if (Constants.platform.ios) {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);

        if (status === "granted") {
          alert("Sorry, we need camera roll permissions to make this work");
        }
      }
    }
    loadCamera();
  }, []);

  async function handleImage() {
    const result = await ImagePicker.launchImageLibraryAsync({});

    if (!result.cancelled) {
      setImage(result.uri);
    }
  }

  return (
    <Container>
      <ButtonFoto onPress={handleImage}>
        {image ? (
          <ImageFoto source={{ uri: image }} />
        ) : (
          <ButtonFotoSelect>Selecionar Foto</ButtonFotoSelect>
        )}
      </ButtonFoto>
    </Container>
  );
}
