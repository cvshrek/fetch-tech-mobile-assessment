import {
  BottomDialog,
  BottomSheet, ButtonSlider, Container, FloatButton, Row, Text, TimeLine,
} from '@components';
import { BottomSheetRef } from '@components/BottomSheet';
import NotificationBoard from '@components/NotificationBoard';
import { Colors } from '@constants/colors';
import { Dimens } from '@constants/dimens';
import { FontSizes } from '@constants/fonts';
import useJobDetails from '@hooks/useJob/use-job-details.hook';
import MapsService from '@services/maps.service';
import { TJob } from '@types';
import { SCREEN_HEIGHT, isIphoneX } from '@utils';
import React, {
  useEffect, useMemo, useRef, useState,
} from 'react';
import {
  ActivityIndicator,
  Animated, Platform, StyleSheet, View,
} from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { verticalScale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialIcons';

const job: TJob = {
  id: 1,
  code: 'N95899',
  routes: [
    {
      name: 'Expo Hall 7',
      address: 'Expo Hall 7, Singapore',
      lat: 1.3371077,
      lng: 103.8914957,
      status: 'Picked up',
      time: '',
    }, {
      name: 'Far East Plaza',
      address: '14, Scotts Road, Orchard, Singapore, Singapore, 228213',
      lat: 1.3069143,
      lng: 103.8335523,
      status: 'Dropped-off',
      time: '6:06pm',
    },
  ],
  amount: 65,
  duration: 7,
};

const styles = StyleSheet.create({
  infoContainer: {
    backgroundColor: Colors.BLACK,
    padding: Dimens.SPACE_24,
    alignItems: 'center',
    borderTopLeftRadius: Dimens.DIMEN_5,
    borderTopRightRadius: Dimens.DIMEN_5,
    justifyContent: 'space-between',
  },
  statusContainer: {
    position: 'relative',
    backgroundColor: Colors.BLUE,
    marginRight: Dimens.SPACE_16,
  },
  routeContainer: {
    paddingVertical: Dimens.SPACE_24,
  },
  timeText: {
    marginBottom: Dimens.SPACE_16,
    color: Colors.BLUE,
  },
  locationText: {
    fontSize: FontSizes.FONT_24,
    paddingBottom: Dimens.SPACE_8,
  },
  addressText: {
    paddingBottom: Dimens.SPACE_8,
    color: Colors.DARK_GRAY,
  },
  statusText: {
    color: Colors.GREEN,
  },
  amountText: {
    color: Colors.WHITE,
    fontSize: FontSizes.FONT_24,
  },
  header: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: (isIphoneX() ? Dimens.SPACE_64 : Dimens.SPACE_24),
    paddingBottom: Dimens.SPACE_16,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  headerTitle: {
    marginBottom: Dimens.SPACE_24,
    marginTop: Dimens.SPACE_8,
    fontSize: FontSizes.FONT_18,
  },
  headerLoading: {
    position: 'absolute',
    right: Dimens.SPACE_24,
  },
});

function JobDetailsScreen(): React.ReactElement {
  const mapRef = useRef<any>();
  const translateY = useRef(new Animated.Value(-300)).current;
  const notiSheetRef = useRef<BottomSheetRef>(null);
  const hiddenHeight = useRef<number>(0);
  const [maxBottomSheetHeight, setMaxBottomSheetHeight] = useState<number>(0);
  const [coords, setCoords] = useState([]);
  const [mapHeight, setMapHeight] = useState(SCREEN_HEIGHT / 2 + 36);
  const [completing, setCompleting] = useState(false);
  const [resultDialogShown, setResultDialogShown] = useState(false);

  const { onBackPress } = useJobDetails();

  const { routes } = job;

  const headerInterpolate = useMemo(() => {
    const interpolate = translateY.interpolate({
      inputRange: [-maxBottomSheetHeight, -maxBottomSheetHeight / 1.2],
      outputRange: [0, -300],
      extrapolate: 'clamp',
    });
    return interpolate;
  }, [maxBottomSheetHeight]);

  const onLocationPress = () => {
    setTimeout(() => {
      mapRef.current?.fitToElements({
        animated: true,
        edgePadding: {
          bottom: 100,
          left: 100,
          right: 100,
          top: 100,
        },
      });
    }, 100);
  };

  const getDirections = async () => {
    const transformRoutes = routes.map((item) => `${item.lat}, ${item.lng}`);
    const response: any = await MapsService.getDirections(transformRoutes[0], transformRoutes[1]);
    setCoords(response);
  };

  const handleJobFinish = () => {
    setCompleting(true);
    setTimeout(() => {
      notiSheetRef.current?.scrollTo(SCREEN_HEIGHT / 1.5);
      setCompleting(false);
      setResultDialogShown(true);
    }, 1000);
  };

  useEffect(() => {
    getDirections();
  }, []);

  return (
    <Container noPadding>
      <Animated.View
        style={{
          ...styles.header,
          transform: [{
            translateY: headerInterpolate,
          }],
        }}
        onLayout={({ nativeEvent }) => {
          setMaxBottomSheetHeight(SCREEN_HEIGHT - nativeEvent.layout.height);
        }}
      >
        <Text style={styles.headerTitle} isBold>
          LY-4b3dec
        </Text>
        <Row style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: FontSizes.FONT_24, marginRight: 8 }}>
            $65.00
          </Text>
          <Icon name="loop" size={FontSizes.FONT_24} color={Colors.LIGHT_BLUE} />
        </Row>
        {
          completing ? (
            <ActivityIndicator color={Colors.ORANGE} size="small" style={styles.headerLoading} />
          ) : null
        }
      </Animated.View>
      <FloatButton
        iconName="arrow-back-ios"
        iconSize={20}
        iconColor="gray"
        position={{
          top: isIphoneX() ? Dimens.SPACE_64 : Dimens.SPACE_24,
          left: Dimens.SPACE_8,
        }}
        style={{
          zIndex: 1,
          paddingLeft: 4,
        }}
        onPress={onBackPress}
      />

      <MapView
        style={{
          ...StyleSheet.absoluteFillObject,
          height: mapHeight + 26,
        }}
        region={{
          latitude: 1.3371077,
          longitude: 103.8914957,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        ref={mapRef}
        renderToHardwareTextureAndroid
        onMapReady={() => {
          onLocationPress();
        }}
      >
        {
              routes.map((item, index) => (
                <Marker
                  key={item.lat}
                  coordinate={{ latitude: item.lat, longitude: item.lng }}
                  image={{ uri: !index ? 'https://img.icons8.com/?size=86&id=59751&format=png' : 'https://img.icons8.com/?size=86&id=26195&format=png' }}
                />
              ))
            }
        <Polyline
          coordinates={coords}
          strokeColor={Colors.LIGHT_BLUE}
          strokeWidth={Platform.OS === 'ios' ? 3 : 6}
          lineDashPattern={[1, 6]}
          tappable
          lineCap="round"
        />
      </MapView>
      <BottomSheet
        onDragEnd={(e) => {
          translateY.setValue(e.y);
          if (Math.abs(SCREEN_HEIGHT / e.y) > 2) {
            setMapHeight(SCREEN_HEIGHT + e.y + 24);
            onLocationPress();
          }
        }}
        minHeight={hiddenHeight.current + verticalScale(88)}
        maxHeight={maxBottomSheetHeight + hiddenHeight.current - 4}
      >
        <Container noPadding>
          <Row
            style={styles.infoContainer}
            onLayout={({ nativeEvent }) => {
              hiddenHeight.current = nativeEvent.layout.height;
            }}
          >
            <FloatButton
              iconName="gps-fixed"
              iconSize={22}
              iconColor="gray"
              position={{
                bottom: 132,
                right: 32,
              }}
              onPress={onLocationPress}
              style={{ zIndex: 10 }}
            />
            <Row style={{ alignItems: 'center' }}>
              <Text isBold style={{ color: 'white', fontSize: FontSizes.FONT_28, marginRight: 24 }}>12</Text>
              <View>
                <Text style={{ color: 'white', fontSize: FontSizes.FONT_18 }}>
                  December
                </Text>
                <Text style={{ color: 'gray' }} isLight>N95899</Text>
              </View>
            </Row>
            <View>
              <Text style={styles.amountText}>$65.00</Text>
            </View>
          </Row>
          <Container style={styles.routeContainer}>
            <Row>
              <FloatButton
                style={styles.statusContainer}
                iconName="beenhere"
                iconSize={20}
                iconColor={Colors.WHITE}
              />
              <Text style={{ color: Colors.BLUE }}>STANDARD RIDE</Text>
            </Row>
            <View style={styles.routeContainer}>
              {
                routes.map((item, index) => (
                  <View key={item.name}>
                    <TimeLine
                      style={{
                        width: Dimens.DIMEN_48,
                        marginTop: !index ? 4 : 0,
                      }}
                      renderIcon={!index ? (
                        <Icon
                          name="hail"
                          size={20}
                          color={Colors.BLUE}
                        />
                      ) : (
                        <Icon
                          name="fiber-manual-record"
                          size={20}
                          color={Colors.BLUE}
                        />
                      )}
                      shouldDrawLine={job.routes.length - 1 !== index}
                    />
                    <View
                      style={{
                        marginLeft: Dimens.DIMEN_56,
                        marginBottom: job.routes.length - 1 !== index ? 76 : 0,
                      }}
                    >
                      {
                        item.time ? (
                          <Text style={styles.timeText}>
                            {item.time}
                          </Text>
                        ) : null
                      }
                      <Text
                        isBold
                        style={styles.locationText}
                      >
                        {item.name}
                      </Text>
                      <Text style={styles.addressText}>{item.address}</Text>
                      <Text style={styles.statusText} isBold>{item.status}</Text>
                    </View>
                  </View>
                ))
              }
            </View>
            <View style={{ padding: Dimens.SPACE_8 }}>
              <Row justify="space-between">
                <Text style={{ color: Colors.GRAY }}>Job Date</Text>
                <Text isBold>12/12/2023</Text>
              </Row>
              <View style={{ marginVertical: 32 }}>
                <ButtonSlider
                  label="Completed"
                  showLoading={completing}
                  onDragEnd={handleJobFinish}
                  draggable={!completing}
                />
              </View>
            </View>
          </Container>
        </Container>
      </BottomSheet>
      <BottomDialog
        visible={resultDialogShown}
        onClose={() => { setResultDialogShown(false); }}
      >
        <NotificationBoard />
      </BottomDialog>
    </Container>
  );
}

export default JobDetailsScreen;
