/* eslint-disable react-native/no-inline-styles */
import React, { useCallback, useEffect, useRef } from 'react';
import { Animated } from 'react-native';

import { ToastPosition, useToast, useToastService } from '@services';

import { ToastContent } from './components/ToastContent';

const DEFAULT_DURATION = 2500;

export function Toast() {
  const toast = useToast();
  const { hideToast } = useToastService();

  const fadAnim = useRef(new Animated.Value(0)).current;

  const position: ToastPosition = toast?.position || 'top';

  const runEnteringAnimation = useCallback(() => {
    Animated.timing(fadAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadAnim]);

  const runExitingAnimation = useCallback(
    (callback: Animated.EndCallback) => {
      Animated.timing(fadAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start(callback);
    },
    [fadAnim]
  );

  useEffect(() => {
    if (toast) {
      runEnteringAnimation();
      setTimeout(() => {
        runExitingAnimation(hideToast);
      }, toast.duration || DEFAULT_DURATION);
    }
  }, [toast, hideToast, runEnteringAnimation, runExitingAnimation]);

  if (!toast) {
    return null;
  }

  return (
    <Animated.View
      testID="toast-message"
      style={{
        position: 'absolute',
        alignSelf: 'center',
        opacity: fadAnim,
        [position]: 100,
      }}
    >
      <ToastContent toast={toast} />
    </Animated.View>
  );
}
