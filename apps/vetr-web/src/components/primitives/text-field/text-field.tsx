import React, {createContext, forwardRef, HTMLAttributes, RefObject, useContext, useRef} from 'react';
import {useFocusRing, useTextField} from 'react-aria';
import {AriaTextFieldProps} from '@react-types/textfield';
import {FocusRingProps} from '@react-aria/focus';
import {mergeRefs} from '@/utils/react';

export type TextFieldRootContextType = {
  inputRef: RefObject<HTMLInputElement>;
  labelProps: HTMLAttributes<HTMLElement>;
  inputProps: HTMLAttributes<HTMLElement>;
  descriptionProps: HTMLAttributes<HTMLElement>;
  errorMessageProps: HTMLAttributes<HTMLElement>;
  label?: string;
};

const TextFieldRootContext = createContext<TextFieldRootContextType>(null as any);

function useTextFieldRoot() {
  const instance = useContext(TextFieldRootContext);

  if (!instance) {
    throw new Error('');
  }

  return instance;
}

export type TextFieldRootProps = {
  children?: React.ReactNode;
  label?: string;
} & AriaTextFieldProps;

function TextFieldRoot(props: TextFieldRootProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const {labelProps, inputProps, descriptionProps, errorMessageProps} = useTextField(props, inputRef);

  return (
    <TextFieldRootContext.Provider
      value={{inputRef, labelProps, inputProps, descriptionProps, errorMessageProps, label: props.label}}>
      <div tw="flex flex-col">{props.children}</div>
    </TextFieldRootContext.Provider>
  );
}

export type TextFieldInputProps = React.ComponentPropsWithoutRef<'input'> & FocusRingProps;

const TextFieldInput = forwardRef((props: TextFieldInputProps, ref) => {
  const {inputProps, inputRef} = useTextFieldRoot();

  const refs = mergeRefs(ref, inputRef);

  const {isFocused, focusProps} = useFocusRing({
    ...props,
    isTextInput: true,
  });

  return (
    <div tw="mt-1 ">
      <input
        {...inputProps}
        {...focusProps}
        {...props}
        ref={refs}
        tw="px-3 py-2 border shadow-sm focus:outline-none focus:ring-brand-500 focus:border-brand-500 focus:ring-1 flex-1 block w-full rounded-md sm:text-sm border-gray-300"
      />
    </div>
  );
});

function TextFieldLabel() {
  const {label, labelProps} = useTextFieldRoot();

  return (
    <label {...labelProps} tw="text-sm font-medium text-gray-600">
      {label}
    </label>
  );
}

TextFieldInput.displayName = 'TextFieldInput';

export default {
  Root: TextFieldRoot,
  Input: TextFieldInput,
  Label: TextFieldLabel,
};
