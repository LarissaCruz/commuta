

import React, { useCallback, useEffect, useImperativeHandle, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { GestureHandlerRootView, Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import Input from "../Input" 

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const INITIAL_HEIGHT = 480;

const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 50;

const BottomSheetComponent =  React.forwardRef(({ onCloseModal }, reference) => { 
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  
  const [isSelctButonCartao, setIsSlectButtonCartao] = React.useState(false)
  const ref = useRef(null);
  useEffect(() => {
    onPress();
  }, []);

  const onPress = useCallback(() => {
    const isActive = ref?.current?.isActive();
    if (isActive) {
      ref?.current?.scrollTo(0);
    } else {
      ref?.current?.scrollTo(-480);
    }
  }, []);

  const translateY = useSharedValue(-INITIAL_HEIGHT); 
  const active = useSharedValue(false);

  const scrollTo = useCallback(
    (destination) => {
      'worklet';
      active.value = destination !== 0;
      translateY.value = withSpring(destination, { damping: 50 });
    },
    [active, translateY]
  );

  const isActive = useCallback(() => {
    return active.value;
  }, [active]);

  useImperativeHandle(ref, () => ({ scrollTo, isActive }), [scrollTo, isActive]);

  const context = useSharedValue({ y: 0 });
  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value };
    })
    .onUpdate((event) => {
      translateY.value = event.translationY + context.value.y;
      translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
    })
    .onEnd(() => {
      if (translateY.value > -SCREEN_HEIGHT / 3) {
        scrollTo(-480);
      } else if (translateY.value < -SCREEN_HEIGHT / 1.5) {
        scrollTo(MAX_TRANSLATE_Y);
      }
    });

  const rBottomSheetStyle = useAnimatedStyle(() => {
    const borderRadius = interpolate(
      translateY.value,
      [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
      [25, 5],
      Extrapolate.CLAMP
    );

    return {
      borderRadius,
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }} ref={reference}>
      <TouchableOpacity  onPress={onCloseModal} style={styles.container}>
        <GestureDetector gesture={gesture} ref={ref}>
          <Animated.View style={[styles.bottomSheetContainer, rBottomSheetStyle]}>
            <View style={styles.line} />
            <View style={{ flex: 1 , flexDirection:"column", paddingHorizontal:16}} >
              <View style={[{marginVertical:10},styles.row]}>
                <TouchableOpacity style={[styles.button, !isSelctButonCartao ? styles.primaryButton : styles.secondaryButton]}  onPress={() => setIsSlectButtonCartao(false)}>
                  <Text style={[ styles.buttonText, isSelctButonCartao && styles.secondaryButtonText]}>Boleto Bancário!</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, !isSelctButonCartao ? styles.secondaryButton : styles.primaryButton]} onPress={() => setIsSlectButtonCartao(true)}>
                  <Text style={[styles.buttonText, !isSelctButonCartao && styles.secondaryButtonText]}>Cartão de Crédito</Text>
                </TouchableOpacity>
              </View>
              {!isSelctButonCartao ?
                (
                  <>
                    <Input
                        placeholderName={"CPF/CNPJ"}
                        name={"CNPJ"}
                        control={control}
                        rules={{
                          required: "Verifique se todos os campos estão preenchidos",
                        }}
                    />
                    <Input
                      placeholderName={"Nome"}
                      name={"nomePJ"}
                      control={control}
                      rules={{
                        required: "Verifique se todos os campos estão preenchidos",
                      }}
                    />
                  </>
                ): 
                (
                  <>   
                    <Input
                      placeholderName={"Número do cartão"} 
                      name={"numero"}
                      control={control}
                      rules={{
                        required: "Verifique se todos os campos estão preenchidos",
                      }}
                    />
                    <View style={[styles.row, {paddingHorizontal:0, paddingVertical:0}]}>
                      <Input
                        stylesInput={{width:'50%'}}
                        placeholderName={"MM/AA"}
                        name={"data"}
                        control={control}
                        rules={{
                          required: "Verifique se todos os campos estão preenchidos",
                        }}
                      />
                      <Input
                        stylesInput={{width:'50%'}}
                        placeholderName={"CVC"}
                        name={"cvc"}
                        control={control}
                        rules={{
                          required: "Verifique se todos os campos estão preenchidos",
                        }}
                      />
                    </View>
                    <Input
                      placeholderName={"Nome"}
                      name={"nome"}
                      control={control}
                      rules={{
                        required: "Verifique se todos os campos estão preenchidos",
                      }}
                    />
                  </>
                )
              }
              
              <TouchableOpacity
                style={[styles.buttonPrice, styles.primaryButton, {marginTop:10}]}
                onPress={null}
              >
                <Text style={[styles.buttonText, {fontSize:18}]}>Pague R$9,99!</Text>
              </TouchableOpacity>
              </View>
            
          </Animated.View>
        </GestureDetector>
      </TouchableOpacity>
    </GestureHandlerRootView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  row: {
    flexDirection:"row",
    alignItems:"center",
    gap:8,
    
  }, 
  bottomSheetContainer: {
    height: SCREEN_HEIGHT,
    width: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    top: SCREEN_HEIGHT,
    borderRadius: 25,
  },
  line: {
    width: 75,
    height: 4,
    backgroundColor: 'grey',
    alignSelf: 'center',
    marginVertical: 15,
    borderRadius: 2,
  },
  button: {
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    gap: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    width:"50%"
  },
  buttonPrice: {
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    gap: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  }, 
  primaryButton: {
    backgroundColor: "#4B3EFF",
    borderRadius:12,
  },
  secondaryButton: {
    backgroundColor: "white",
    borderColor:"#EDECFF",
    borderWidth:1,
  },
  buttonText: {
    fontFamily: "MontserratMedium",
    fontSize: 14,
    color: "white",
  },
  secondaryButtonText: {
    color: "#4B3EFF",
  },
  input: {
    fontFamily: "MontserratRegular",
    fontSize: 16,
  },
});

export default BottomSheetComponent;
