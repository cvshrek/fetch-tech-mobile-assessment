import {
  Button,
  Container,
  Row,
  JobItem,
  FloatButton,
} from '@components';
import { Colors } from '@constants/colors';
import { Dimens } from '@constants/dimens';
import useJob from '@hooks/useJob/use-job.hook';
import React, { useCallback } from 'react';
import { FlatList, View } from 'react-native';
import { TJob } from '@types';

const filterMenus = [{
  title: 'Ongoing',
}, {
  title: 'Available',
}, {
  title: 'History',
}];

const jobs: TJob[] = [{
  id: 1,
  routes: [
    {
      name: 'Expo Hall 7',
      address: 'Expo Hall, Singapore',
      lat: 0,
      lng: 0,
    }, {
      name: 'Far East Plaza',
      address: '14, Scotts Road, Orchard, Singapore, Singapore, 228213',
      lat: 0,
      lng: 0,
    },
  ],
  amount: 65,
  duration: 7,
}];

function JobScreen(): React.ReactElement {
  const {
    activeFilterIndex,
    onFilterPress,
    onJobPress,
  } = useJob();

  const renderItem = useCallback(({ item }: { item: TJob }) => (
    <JobItem
      startPoint={item.routes[0].name}
      amount={`$${item.amount.toFixed(2)}`}
      duration={`in ${item.duration} months`}
      routes={item.routes}
      onPress={() => onJobPress(item.id)}
    />
  ), []);

  const renderSeperator = useCallback(() => (
    <View style={{ height: 10 }} />
  ), []);

  return (
    <Container gradientBackground>
      <Row style={{ paddingVertical: Dimens.SPACE_16 }}>
        {filterMenus.map((item, index) => {
          const isActive = activeFilterIndex === index;
          return (
            <Button
              style={{
                marginRight: Dimens.SPACE_8,
                backgroundColor: isActive ? Colors.BLACK : Colors.LIGHT_GRAY,
              }}
              key={item.title}
              label={item.title}
              labelStyle={{
                color: isActive ? Colors.WHITE : Colors.DARK_GRAY,
              }}
              onPress={() => onFilterPress(index)}
            />
          );
        })}
      </Row>
      <FlatList
        renderItem={renderItem}
        data={jobs}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={renderSeperator}
        contentContainerStyle={{ paddingVertical: Dimens.SPACE_16 }}
      />

      <FloatButton
        iconName="bolt"
        iconColor="orange"
        iconSize={24}
        position={{
          bottom: 16,
          left: 16,
        }}
      />
    </Container>
  );
}

export default JobScreen;
