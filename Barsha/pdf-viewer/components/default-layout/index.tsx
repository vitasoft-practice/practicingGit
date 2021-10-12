import React from "react";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { Viewer } from "@react-pdf-viewer/core";
import { dropPlugin } from '@react-pdf-viewer/drop';
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import '@react-pdf-viewer/drop/lib/styles/index.css';

const Defaultlayout: React.FC = ()=>{
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const dropPluginInstance = dropPlugin();

  return(
    <div
        style={{
          height: '750px',
          width: '900px',
          marginLeft: 'auto',
          marginRight: 'auto',
          }}
      >
                <Viewer initialPage={4} fileUrl="/pdfsample.pdf" plugins={[defaultLayoutPluginInstance , dropPluginInstance]} />
            </div>
  )
}
export default Defaultlayout;