import {useImperativeHandle, useRef} from 'react';
import {Animated} from 'react-native';
import {SCREEN_HEIGHT} from '../../assets/ts/screenData';
import {_bottomSheet} from './interface';

const useBottomSheetHook = ({
  ref,
  backDropHandler,
  extraProps,
}: Omit<_bottomSheet, 'Component'>) => {
  const positionRef = useRef(new Animated.Value(SCREEN_HEIGHT + 10)).current;
  const opacityRef = useRef(new Animated.Value(0)).current;

  useImperativeHandle(ref, () => ({
    show() {
      handleShowComponent();
    },
    close() {
      handleHideComponent();
    },
  }));
  const handleShowComponent = () => {
    Animated.sequence([
      Animated.timing(opacityRef, {
        toValue: 1,
        duration: 0,
        delay: 0,
        useNativeDriver: true,
      }),
      Animated.timing(positionRef, {
        toValue: 0,
        duration: 300,
        delay: 100,
        useNativeDriver: true,
      }),
    ]).start(() => {
      if (extraProps.onOpen) {
        extraProps.onOpen();
      }
    });
  };
  const handleHideComponent = () => {
    Animated.sequence([
      Animated.timing(positionRef, {
        toValue: +100,
        duration: 300,
        delay: 0,
        useNativeDriver: true,
      }),
      Animated.timing(opacityRef, {
        toValue: 0,
        duration: 100,
        delay: 0,
        useNativeDriver: true,
      }),
    ]).start(() => {
      backDropHandler();
    });
  };
  return {positionRef, opacityRef, handleHideComponent};
};
export default useBottomSheetHook;
