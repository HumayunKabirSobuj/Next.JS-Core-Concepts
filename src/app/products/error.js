"use client"
const ErrorPage = ({ error, reset }) => {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl text-red-500 text-center">Something went wrong...</h1>
      <p className="text-3xl text-red-500 text-center">{error.message}</p>

      <div className="text-center">
        <button onClick={()=>reset()} className="text-black bg-green-500 py-2 px-2 rounded-2xl">Try again</button>
      </div>
    </div>
  );
};

export default ErrorPage;
