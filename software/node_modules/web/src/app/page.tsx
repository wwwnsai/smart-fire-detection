import { supabase } from "../../lib/supabaseClient";

export default function Home() {
  const fetchData = async () => {
    let { data, error } = await supabase.from("todos").select("*");
    console.log(data, error);
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Supabase + Next.js + Tailwind 🚀</h1>
      <button
        onClick={fetchData}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        Fetch Data
      </button>
    </div>
  );
}
