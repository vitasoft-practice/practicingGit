import React from "react";
import { thumbnailPlugin } from "@react-pdf-viewer/thumbnail";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/thumbnail/lib/styles/index.css";

const ThumbnailPdf : React.FC =() => {

  const thumbnailPluginInstance = thumbnailPlugin();
  const {Thumbnails} = thumbnailPluginInstance;
  return(
    <div className="rpv-core__viewer"  style={{ height:"100%", overflow:"hidden"}}>
     
      <div >
        <Thumbnails />
      </div>
     
      <div style={{flex:1 }}>
        <Viewer fileUrl="/readviolinmusic.pdf" plugins={[thumbnailPluginInstance]} />
      </div>
    </div>
  )
}

export default ThumbnailPdf;