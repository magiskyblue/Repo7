import {
  CameraView,
  useCameraPermissions,
} from 'expo-camera';

import * as MediaLibrary from 'expo-media-library/legacy';

import { useRef, useState } from 'react';

import {
  Alert,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function Index() {
  // =========================================================
  // PERMISO DE CÁMARA
  // =========================================================

  const [
    cameraPermission,
    requestCameraPermission,
  ] = useCameraPermissions();

  // =========================================================
  // PERMISO DE FOTOS
  // =========================================================

  const [
    mediaPermission,
    requestMediaPermission,
  ] = MediaLibrary.usePermissions();

  // =========================================================
  // REFERENCIA DE LA CÁMARA
  // =========================================================

  const cameraRef =
    useRef<CameraView>(null);

  // =========================================================
  // ESTADOS
  // =========================================================

  const [photo, setPhoto] =
    useState<string | null>(null);

  const [takingPhoto, setTakingPhoto] =
    useState(false);

  const [savingPhoto, setSavingPhoto] =
    useState(false);

  // =========================================================
  // CARGANDO
  // =========================================================

  if (!cameraPermission) {
    return (
      <SafeAreaView style={styles.center}>
        <StatusBar barStyle="light-content" />

        <Text style={styles.loadingText}>
          Cargando cámara...
        </Text>
      </SafeAreaView>
    );
  }

  // =========================================================
  // PERMISO NO CONCEDIDO
  // =========================================================

  if (!cameraPermission.granted) {
    return (
      <SafeAreaView style={styles.center}>
        <StatusBar barStyle="light-content" />

        <Text style={styles.title}>
          Reconocimiento Facial
        </Text>

        <Text style={styles.description}>
          Necesitamos acceso a la cámara del iPhone
          para tomar fotografías.
        </Text>

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={requestCameraPermission}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>
            Permitir cámara
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  // =========================================================
  // TOMAR FOTOGRAFÍA
  // =========================================================

  const takePhoto = async () => {
    if (!cameraRef.current) {
      Alert.alert(
        'Error',
        'La cámara todavía no está disponible.'
      );

      return;
    }

    if (takingPhoto) {
      return;
    }

    try {
      setTakingPhoto(true);

      console.log(
        'Tomando fotografía...'
      );

      const result =
        await cameraRef.current.takePictureAsync({
          quality: 0.8,
        });

      if (!result) {
        Alert.alert(
          'Error',
          'No se pudo tomar la fotografía.'
        );

        return;
      }

      console.log(
        'Foto tomada:',
        result.uri
      );

      // Guardamos únicamente la URI local.
      setPhoto(result.uri);

    } catch (error) {
      console.error(
        'Error tomando fotografía:',
        error
      );

      Alert.alert(
        'Error',
        'Ocurrió un error al tomar la fotografía.'
      );

    } finally {
      setTakingPhoto(false);
    }
  };

  // =========================================================
  // GUARDAR FOTO EN LA GALERÍA
  // =========================================================

  const savePhoto = async () => {
    if (!photo) {
      Alert.alert(
        'Error',
        'No existe una fotografía para guardar.'
      );

      return;
    }

    if (savingPhoto) {
      return;
    }

    try {
      setSavingPhoto(true);

      console.log(
        'Solicitando permiso de fotos...'
      );

      // -------------------------------------------------------
      // COMPROBAR PERMISO
      // -------------------------------------------------------

      let permission =
        mediaPermission;

      if (!permission?.granted) {
        permission =
          await requestMediaPermission();
      }

      if (!permission.granted) {
        Alert.alert(
          'Permiso necesario',
          'Debes permitir el acceso a Fotos para guardar la fotografía.'
        );

        return;
      }

      // -------------------------------------------------------
      // GUARDAR LOCALMENTE
      // -------------------------------------------------------

      console.log(
        'Guardando fotografía localmente...'
      );

      const asset =
        await MediaLibrary.createAssetAsync(
          photo
        );

      console.log(
        'Fotografía guardada:',
        asset.uri
      );

      Alert.alert(
        'Fotografía guardada',
        'La fotografía se guardó correctamente en el iPhone.'
      );

    } catch (error) {
      console.error(
        'Error guardando fotografía:',
        error
      );

      Alert.alert(
        'Error',
        'No se pudo guardar la fotografía.'
      );

    } finally {
      setSavingPhoto(false);
    }
  };

  // =========================================================
  // TOMAR OTRA FOTOGRAFÍA
  // =========================================================

  const takeAnotherPhoto = () => {
    setPhoto(null);
  };

  // =========================================================
  // PANTALLA PRINCIPAL
  // =========================================================

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#000000"
      />

      {/* =====================================================
          CÁMARA
      ====================================================== */}

      {!photo ? (
        <View style={styles.cameraContainer}>

          <CameraView
            ref={cameraRef}
            style={styles.camera}
            facing="front"
          />

          {/* =================================================
              PARTE SUPERIOR
          ================================================== */}

          <SafeAreaView
            style={styles.topOverlay}
          >
            <Text style={styles.cameraTitle}>
              Reconocimiento Facial
            </Text>

            <Text style={styles.cameraSubtitle}>
              Coloca tu rostro frente a la cámara
            </Text>
          </SafeAreaView>

          {/* =================================================
              GUÍA DEL ROSTRO
          ================================================== */}

          <View
            pointerEvents="none"
            style={styles.faceGuideContainer}
          >
            <View style={styles.faceGuide} />
          </View>

          {/* =================================================
              PARTE INFERIOR
          ================================================== */}

          <View style={styles.bottomOverlay}>

            <Text style={styles.instruction}>
              Asegúrate de que tu rostro esté dentro
              del círculo
            </Text>

            <TouchableOpacity
              style={[
                styles.captureButton,
                takingPhoto &&
                  styles.captureButtonDisabled,
              ]}
              onPress={takePhoto}
              disabled={takingPhoto}
              activeOpacity={0.8}
            >
              <View
                style={
                  styles.captureButtonInner
                }
              />
            </TouchableOpacity>

          </View>
        </View>

      ) : (

        /* ===================================================
           PREVISUALIZACIÓN
        ==================================================== */

        <SafeAreaView
          style={styles.previewContainer}
        >

          <Text style={styles.previewTitle}>
            Fotografía
          </Text>

          {/* =================================================
              IMAGEN
          ================================================== */}

          <Image
            source={{
              uri: photo,
            }}
            style={styles.photo}
          />

          {/* =================================================
              INFORMACIÓN
          ================================================== */}

          <Text style={styles.photoStatus}>
            ✓ Fotografía tomada correctamente
          </Text>

          <Text style={styles.localText}>
            📱 La fotografía está almacenada
            localmente
          </Text>

          {/* =================================================
              GUARDAR
          ================================================== */}

          <TouchableOpacity
            style={styles.primaryButton}
            onPress={savePhoto}
            disabled={savingPhoto}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>
              {savingPhoto
                ? 'Guardando...'
                : 'Guardar en Fotos'}
            </Text>
          </TouchableOpacity>

          {/* =================================================
              TOMAR OTRA
          ================================================== */}

          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={takeAnotherPhoto}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>
              Tomar otra fotografía
            </Text>
          </TouchableOpacity>

        </SafeAreaView>
      )}
    </View>
  );
}

// =============================================================
// ESTILOS
// =============================================================

const styles = StyleSheet.create({

  // ===========================================================
  // GENERAL
  // ===========================================================

  container: {
    flex: 1,
    backgroundColor: '#000000',
  },

  center: {
    flex: 1,
    backgroundColor: '#111827',

    justifyContent: 'center',
    alignItems: 'center',

    paddingHorizontal: 30,
  },

  loadingText: {
    color: '#ffffff',
    fontSize: 18,
  },

  // ===========================================================
  // PERMISOS
  // ===========================================================

  title: {
    color: '#ffffff',

    fontSize: 30,
    fontWeight: 'bold',

    textAlign: 'center',

    marginBottom: 16,
  },

  description: {
    color: '#d1d5db',

    fontSize: 16,

    lineHeight: 24,

    textAlign: 'center',

    marginBottom: 30,
  },

  // ===========================================================
  // CÁMARA
  // ===========================================================

  cameraContainer: {
    flex: 1,
    backgroundColor: '#000000',
  },

  camera: {
    flex: 1,
  },

  // ===========================================================
  // PARTE SUPERIOR DE LA CÁMARA
  // ===========================================================

  topOverlay: {
    position: 'absolute',

    top: 0,
    left: 0,
    right: 0,

    alignItems: 'center',

    paddingTop: 20,
  },

  cameraTitle: {
    color: '#ffffff',

    fontSize: 24,
    fontWeight: 'bold',

    textShadowColor: '#000000',

    textShadowOffset: {
      width: 1,
      height: 1,
    },

    textShadowRadius: 5,
  },

  cameraSubtitle: {
    color: '#ffffff',

    fontSize: 15,

    marginTop: 8,

    textShadowColor: '#000000',

    textShadowOffset: {
      width: 1,
      height: 1,
    },

    textShadowRadius: 5,
  },

  // ===========================================================
  // GUÍA DEL ROSTRO
  // ===========================================================

  faceGuideContainer: {
    position: 'absolute',

    top: '25%',
    left: 0,
    right: 0,

    alignItems: 'center',
  },

  faceGuide: {
    width: 260,
    height: 330,

    borderWidth: 3,
    borderColor: '#22c55e',

    borderRadius: 130,
  },

  // ===========================================================
  // PARTE INFERIOR
  // ===========================================================

  bottomOverlay: {
    position: 'absolute',

    bottom: 45,

    left: 0,
    right: 0,

    alignItems: 'center',
  },

  instruction: {
    color: '#ffffff',

    fontSize: 14,

    textAlign: 'center',

    marginHorizontal: 30,

    marginBottom: 20,

    textShadowColor: '#000000',

    textShadowOffset: {
      width: 1,
      height: 1,
    },

    textShadowRadius: 5,
  },

  // ===========================================================
  // BOTÓN DE CAPTURA
  // ===========================================================

  captureButton: {
    width: 84,
    height: 84,

    borderRadius: 42,

    backgroundColor: '#ffffff',

    justifyContent: 'center',
    alignItems: 'center',

    borderWidth: 4,

    borderColor: '#d1d5db',
  },

  captureButtonDisabled: {
    opacity: 0.5,
  },

  captureButtonInner: {
    width: 68,
    height: 68,

    borderRadius: 34,

    backgroundColor: '#ef4444',
  },

  // ===========================================================
  // PREVISUALIZACIÓN
  // ===========================================================

  previewContainer: {
    flex: 1,

    backgroundColor: '#111827',

    alignItems: 'center',

    justifyContent: 'center',

    paddingHorizontal: 20,
  },

  previewTitle: {
    color: '#ffffff',

    fontSize: 28,

    fontWeight: 'bold',

    marginBottom: 20,
  },

  photo: {
    width: '100%',

    height: 430,

    resizeMode: 'contain',

    borderRadius: 15,

    backgroundColor: '#000000',

    marginBottom: 15,
  },

  photoStatus: {
    color: '#22c55e',

    fontSize: 17,

    fontWeight: 'bold',

    marginBottom: 8,
  },

  localText: {
    color: '#9ca3af',

    fontSize: 14,

    marginBottom: 20,

    textAlign: 'center',
  },

  // ===========================================================
  // BOTÓN PRINCIPAL
  // ===========================================================

  primaryButton: {
    width: '100%',

    backgroundColor: '#2563eb',

    paddingVertical: 16,

    borderRadius: 12,

    marginBottom: 12,
  },

  // ===========================================================
  // BOTÓN SECUNDARIO
  // ===========================================================

  secondaryButton: {
    width: '100%',

    backgroundColor: '#4b5563',

    paddingVertical: 16,

    borderRadius: 12,
  },

  // ===========================================================
  // TEXTO DE BOTONES
  // ===========================================================

  buttonText: {
    color: '#ffffff',

    fontSize: 16,

    fontWeight: 'bold',

    textAlign: 'center',
  },
});
