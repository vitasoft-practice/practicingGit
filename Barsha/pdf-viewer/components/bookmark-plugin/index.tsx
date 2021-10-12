import React from "react";
import { bookmarkPlugin } from "@react-pdf-viewer/bookmark";
import { Viewer, SpecialZoomLevel } from "@react-pdf-viewer/core";
import classes from "../globalscss/global.module.scss";
import '@react-pdf-viewer/bookmark/lib/styles/index.css';


const Bookmarkplugin: React.FC =()=>{
  const bookmarkPluginInstance = bookmarkPlugin();
  const { Bookmarks } = bookmarkPluginInstance;

  return(
    <div className={classes.outercontainer}>
    <div className={classes.right}>
        <Bookmarks />
    </div>
    <div className={classes.left} >
        <Viewer fileUrl="/pdfsample.pdf"  defaultScale={SpecialZoomLevel.PageFit} plugins={[bookmarkPluginInstance]} />
    </div>
</div>
  )
}

export default Bookmarkplugin;