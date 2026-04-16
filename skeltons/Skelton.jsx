import React from "react"
import ContentLoader from "react-content-loader"

const Skelton = (props) => {

  const array = Array(10).fill(0)
 return (
  <div className="container mt-3">
    <div className="row g-2">
      {
        array.map(( _ , index)=>(

      <div key={index} className="col-lg-4">
        <ContentLoader 
        speed={2}
        width={400}
        height={160}
        viewBox="0 0 400 160"
        backgroundColor="#454545"
        foregroundColor="#ecebeb"
        {...props}
        >
          <rect x="58" y="134" rx="3" ry="3" width="50" height="6" /> 
          <rect x="68" y="144" rx="3" ry="3" width="30" height="6" /> 
          <rect x="41" y="26" rx="0" ry="0" width="84" height="91" /> 
          <rect x="118" y="92" rx="0" ry="0" width="0" height="2" /> 
          <rect x="48" y="124" rx="3" ry="3" width="70" height="6" />
        </ContentLoader>
      </div>
        ))
      }
    </div>
  </div>


)
}

export default Skelton