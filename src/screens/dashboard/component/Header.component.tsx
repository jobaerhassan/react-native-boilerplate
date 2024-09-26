import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import InputWithIcon from '../../../components/text-input/InputWithIcon.core.component';
import FilterIcon from '../../../assets/icons/FilterIcon.assets';
import {
  customPadding,
  globalStyles,
} from '../../../assets/styles/global.style.asset';
import {colors} from '../../../assets/styles/colors.style.asset';
import Splash from '../../splash/Splash.module';

const Header = () => {
  // const dispatch = useDispatch();
  const handleSearch = (text: string) => {
    console.log(text);
    // debounceHandler(
    //   dispatch(queryChange({search: text, category, rating, order, price})),
    // );
  };
  return (
    <View style={[globalStyles.flexRow, {...customPadding(0, 20, 0, 20)}]}>
      <InputWithIcon
        placeholder="Search Here"
        onChangeText={handleSearch}
        // defaultValue={search}
      />
      <TouchableOpacity
        onPress={() => {
          //have to change
          global.showBottomSheet({
            flag: true,
            component: Splash,
          });
        }}>
        <FilterIcon fill={colors.black} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
