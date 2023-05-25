import React, { ChangeEvent, useState, useEffect } from 'react';

export const DebounceFn: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [debouncedValue, setDebouncedValue] = useState<string>('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [inputValue]);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(event: ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value)}
      />
      <p> Debounced value: {debouncedValue}</p>
    </>
  );
};
