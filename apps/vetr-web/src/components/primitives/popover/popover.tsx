import {useOverlayTriggerState} from '@react-stately/overlays';
import React, {createContext, useRef} from 'react';
import {useButton, useOverlay, useOverlayPosition} from 'react-aria';

export type PopoverRootContextType = {};

export const PopoverRootContext = createContext<PopoverRootContextType>(null as any);

export type PopoverRootProps = {
  isOpen?: boolean;
  onClose?: () => void;
  isDismissable?: boolean;
  shouldCloseOnBlur?: boolean;
  isKeyboardDismissDisabled?: boolean;
  shouldCloseOnInteractOutside?: (element: HTMLElement) => boolean;
};

export function PopoverRoot(props: PopoverRootProps) {
  const state = useOverlayTriggerState({});

  const overlayRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLElement>(null);

  const {overlayProps} = useOverlay(props, overlayRef);

  const {overlayProps: positionProps} = useOverlayPosition({
    targetRef: triggerRef,
    overlayRef,
    placement: 'top',
    offset: 5,
    isOpen: state.isOpen,
  });

  const {buttonProps} = useButton(
    {
      onPress: () => state.open(),
    },
    triggerRef,
  );

  return <PopoverRootContext.Provider value={{}}></PopoverRootContext.Provider>;
}

export function PopoverTrigger() {
  return null;
}

export function PopoverContent() {
  return null;
}

const Popover = {};

export default Popover;
