import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

interface UseJob {
  activeFilterIndex: number,
  onFilterPress: (index: number) => void,
  onJobPress: (id: number | string) => void,
}

function useJob(): UseJob {
  const navigation = useNavigation<any>();
  const [activeFilterIndex, setActiveFilterIndex] = useState(0);

  function onFilterPress(index: number) {
    setActiveFilterIndex(index);
  }

  function onJobPress() {
    navigation.navigate('JobDetailsScreen');
  }

  return {
    activeFilterIndex,
    onFilterPress,
    onJobPress,
  };
}

export default useJob;
