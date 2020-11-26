import { useState, useEffect } from 'react';

const useObservable = (observable, initState) => {
  const [state, setState] = useState(initState);

  useEffect(() => {
    const sub = observable.subscribe((value) => setState(prevState => ({ ...prevState, ...value })));
    return () => sub.unsubscribe();
  }, []);

  return state;
};

export default useObservable;
