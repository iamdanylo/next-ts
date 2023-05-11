import { createContext } from 'react';

const Context = createContext({
    mobileMenuIsOpened: false,
    showHeader: true,
    setMobileMenuIsOpened: (value: boolean) => {},
    setShowHeader: (value: boolean) => {},
});

export default Context;
