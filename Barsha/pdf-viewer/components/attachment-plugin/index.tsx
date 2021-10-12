import React from "react"
import { attachmentPlugin } from "@react-pdf-viewer/attachment"
import { Viewer, LocalizationMap, classNames } from "@react-pdf-viewer/core";
import { fullScreenPlugin, RenderEnterFullScreenProps } from '@react-pdf-viewer/full-screen';
import { getFilePlugin, RenderDownloadProps } from '@react-pdf-viewer/get-file';
import { openPlugin , RenderOpenProps } from "@react-pdf-viewer/open";
// import { pageNavigationPlugin, RenderGoToPageProps } from '@react-pdf-viewer/page-navigation';
import { printPlugin, RenderPrintProps } from '@react-pdf-viewer/print';
import { propertiesPlugin, RenderShowPropertiesProps } from '@react-pdf-viewer/properties';

import classes from "./attachment-login.module.scss";
import '@react-pdf-viewer/properties/lib/styles/index.css';
import '@react-pdf-viewer/print/lib/styles/index.css';
import '@react-pdf-viewer/full-screen/lib/styles/index.css';
import '@react-pdf-viewer/page-navigation/lib/styles/index.css';

import de_DE from '@react-pdf-viewer/locales/lib/de_DE.json';

const Attachment: React.FC = () =>{
  const attachmentPluginInstance = attachmentPlugin();
  const {Attachments} = attachmentPluginInstance;
  const fullScreenPluginInstance = fullScreenPlugin();
  const { EnterFullScreen } = fullScreenPluginInstance;
  const getFilePluginInstance = getFilePlugin();
  const { DownloadButton, Download } = getFilePluginInstance;
  const openPluginInstance = openPlugin();
  const { Open } = openPluginInstance;
  // const pageNavigationPluginInstance = pageNavigationPlugin();
  // const { GoToFirstPage, GoToLastPage, GoToNextPage, GoToPreviousPage } = pageNavigationPluginInstance;
  const printPluginInstance = printPlugin();
  const { Print } = printPluginInstance;
  const propertiesPluginInstance = propertiesPlugin();
  const { ShowProperties } = propertiesPluginInstance;

  return(
    <>
      <div
        style={{
            border: '1px solid rgba(0, 0, 0, 0.3)',
            display: 'flex',
            height: '50%',
        }}
      >
      <div
        style={{
            borderRight: '1px solid rgba(0, 0, 0, 0.3)',
            overflow: 'auto',
            width: '30%',
        }}
      >
        <EnterFullScreen>
          {(props: RenderEnterFullScreenProps) => (
            <button style={{
              backgroundColor: '#357edd',
              border: 'none',
              borderRadius: '4px',
              color: '#ffffff',
              cursor: 'pointer',
              padding: '8px',
              }}
              onClick={props.onClick}
              >
                Enter fullscreen
              </button>
          )}
        </EnterFullScreen>
        <DownloadButton />
        <Download>
          {(props: RenderDownloadProps) => (
            <button
              style={{
                backgroundColor: '#357edd',
                border: 'none',
                borderRadius: '4px',
                color: '#ffffff',
                cursor: 'pointer',
                padding: '8px',
              }}
              onClick={props.onClick}
            >
               Download
            </button>
          )}
        </Download>
        
        <Open>
          {(props: RenderOpenProps) => (
            <div
              style={{
                backgroundColor: '#357edd',
                border: 'none',
                borderRadius: '4px',
                color: '#ffffff',
                cursor: 'pointer',
                padding: '8px',
                position: 'relative',
                width:"100px"
              }}
            >
              <input
                type="file"
                onChange={(e) => props.onClick(e)}
                style={{
                  bottom: 0,
                  cursor: 'pointer',
                  height: '100%',
                  left: 0,
                  opacity: 0,
                  position: 'absolute',
                  right: 0,
                  top: 0,
                  width: '100%',
                }}
              />
                 Open file
          </div>
        )}
        </Open>
                <Print>
                  {(props: RenderPrintProps) => (
                    <button className={classes.bluebutton} onClick={props.onClick} >
                  Print
                </button>
                )}
              </Print>
        <ShowProperties>
          {(props: RenderShowPropertiesProps) => (
            <button className={classes.bluebutton} onClick={props.onClick} >
               Properties
            </button>
          )}
        </ShowProperties>
        <Attachments />
    </div>
    <div style={{ width:"30%" }}>
      
      <Viewer
        theme="dark"
        fileUrl="/pdfwithattachment.pdf"
          plugins={[
                // Register the attachment plugin
                attachmentPluginInstance,fullScreenPluginInstance,
                getFilePluginInstance, openPluginInstance,
                printPluginInstance, propertiesPluginInstance
            ]}
            localization={de_DE as unknown as LocalizationMap}
      />
    </div>
    
  </div>
    </>
  )
}

export default Attachment;