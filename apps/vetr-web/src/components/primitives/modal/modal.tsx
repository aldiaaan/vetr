import {useDialog} from '@react-aria/dialog';
import {ModalAriaProps, OverlayContainer, OverlayProps, useModal, useOverlay} from '@react-aria/overlays';
import {AriaDialogProps} from '@react-types/dialog';
import React, {createContext, HTMLAttributes, memo, RefObject, useContext, useRef} from 'react';
import {FocusScope} from 'react-aria';

export const MODAL_ZINDEX = 99999;

export type ModalRootContextType = {
  contentRef: RefObject<HTMLDivElement>;
  overlayProps: HTMLAttributes<HTMLElement>;
  underlayProps: HTMLAttributes<HTMLElement>;
  modalProps: ModalAriaProps;
  dialogProps: HTMLAttributes<HTMLElement>;
  titleProps: HTMLAttributes<HTMLElement>;
  isOpen: boolean;
};

export const ModalRootContext = createContext<ModalRootContextType>(null as any);

export function useModalRoot() {
  const instance = useContext(ModalRootContext);

  if (!instance) {
    throw new Error('');
  }

  return instance;
}

export type ModalRootProps = {children?: React.ReactNode} & OverlayProps & AriaDialogProps;

export function _ModalRoot(props: ModalRootProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const {overlayProps, underlayProps} = useOverlay(props, contentRef);
  const {modalProps} = useModal();
  const {dialogProps, titleProps} = useDialog(props, contentRef);

  return (
    <ModalRootContext.Provider
      value={{
        contentRef,
        overlayProps,
        underlayProps,
        modalProps,
        dialogProps,
        titleProps,
        isOpen: props.isOpen ?? false,
      }}>
      <div tw="items-center justify-center inset-0 fixed flex" style={{zIndex: MODAL_ZINDEX}}>
        {props.children}
      </div>
    </ModalRootContext.Provider>
  );
}

export function ModalRoot(props: ModalRootProps) {
  return (
    <OverlayContainer>
      <_ModalRoot {...props} />
    </OverlayContainer>
  );
}

export function ModalBackdrop() {
  const {underlayProps} = useModalRoot();

  return <div {...underlayProps} tw="bg-black bg-opacity-30 absolute inset-0"></div>;
}

export function ModalTitle() {
  return null;
}

export function ModalContent(props: {children?: React.ReactNode}) {
  const {children} = props;
  const {overlayProps, modalProps, dialogProps, contentRef} = useModalRoot();

  return (
    <FocusScope contain restoreFocus autoFocus>
      {React.isValidElement(children) &&
        React.cloneElement(children, {
          ...overlayProps,
          ...dialogProps,
          ...modalProps,
          ref: contentRef,
        })}
    </FocusScope>
  );
}

export default {
  Root: memo(ModalRoot),
  Backdrop: memo(ModalBackdrop),
  Content: memo(ModalContent),
};
