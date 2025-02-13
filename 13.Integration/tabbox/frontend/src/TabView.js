import React from 'react';
import {Tab_View} from './assets/scss/TabView.scss';

function TabView({data, selectTab}) {

  const selectedContents = data.filter((item) => item.no === selectTab);

  return (
    <div className={Tab_View}>
            {selectedContents.length > 0 && selectedContents[0]?.contents}
    </div>
  )
}

export default TabView