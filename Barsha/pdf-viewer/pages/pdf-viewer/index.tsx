import type { NextPage } from 'next';
import React, { Fragment } from 'react';
import Pdfviewer from '../../components/pdf-viewer';

const PdfViewer: NextPage = () => {
  return (
    <Fragment>
      <Pdfviewer />
    </Fragment>
  );
};

export default PdfViewer;