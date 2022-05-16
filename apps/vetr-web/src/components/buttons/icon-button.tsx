import React, {forwardRef, memo, useRef} from 'react';
import {mergeProps, useButton, useFocusRing} from 'react-aria';
import {AriaButtonProps} from '@react-types/button';
import {mergeRefs} from '@/utils/react';
import tw from 'twin.macro';

export type IconButtonProps = {
  children?: React.ReactNode;
} & React.ComponentPropsWithoutRef<'button'> &
  AriaButtonProps<'button'>;

const IconButton = memo(
  forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
    const buttonRef = useRef<HTMLButtonElement>(null);

    const refs = mergeRefs(ref, buttonRef);

    const {children} = props;

    const {focusProps, isFocusVisible} = useFocusRing();

    const {buttonProps} = useButton({onPress: props.onPress}, buttonRef);

    return (
      <button
        ref={refs}
        tw="hover:bg-gray-100 focus:outline-none rounded-full w-8 h-8 flex items-center justify-center"
        css={[isFocusVisible && tw`outline-none ring-2 ring-blue-600`]}
        {...mergeProps(buttonProps, focusProps, props)}>
        {children}
      </button>
    );
  }),
);

IconButton.displayName = 'IconButton';

export default IconButton;
