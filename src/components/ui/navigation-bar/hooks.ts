import { useEffect } from 'react';

interface UseOutsideClickProps {
  ref: React.RefObject<HTMLElement>;
  onClickedOutside: () => void;
}

export const useOutsideComponentClicker = ({ ref, onClickedOutside }: UseOutsideClickProps) => {
  useEffect(() => {
    // Simple implementation that works in any environment
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickedOutside();
      }
    };

    // Use a timeout to avoid immediate execution issues in Storybook
    const timeoutId = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, onClickedOutside]);
};

// Note: useLoginData hook removed - user data should now be passed as props