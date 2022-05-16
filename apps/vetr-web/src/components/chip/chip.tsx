import React from 'react';

export type ChipProps = {
  label?: string;
};

export default function Chip(props: ChipProps) {
  return (
    <span tw="text-xs text-gray-700 py-1 cursor-pointer px-3 rounded-full border border-gray-300">{props.label}</span>
  );
}
