import { useState } from "react";

import ReactMarkdown from "react-markdown";

import { type RouterOutputs } from "../utils/api";

type Note = RouterOutputs["note"]["getAll"][0];

export const NoteCard = ({
  note,
  onDelete,
}: {
  note: Note;
  onDelete: () => void;
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  return (
    <div className="card mt-5 border border-gray-200 bg-base-100 shadow-xl">
      <div className="card-body m-0 p-3">
        <div
          className={`collapse-arrow ${isExpanded ? "collapse-open" : ""
            } collapse`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          
          <div className="collapse-title text-xl font-bold flex flex-row-reverse  ">{note.investmentName}
          <div className="divider divider-horizontal"/>
            <div className="stats shadow flex-1 ">

              <div className="stat">
                <div className="stat-figure text-primary" />

                <div className="stat-title">סכום הקרן</div>
                <div className="stat-value text-primary">צריך ליצור משתנה חדש</div>
              </div>
              <div className="stat">
                <div className="stat-figure text-primary" />

                <div className="stat-title">הפקדה חודשית</div>
                <div className="stat-value text-primary">{note.monthlyDeposit}</div>
              </div>
              <div className="stat">
                <div className="stat-figure text-primary" />

                <div className="stat-title">השקעה לתקופת זמן של</div>
                <div className="stat-value text-primary">{note.yearsOfInvestment}</div>
              </div>

            </div>

          </div>
   
          <div className="collapse-content">


            <div className="stats shadow">

              <div className="stat">
                <div className="stat-figure text-primary" />

                <div className="stat-title">צבירה התחלתית</div>
                <div className="stat-value text-primary">{note.initialInvestment}</div>
              </div>
              <div className="stat">
                <div className="stat-figure text-primary" />

                <div className="stat-title">דמי ניהול מחיסכון</div>
                <div className="stat-value text-primary">{note.annualManagementFees}</div>
              </div>
              <div className="stat">
                <div className="stat-figure text-primary" />

                <div className="stat-title">דמי ניהול מצבירה</div>
                <div className="stat-value text-primary">{note.monthlyManagementFees}</div>
              </div>
              <div className="stat">
                <div className="stat-figure text-primary" />

                <div className="stat-title">ריבית שנתית</div>
                <div className="stat-value text-primary">{note.annualInterestRate}</div>
              </div>


            </div>

          </div>
        </div>

        <div className="card-actions mx-2 flex justify-end">
          <button className="btn-warning btn-xs btn px-5" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
