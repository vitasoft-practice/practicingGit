import React from "react";
import {SpecialZoomLevel, Viewer , Worker} from "@react-pdf-viewer/core";
import ThumbnailPdf from "../thumbnail-pdf";
import Attachment from "../attachment-plugin";
import "@react-pdf-viewer/core/lib/styles/index.css";
import WaterMark from "../watermark-pdf";
import Defaultlayout from "../default-layout";

const Pdfviewer: React.FC = () => {
  return(
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.9.359/build/pdf.worker.js">
      {/* <div style={{height:"300px" , width: "300px"}} >
        <Viewer fileUrl="/readviolinmusic.pdf" defaultScale={SpecialZoomLevel.PageFit}/>
      </div>  
      <div >
        <ThumbnailPdf />
      </div> */}
      <Defaultlayout />
      <h3>Attachment Plugin</h3>
      <Attachment />
      <hr/>
     
      <hr/>
      <h3>Watermarked PDF</h3>
      <WaterMark fileUrl="/readviolinmusic.pdf" /> 
    </Worker>
  )
}
export default Pdfviewer;