import * as React from 'react';
import { RenderPage, RenderPageProps, Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/full-screen/lib/styles/index.css';

interface WaterMarkProps {
    fileUrl: string;
}

const WaterMark: React.FC<WaterMarkProps> = ({ fileUrl }) => {
    const renderPage: RenderPage = (props: RenderPageProps) => (
        <>
            {props.canvasLayer.children}
            {/* container of the watermark */}
           
            <div
                style={{
                    alignItems: 'center',
                    display: 'flex',
                    height: '100%',
                    justifyContent: 'center',
                    left: 0,
                    position: 'absolute',
                    top: 0,
                    width: '100%',
                }}
            >
                {/* styling of th e watermark */}
                <div
                    style={{
                        color: 'rgba(0, 0, 0, 0.2)',
                        fontSize: `${8 * props.scale}rem`,
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        transform: 'rotate(-45deg)',
                        userSelect: 'none',
                    }}
                >
                    Vitasoft
                </div>
                
                   
              {props.textLayer.children}
              {props.annotationLayer.children}
            </div>
          
        </>
    );

    return <Viewer fileUrl={fileUrl}   renderPage={renderPage} />;
};

export default WaterMark;