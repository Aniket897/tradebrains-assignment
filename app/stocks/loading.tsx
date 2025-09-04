import { Loader } from "lucide-react";

function loading() {
  return (
    <div>
      <div className="flex items-center justify-center flex-col min-h-screen gap-2">
        <Loader className="animate-spin" />
        loading....
      </div>
    </div>
  );
}

export default loading;
