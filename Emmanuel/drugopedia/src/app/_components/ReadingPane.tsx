'use client'

import { useSelector } from 'react-redux';
import { selectCPage } from '../../lib/features/loginSlice';
import DynamicRoute from "./DynamicRoute";

export const dynamic = 'force-dynamic'

export default function ReadingPane() {
  const cPage = useSelector(selectCPage);
  return (
    <div className="col-lg-6 p-5">
                <div className="row g-4">
                <div className="col-sm-8">
                <DynamicRoute id={cPage} />
                </div>
            </div>

            </div>
  );
}
