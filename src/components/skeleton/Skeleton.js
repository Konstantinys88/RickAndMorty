import React from 'react'
import ContentLoader from 'react-content-loader'

const Skeleton = props => {
  return (
    // <ContentLoader 
    // viewBox="0 0 260 160" 
    // height={250} 
    // width={420}
    // backgroundColor="#3f3b3b"
    // foregroundColor="#ecebeb"
    // {...props}>
    //   <circle cx="50" cy="30" r="30" />
    //   <rect x="10" y="70" rx="3" ry="3" width="40" height="10" />
    //   <rect x="60" y="70" rx="3" ry="3" width="70" height="10" />
    //   <rect x="140" y="70" rx="3" ry="3" width="20" height="10" />
    //   <rect x="10" y="90" rx="3" ry="3" width="90" height="10" />
    //   <rect x="110" y="90" rx="3" ry="3" width="70" height="10" />
    //   <rect x="10" y="110" rx="3" ry="3" width="70" height="10" />
    //   <rect x="90" y="110" rx="3" ry="3" width="60" height="10" />
    // </ContentLoader>

    <ContentLoader
      speed={3}
      width={300}
      height={450}
      viewBox="0 0 300 450"
      backgroundColor="#2f2d2d"
      foregroundColor="#ecebeb"
      {...props}
    >
      <circle cx="120" cy="116" r="96" />
      <rect x="48" y="236" rx="0" ry="0" width="299" height="34" />
      <rect x="48" y="293" rx="0" ry="0" width="299" height="34" />
      <rect x="9" y="349" rx="0" ry="0" width="299" height="34" />
      <rect x="9" y="399" rx="0" ry="0" width="302" height="34" />
      <rect x="247" y="7" rx="0" ry="0" width="46" height="206" />
      <rect x="277" y="29" rx="0" ry="0" width="0" height="10" />
    </ContentLoader>
  )
}



export default Skeleton;