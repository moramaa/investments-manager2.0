import { useState } from "react";

export const NoteEditor = ({
  onSave,
}: {
  onSave: (note: { title: string; content: string;  }) => void;
}) => {
  const [code, setCode] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  // const [initialInvestment, setInitialInvestment] = useState<number>(0);

  return (
    <div className="card mt-5 border border-gray-200 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">
          <input
            type="text"
            placeholder="Note title"
            className="input-primary input input-lg w-full font-bold"
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
          />
          {/* <input
            type="number"
            placeholder="initial Investment"
            className="input-primary input input-lg w-full font-bold"
            value={initialInvestment}
            onChange={(e) => setInitialInvestment(e.currentTarget.valueAsNumber )}
          /> */}
        </h2>
    
      </div>
      <div className="card-actions justify-end">
        <button
          onClick={() => {
            onSave({
              title,
              content: code,
              // initialInvestment,
            });
            setCode("");
            setTitle("");
            // setInitialInvestment(0);
          }}
          className="btn-primary btn"
          disabled={title.trim().length === 0 || code.trim().length === 0}
        >
          Save
        </button>
      </div>
    </div>
  );
};
