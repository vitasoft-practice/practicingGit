import React from "react";
import { thumbnailPlugin } from "@react-pdf-viewer/thumbnail";
import { getFilePlugin, RenderDownloadProps } from '@react-pdf-viewer/get-file';
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/thumbnail/lib/styles/index.css";import classes from "./thumbnail-card.module.scss";

const ThumbnailCard: React.FC = () => {
  const thumbnailPluginInstance = thumbnailPlugin();
  const {Thumbnails} = thumbnailPluginInstance;
  const getFilePluginInstance = getFilePlugin();
  const { DownloadButton, Download } = getFilePluginInstance;
  return(
    <>
    <div className={classes.thumbnailcard}>
      <div className={classes.card}>
        <div className={classes.thumbnail}>
              <Thumbnails />
        </div>
        <div className={classes.content}>
        <Download>
          {(props: RenderDownloadProps) => (
            <button className={ classes.content_button } onClick={props.onClick}
            >
               Download
            </button>
          )}
        </Download>
        </div>
      </div>
    </div>
    <div style={{flex:1, overflow:"hidden", display:"hidden", marginTop:"2rem" }}>
      <Viewer fileUrl="/readviolinmusic.pdf" plugins={[thumbnailPluginInstance, getFilePluginInstance]} />
    </div>
    </>
  )
}

export default ThumbnailCard;