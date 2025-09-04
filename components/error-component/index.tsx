import { TriangleAlert } from "lucide-react";

interface IErrorComponentProps {
  error?: string;
}

function ErrorComponent({
  error = "Something went wrong",
}: IErrorComponentProps) {
  return (
    <div>
      <div className="min-h-[100px] flex items-center justify-center flex-col gap-3">
        <TriangleAlert />
        <p>{error}</p>
      </div>
    </div>
  );
}

export default ErrorComponent;
