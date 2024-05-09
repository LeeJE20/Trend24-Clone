import { createContext, ReactNode } from 'react';
import { useState } from 'react';

const TransitionContext = createContext({ completed: false });

export const TransitionProvider = ({ children }: {children: ReactNode }) => {
  const [completed, setCompleted] = useState(false);

  const toggleCompleted = (value:boolean) => {
    setCompleted(value);
  };

  return (
    <TransitionContext.Provider
      value={{
        toggleCompleted,
        completed,
      }}
    >
      {children}
    </TransitionContext.Provider>
  );
};

export default TransitionContext;
