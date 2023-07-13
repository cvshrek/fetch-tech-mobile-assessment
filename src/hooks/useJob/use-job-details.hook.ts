import { useNavigation } from "@react-navigation/native";

interface UseJobDetails {
  onBackPress: () => void,
}

function useJobDetails(): UseJobDetails {
  const navigation = useNavigation<any>();

  function onBackPress() {
    navigation.goBack();
  }

  return {
    onBackPress,
  };
}

export default useJobDetails;
