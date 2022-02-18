import React from "react";
import img from '../../assets/f80738e0-07bd-4bfd-ada1-6493f892043a.jpeg'
function Brand(props) {
  const { fill } = props;

  return (
    <React.Fragment>
      {process.env.GATSBY_ENV === "github" ? (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          // width="54"
          // height="54"
          fill='none'
          viewBox='0 0 54 54'
          className={props.className}>
          <path
            fill={fill || "#2B2B2B"}
            d='M51.808 37.674C47.67 47.277 38.12 54 27 54 12.088 54 0 41.912 0 27c0-1.938.204-3.829.592-5.651H11.16a16.719 16.719 0 00-.884 3.907h-.089v3.488h.09c.872 8.467 8.027 15.07 16.724 15.07a16.78 16.78 0 0012.992-6.14h11.816zM53.408 32.651A27.11 27.11 0 0054 27C54 12.088 41.912 0 27 0 15.88 0 6.33 6.723 2.192 16.326h11.816A16.78 16.78 0 0127 10.186c8.697 0 15.852 6.603 16.725 15.07h.089v3.488h-.09a16.719 16.719 0 01-.883 3.907h10.567z'></path>
          <path
            fill={fill || "#2B2B2B"}
            d='M18.738 28.744a8.445 8.445 0 0016.523 0H18.738zM18.738 25.256a8.445 8.445 0 0116.523 0H18.738z'></path>
          <path
            fill={fill || "#2B2B2B"}
            d='M1.605 21.349H24.07v3.907H1.605v-3.907zM29.93 28.744h22.465v3.907H29.93v-3.907z'></path>
        </svg>
      ) : (
        <div className={props.className + " w-full h-full rounded-full bg-cover bg-center"} style={{
          backgroundImage:`url(${img})`
        }}/>
      )}
    </React.Fragment>
  );
}

export default Brand;
