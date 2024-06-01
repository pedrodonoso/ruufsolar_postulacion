export default function CardComponent({
  children,
  result,
  title,
  onClick,
}: {
  children: React.ReactNode;
  result: number | null;
  title: string;
  onClick: () => void;
}) {
  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form className="space-y-6" action="#">
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">
          {title}
        </h5>
        {children}
        <div className="flex flex-row">
          <button
            type="submit"
            onClick={onClick}
            className=" w-1/2 mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Calcular
          </button>
        </div>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
          Resultado:
        </div>
        <div className="flex flex-row">
          <div className="text-sm font-lg text-gray-500 dark:text-gray-300  mx-auto">
            {result} Paneles
          </div>
        </div>
      </form>
    </div>
  );
}
