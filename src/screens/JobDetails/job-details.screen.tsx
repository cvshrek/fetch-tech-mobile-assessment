import { Container, FloatButton } from '@components';
import useJobDetails from '@hooks/useJob/use-job-details.hook';
import { isIphoneX } from '@utils';
import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

function JobDetailsScreen(): React.ReactElement {
  const { onBackPress } = useJobDetails();
  return (
    <Container>
      <FloatButton
        iconName="arrow-back-ios"
        iconSize={22}
        position={{
          top: isIphoneX() ? 46 : 16,
          left: 16,
        }}
        style={{
          zIndex: 1,
          paddingLeft: 4,
        }}
        onPress={onBackPress}
      />
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={{ ...StyleSheet.absoluteFillObject }}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        showsMyLocationButton
      />
    </Container>
  );
}

export default JobDetailsScreen;
