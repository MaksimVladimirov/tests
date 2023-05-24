import React, { ChangeEvent, useState } from 'react';

export const DebounceFn: React.FC = () => {
  const [inputValue, setInputValue] = React.useState<string>('');
  const [debouncedValue, setDebouncedValue] = useState<string>('');

  React.useEffect(() => {
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
