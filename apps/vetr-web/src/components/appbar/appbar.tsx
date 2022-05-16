import React from 'react';
import IconButton from '../buttons/icon-button';
import SearchIcon from '@/assets/icons/feather/search.svg';
import UserIcon from '@/assets/icons/feather/user.svg';
import Tooltip from '../primitives/tooltip/tooltip';
import {animated} from '@react-spring/web';
import {useLocation, useNavigate} from 'react-router';

export type AppBarProps = unknown;

export default function AppBar(props: AppBarProps) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav tw="h-14 flex items-center bg-white border-b border-gray-200 border-opacity-90">
      <div tw="justify-between container mx-auto flex items-center">
        <div />
        <div tw="flex">
          <div>
            <Tooltip.Root offset={8} delay={0}>
              <Tooltip.Trigger>
                <IconButton
                  onPress={() => {
                    navigate('/search', {
                      state: {
                        background: location as any,
                      },
                    });
                  }}
                  tw="h-10 w-10">
                  <SearchIcon tw="h-6 w-6 text-gray-700" strokeWidth="2" />
                </IconButton>
              </Tooltip.Trigger>
              <Tooltip.Content>
                <p tw="text-white text-xs font-medium">Search manga</p>
              </Tooltip.Content>
            </Tooltip.Root>
          </div>
          <div tw="ml-2">
            <Tooltip.Root offset={8} delay={0}>
              <Tooltip.Trigger>
                <IconButton tw="h-10 w-10">
                  <UserIcon tw="h-6 w-6 text-gray-700" strokeWidth="2" />
                </IconButton>
              </Tooltip.Trigger>
              <Tooltip.Content>
                <p tw="text-gray-50 leading-4 font-medium text-xs">Account (not yet implemented)</p>
              </Tooltip.Content>
            </Tooltip.Root>
          </div>
        </div>
      </div>
    </nav>
  );
}
