function logoX({ className }) {
  return (
    <div className={className}>
      <svg version="1.1" x="0px" y="0px" viewBox="0 0 400 50">
        <title>X Logo</title>

        <g className="letter_x">
          <path d="M287.6,18.6H273l17.2,12.6c2.5-1.7,5.4-3.5,8-5L287.6,18.6z"></path>
          <path d="M308.8,34.3c-2.5,1.7-5,3.6-7.4,5.4l13,9.5h14.7L308.8,34.3z"></path>
        </g>
        <g className="letter_swoosh">
          <path d="M399,0.7c-80,4.6-117,38.8-125.3,46.9l-1.7,1.6h14.8C326.8,9.1,384.3,2,399,0.7L399,0.7z"></path>
        </g>
      </svg>
    </div>
  );
}
export default logoX;
