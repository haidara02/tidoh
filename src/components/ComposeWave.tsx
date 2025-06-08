import React from "react";
import { Button } from "@ui/button";
import { submitWave } from "@/app/api/actions";
import { toast } from "sonner";

const ComposeWave = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [text, setText] = React.useState<string>("");
  const handleWave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.currentTarget);
    const result = await submitWave(formData);

    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success("Successfully posted your wave!");
    }
    setIsLoading(false);
  };
  return (
    <form onSubmit={handleWave} className="flex flex-col w-full h-full">
      <textarea
        className="flex scrollbar-hidden not-first-of-type:w-full h-fit p-4 bg-transparent border-b-[0.5px] border-gray-500 placeholder:text-muted-foreground outline-none border-none resize-none"
        placeholder="What's happening?"
        name="text"
        value={text}
        maxLength={280}
        onChange={(e) => setText(e.target.value)}
        onInput={(e) => {
          const target = e.target as HTMLTextAreaElement;
          target.style.height = "auto";
          target.style.height = `${target.scrollHeight}px`;
        }}
      />
      <div className="w-full justify-between items-center flex">
        <div></div>
        {/* // Placeholder for future icons or actions */}
        <div className="max-w-[100px]">
          <Button
            disabled={isLoading || text.length < 1}
            type="submit"
            className="rounded-full py-2 px-4 text-md font-bold cursor-pointer transition duration-200"
          >
            Wave
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ComposeWave;
