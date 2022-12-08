const Card = ({ title, note, amount, onDelete }) => {
  return (
    <div className="border rounded-md mt-6 p-3 sm:p-7">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-5">
        <h3 className="text-xl font-bold">{title}</h3>
        <span className="font-semibold text-teal-600">Pledge $75 or more</span>
      </div>
      <p>{note}</p>

      <div className="flex flex-col justify-between sm:flex-row sm:items-center mt-5">
        <div className="flex gap-3 items-center justify-center sm:justify-start">
          <span className="text-2xl font-bold">{amount}</span>
          <span>left</span>
        </div>
        <div className="flex flex-col-reverse mt-2 sm:mt-0 sm:flex-row">
          <button
            onClick={onDelete}
            className="rounded-full py-2 px-4 font-semibold text-red-800"
          >
            Delete
          </button>
          <button className="rounded-full py-2 px-4 bg-teal-600 font-semibold text-white">
            Select Reward
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
