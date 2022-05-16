import {HoverProps, PressProps} from '@react-aria/interactions';
import {AriaPositionProps, useOverlayPosition} from '@react-aria/overlays';
import {useTooltipTrigger} from '@react-aria/tooltip';
import {TooltipTriggerProps} from '@react-types/tooltip';
import React, {createContext, HTMLAttributes, ReactElement, RefObject, useContext, useMemo, useRef} from 'react';
import {FocusEvents} from '@react-types/shared';
import {TooltipTriggerState, useTooltipTriggerState} from 'react-stately';
import {mergeProps} from '@react-aria/utils';
import {createPortal} from 'react-dom';
import {useTransition, config, animated} from 'react-spring';

export type TooltipRootProps = {
  children?: React.ReactNode;
  offset?: number;
} & TooltipTriggerProps &
  Omit<AriaPositionProps, 'scrollRef' | 'targetRef' | 'overlayRef'>;

export type TooltipRootContextType = {
  tooltipState: TooltipTriggerState;
  triggerRef: RefObject<HTMLElement>;
  tooltipRef: RefObject<HTMLDivElement>;
  tooltipProps: HTMLAttributes<HTMLElement>;
  arrowProps: HTMLAttributes<HTMLElement>;
  overlayProps: HTMLAttributes<HTMLElement>;
  triggerProps: HTMLAttributes<HTMLElement> & PressProps & HoverProps & FocusEvents;
};

const TooltipRootContext = createContext<TooltipRootContextType>(null as any);

function TooltipRoot(props: TooltipRootProps) {
  const tooltipState = useTooltipTriggerState(props);
  const triggerRef = useRef<HTMLElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const {triggerProps, tooltipProps} = useTooltipTrigger(props, tooltipState, triggerRef);
  const {overlayProps, arrowProps} = useOverlayPosition({
    ...props,
    overlayRef: tooltipRef,
    targetRef: triggerRef,
    isOpen: tooltipState.isOpen,
  });

  return (
    <TooltipRootContext.Provider
      value={{
        tooltipState,
        triggerRef,
        tooltipRef,
        triggerProps,
        tooltipProps,
        overlayProps,
        arrowProps,
      }}>
      {props.children}
    </TooltipRootContext.Provider>
  );
}

function useTooltipRoot() {
  const instance = useContext(TooltipRootContext);

  return instance;
}

function TooltipTrigger(props: {children: React.ReactNode}) {
  const {children} = props;

  const {triggerRef, triggerProps} = useTooltipRoot();

  return React.cloneElement(children as ReactElement, {
    ref: triggerRef,
    ...triggerProps,
  });
}

function TooltipContent(props: {children: React.ReactNode}) {
  const {children} = props;

  const {overlayProps, tooltipProps, tooltipRef, tooltipState} = useTooltipRoot();

  const childrenProps = useMemo(() => mergeProps(overlayProps, tooltipProps), [overlayProps, tooltipProps]);

  const transitions = useTransition(tooltipState.isOpen, {
    from: {opacity: 0},
    enter: {opacity: 1},
    leave: {opacity: 0},
    config: {tension: 320, damping: 32, mass: 0.9, friction: 20, clamp: true},
  });

  return transitions(
    (styles, item) =>
      item &&
      createPortal(
        <animated.div
          ref={tooltipRef}
          tw="shadow-lg px-3 py-2 bg-gray-900 rounded-md"
          css={{maxWidth: 240}}
          {...childrenProps}
          style={{
            ...childrenProps.style,
            opacity: styles.opacity,
            transform: styles.opacity.to({range: [0, 1.0], output: [0.95, 1]}).to(s => `scale(${s})`),
          }}>
          {children}
        </animated.div>,
        // React.cloneElement(children as ReactElement, {
        //   ref: tooltipRef,
        //   ...childrenProps,
        //   style: {
        //     ...childrenProps.style,
        //     opacity: styles.opacity,
        //     transform: styles.opacity.to({range: [0, 1.0], output: [0.95, 1]}).to(s => `scale(${s})`),
        //   },
        // }),
        document.body,
      ),
  );
}

export default {
  Root: TooltipRoot,
  Trigger: TooltipTrigger,
  Content: TooltipContent,
};
