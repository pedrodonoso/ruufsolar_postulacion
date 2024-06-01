interface InputComponentArgs {
  label: string;
  value: number;
  setValue: (value: number) => void;
}
export default function InputComponent({
  label,
  value,
  setValue,
}: InputComponentArgs) {
  return (
    <div className="p-1 w-full">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <input
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
        type="number"
        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
  );
}
