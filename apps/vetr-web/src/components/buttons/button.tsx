import React, {forwardRef, memo, useRef} from 'react';
import {useButton} from '@react-aria/button';
import {mergeProps, useFocusRing} from 'react-aria';
import tw from 'twin.macro';
import {AriaButtonProps} from '@react-types/button';
import CircularSpinner from '../loading-indicators/circular-spinner';
import {mergeRefs} from '@/utils/react';

export type CommonButtonProps = {
  isLoading?: boolean;
  children?: React.ReactNode;
} & React.ComponentPropsWithoutRef<'button'> &
  AriaButtonProps<'button'>;

const Button = forwardRef((props: CommonButtonProps, ref) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const refs = mergeRefs(ref, buttonRef);

  const {isLoading, children, ...rest} = props;

  const {focusProps, isFocusVisible, isFocused} = useFocusRing(props);

  const {buttonProps} = useButton(props, buttonRef);

  return (
    <button
      ref={refs}
      {...rest}
      {...mergeProps(buttonProps, focusProps)}
      tw="relative h-10 items-center w-full focus:outline-none flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-brand-600 hover:bg-brand-700 "
      css={[isFocusVisible && tw`outline-none ring-2 ring-offset-2 ring-brand-500`]}>
      {isLoading ? <CircularSpinner tw="w-4 h-4 text-white" /> : children}
    </button>
  );
});

Button.displayName = 'FilledButton';

export default memo(Button);
