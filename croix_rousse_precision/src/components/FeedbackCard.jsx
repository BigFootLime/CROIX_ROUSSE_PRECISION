const FeedbackCard = ({ content, name, title, img }) => (
  <div className="flex flex-col sm:flex-row justify-start items-center px-6 py-8 rounded-[20px] max-w-[500px] bg-[#123456] my-5 feedback-card">
    {/* Use flex-col for mobile and flex-row for larger screens */}
    <img
      src={img}
      alt={name}
      className="w-60 h-60 rounded-full sm:mr-4 mb-4 sm:mb-0"
    />{" "}
    {/* Margin-bottom only on mobile */}
    <div className="flex flex-col justify-center flex-grow">
      <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
        {name}
      </h4>
      <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
        {title}
      </p>
    </div>
  </div>
);

export default FeedbackCard;
