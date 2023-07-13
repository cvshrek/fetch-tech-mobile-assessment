import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import Row from '@components/Row';
import { Text } from '@components';
import Icon from 'react-native-vector-icons/Ionicons';
import type { TRoute } from '@types';

import { Dimens } from '@constants/dimens';
import styles from './job-item.styles';

interface JobItemProps extends TouchableOpacityProps {
  startPoint?: string,
  routes?: TRoute[],
  amount?: string,
  duration?: string,
}

function JobItem(props: JobItemProps): React.ReactElement<JobItemProps> {
  const {
    onPress,
    startPoint,
    routes,
    amount,
    duration,
  } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Row justify="space-between">
          <Text style={[styles.text, styles.mainInfo]} isBold>{startPoint}</Text>
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={[styles.text, styles.amount]}>{amount}</Text>
            <Row>
              <Icon
                name="time-outline"
                size={16}
                style={[styles.text, styles.timeIcon]}
              />
              <Text isLight style={[styles.text, styles.infoText]}>
                {duration}
              </Text>
            </Row>
          </View>
        </Row>
        <View style={styles.routeContainer}>
          {routes?.map((item: TRoute, index: number) => (
            <View key={item.name} style={{ justifyContent: 'center'}}>
              <View style={styles.lineContainer}>
                <View style={[styles.line]}>
                  <View style={index !== routes.length - 1 ? styles.lineDraw : { width: 0 }} />
                </View>
                {
                  !index ? (
                    <Icon
                      name="man"
                      style={[styles.routeIcon, { marginTop: 5 }]}
                      size={12}
                    />
                  ) : (
                    <Icon
                      name="ellipse"
                      style={[styles.routeIcon]}
                      size={20}
                    />
                  )
                }
              </View>
              <Row
                style={{
                  marginLeft: Dimens.SPACE_24,
                  marginBottom: index !== routes.length - 1 ? Dimens.SPACE_32 : 0,
                }}
              >
                <Text style={[styles.text, styles.mainInfo]} isBold>
                  {item.name}
                  <Text style={styles.text} isLight>{` - ${item.address}`}</Text>
                </Text>
              </Row>
            </View>
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default JobItem;
