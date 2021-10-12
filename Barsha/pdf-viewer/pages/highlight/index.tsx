import type { NextPage } from 'next';
import React, { Fragment } from 'react';
import RenderHighlightContentExample from '../../components/highlight';

const PdfViewer: NextPage = () => {
  return (
    <Fragment>
      <RenderHighlightContentExample fileUrl='/pdfwithattachment.pdf' />
    </Fragment>
  );
};

export default PdfViewer;