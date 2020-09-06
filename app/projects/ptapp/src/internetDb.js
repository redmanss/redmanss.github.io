import React, { useEffect, useState } from 'react'

export const loadInternetDb = () => {
    useEffect(() => {
        fetch ('https://packtradeapp.firebaseio.com/telehandlers.json')
          .then((response) => response.json())
          .then((json) => setData(json))
      }, [])
      
      const [dataState, setData] = useState([]);

      console.log('Export from base...')
}
