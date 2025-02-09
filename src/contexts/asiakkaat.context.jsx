import { createContext, useState } from "react";

import ASIAKKAAT from '../shop-data.json'

export const AsiakkaatContext = createContext({
    asiakkaat: [],
})

export const AsiakkaatProvider = ({children}) => {
    const [asiakkaat, setAsiakkaat] = useState(ASIAKKAAT);
    const value = {asiakkaat};
    return (
        <AsiakkaatContext.Provider value={value}>{children}</AsiakkaatContext.Provider>
    )
}