import React, { useState } from 'react'

export default function DataContext({children}) {
    const [data, setData] = useState('');

    return (
      <DataContext.Provider value={{ data, setData }}>
        {children}
      </DataContext.Provider>
    );
}
