'use client'

import PageButton from "./PageButton";

export const dynamic = 'force-dynamic'

export default function HomePage() {

  const bItem = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  return (
    <>
    <h1 className="mb-4">Details of drugs available in India</h1>
             <p className="mb-4">This site has the following details about drugs commonly available in India</p>
             <p><i className="far fa-check-circle text-primary me-3"></i>Trade names / Brand names</p>
             <p><i className="far fa-check-circle text-primary me-3"></i>Indications - When it should be prescribed</p>
             <p><i className="far fa-check-circle text-primary me-3"></i>Contraindications - When it should not be prescribed</p>
             <p><i className="far fa-check-circle text-primary me-3"></i>Drug dosage</p>
             <p><i className="far fa-check-circle text-primary me-3"></i>Route of administration - How it should be taken</p>
             <p><i className="far fa-check-circle text-primary me-3"></i>Warnings and precautions</p>
             <p><i className="far fa-check-circle text-primary me-3"></i>Side effects</p>
             <p><i className="far fa-check-circle text-primary me-3"></i>Other precautions</p>
             <p><i className="far fa-check-circle text-primary me-3"></i>Storage conditions</p>
             <p><i className="far fa-check-circle text-primary me-3"></i>Drug Schedule</p>
             { bItem.map((item)=><PageButton l={item} key={item} />) }
</>
  );
}