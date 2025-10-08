import { useEffect, useRef } from 'react';

const useClickOutside = (callback, enabled = true) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!enabled) return;

    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback(event);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        callback(event);
      }
    };

    // Add event listeners
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);

    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [callback, enabled]);

  return ref;
};

// Alternative version with multiple refs support
export const useClickOutsideMultiple = (callback, enabled = true) => {
  const refs = useRef([]);

  const addRef = (ref) => {
    if (ref && !refs.current.includes(ref)) {
      refs.current.push(ref);
    }
  };

  const removeRef = (ref) => {
    refs.current = refs.current.filter(r => r !== ref);
  };

  useEffect(() => {
    if (!enabled) return;

    const handleClickOutside = (event) => {
      const clickedOutside = refs.current.every(
        ref => ref && !ref.contains(event.target)
      );

      if (clickedOutside) {
        callback(event);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        callback(event);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [callback, enabled]);

  return { addRef, removeRef, refs: refs.current };
};

// Version with custom event types
export const useClickOutsideWithEvents = (
  callback,
  eventTypes = ['mousedown', 'touchstart'],
  enabled = true
) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!enabled) return;

    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback(event);
      }
    };

    // Add all specified event listeners
    eventTypes.forEach(eventType => {
      document.addEventListener(eventType, handleClickOutside);
    });

    // Cleanup
    return () => {
      eventTypes.forEach(eventType => {
        document.removeEventListener(eventType, handleClickOutside);
      });
    };
  }, [callback, eventTypes, enabled]);

  return ref;
};

export default useClickOutside;
