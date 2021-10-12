import type { NextPage } from 'next';
import React, { Fragment } from 'react';
import CustomizeFullScreenButtonExample from '../../components/custom-fullscreen';

const CustomFullScreenButton: NextPage = () => {
  return (
    <Fragment>
      <CustomizeFullScreenButtonExample fileUrl="/pdfsample.pdf" />
    </Fragment>
  );
};

export default CustomFullScreenButton;