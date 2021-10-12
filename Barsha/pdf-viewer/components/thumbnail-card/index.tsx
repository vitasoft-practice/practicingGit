import { Viewer } from "@react-pdf-viewer/core";
import React from "react";
import ThumbnailPdf from "../thumbnail-pdf";
import classes from "./thumbnail-card.module.scss";

const ThumbnailCard: React.FC = () => {

  return(
    <div className={classes.thumbnailcard}>
      <div className={classes.card}>
        <div className={classes.thumbnail}>
          <ThumbnailPdf />
        </div>
        <div className={classes.content}>
          <button type="button" className={classes.content_button}>Download</button>
        </div>
      </div>
    </div>
  )
}

export default ThumbnailCard;