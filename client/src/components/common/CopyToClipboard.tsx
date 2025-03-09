const CopyToClipboard = ({
  value,
  handleCopy,
}: {
  value: string;
  handleCopy: () => void;
}) => {
  return (
    <>
      <input
        type="text"
        readOnly
        value={value}
        className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      />
      <button
        onClick={handleCopy}
        className="bg-indigo-600 text-white px-4 py-2 rounded-r-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Copy
      </button>
    </>
  );
};

export default CopyToClipboard;
