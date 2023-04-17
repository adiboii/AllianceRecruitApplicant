export default function Container({ children }){
 return (
    <div className="min-h-screen h-fit flex flex-col justify-center items-center bg-gray-100">
      <div className="flex-1 w-full max-w-7xl p-8 bg-white shadow">
        {children}
      </div>
    </div>
  );
};

