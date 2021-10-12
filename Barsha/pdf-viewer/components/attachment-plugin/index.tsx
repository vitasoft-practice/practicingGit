import React from "react"
import { attachmentPlugin } from "@react-pdf-viewer/attachment"
import { Viewer } from "@react-pdf-viewer/core";
import { fullScreenPlugin, RenderEnterFullScreenProps } from '@react-pdf-viewer/full-screen';
import '@react-pdf-viewer/full-screen/lib/styles/index.css';
import { getFilePlugin, RenderDownloadProps } from '@react-pdf-viewer/get-file';


const Attachment: React.FC = () =>{
  const attachmentPluginInstance = attachmentPlugin();
  const {Attachments} = attachmentPluginInstance;
  const fullScreenPluginInstance = fullScreenPlugin();
  const { EnterFullScreen } = fullScreenPluginInstance;
  const getFilePluginInstance = getFilePlugin();
  const { DownloadButton, Download } = getFilePluginInstance;
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
        <Attachments />
    </div>
    <div style={{ width:"30%" }}>
      <Viewer
        theme="dark"
        fileUrl="/pdfwithattachment.pdf"
          plugins={[
                // Register the attachment plugin
                attachmentPluginInstance,fullScreenPluginInstance,getFilePluginInstance
            ]}
      />
    </div>
  </div>
    </>
  )
}

export default Attachment;