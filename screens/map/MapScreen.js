import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function MapScreen({
  navigation,
  setIsHeaderShown,
  route: { params },
}) {
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setIsHeaderShown(true);
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        region={{
          latitude: params.geoLocation
            ? params.geoLocation.latitude
            : 48.225888,
          longitude: params.geoLocation
            ? params.geoLocation.longitude
            : 31.105833,
          latitudeDelta: params.geoLocation ? 2 : 10,
          longitudeDelta: 0.0421,
        }}
        mapType="standard"
      >
        {!!params.geoLocation && (
          <Marker
            title={params.location}
            coordinate={{
              latitude: params.geoLocation.latitude,
              longitude: params.geoLocation.longitude,
            }}
            description={params.description}
          />
        )}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
