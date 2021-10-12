import type { NextPage } from 'next';
import React, { Fragment } from 'react';
import RenderHighlightsExample from '../../components/highlight';

const PdfViewer: NextPage = () => {
  return (
    <Fragment>
      <RenderHighlightsExample fileUrl='/pdfwithattachment.pdf' />
    </Fragment>
  );
};

export default PdfViewer;