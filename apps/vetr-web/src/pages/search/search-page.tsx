import Button from '@/components/buttons/button';
import Modal, {useModalRoot} from '@/components/primitives/modal/modal';
import {useTransition, config, animated} from 'react-spring';
import React from 'react';
import {FocusScope} from 'react-aria';
import {keyframes, css} from '@emotion/react';
import {useLocation, useNavigate} from 'react-router';
import {useMangaSearch} from '@/hooks/mangadex/useMangaSearch';
import {useForm, useWatch} from 'react-hook-form';
import {Link} from 'react-router-dom';

const slide = keyframes`
  from {
    transform: scaleX(0.8);
  }
  to {
    transform: scaleX(1);
  }
`;

const slideDown = keyframes`
  from {
    transform: translate3d(0,-40px,0)
    opacity: 0;
  }
  to {
    opacity: 1;
    transform: translate3d(0,0,0)
  }
`;

function SearchContent() {
  const {register, watch} = useForm();

  const query = watch('query');

  const {data: mangas} = useMangaSearch(
    {title: query, limit: 4},
    {
      refetchOnWindowFocus: false,
      enabled: Boolean(query),
    },
  );

  return (
    <div tw="relative overflow-auto bg-white flex flex-col h-screen w-screen">
      <div tw="border-gray-200 border-b h-14 flex flex-shrink-0">
        <div
          tw="flex items-center px-4 container mx-auto "
          css={css`
            transform: scaleX(0.95);
            animation-name: ${slide};
            animation-duration: 165ms;
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
            animation-fill-mode: forwards;
          `}>
          <input
            autoComplete="off"
            spellCheck={false}
            placeholder="Search..."
            tw="w-full focus:outline-none  text-gray-800"
            {...register('query')}
          />
        </div>
      </div>
      {mangas && mangas.total !== 0 && (
        <div tw="overflow-auto flex-grow">
          <div tw="mt-4 container mx-auto flex flex-col ">
            <Link to="/search" tw="sticky my-4 px-3 text-sm flex items-center py-3 font-semibold">
              Manga
              <span tw="text-gray-500 text-xs ml-auto font-medium">
                View all <span tw="bg-brand-600 text-white rounded-full px-2 py-1 ml-2 font-bold">{mangas.total}</span>
              </span>
            </Link>
            {mangas.data.map(m => (
              <Link to={`/manga/${m.id}`} key={m.id} tw="mb-3">
                <div tw=" flex px-4">
                  <img src={m.coverArtUrl} tw="h-24 w-16 rounded-md" />
                  <div tw="ml-4">
                    <p tw="text-sm">{m.title?.['en']}</p>
                    <p tw="text-xs text-gray-600 leading-6">{m.author}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function SearchPage(props: {isOpen: boolean}) {
  const navigate = useNavigate();

  const transitions = useTransition(props.isOpen, {
    from: {opacity: 0},
    enter: {opacity: 1},
    leave: {opacity: 0},
    config: {tension: 320, damping: 32, mass: 0.9, friction: 20, clamp: true},
  });

  return transitions(
    (styles, item) =>
      item && (
        <Modal.Root isOpen={true} isDismissable onClose={() => navigate(-1)}>
          <Modal.Content>
            <animated.div
              id="search-modal-animator"
              style={styles}
              tw="h-screen w-screen z-20 bg-white focus:outline-none">
              <SearchContent />
            </animated.div>
          </Modal.Content>
        </Modal.Root>
      ),
  );
}
