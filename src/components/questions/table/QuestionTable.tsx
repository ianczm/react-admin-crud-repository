import { DataTable } from "@/components/ui/data-table";
import { COLUMNS, Question } from "@/models/Question";
import axios from "axios";
import { useEffect, useState } from "react";

async function getQuestions(handlers: {
  onSuccess: (data: Question[]) => void;
  onError: (error: unknown) => void;
  onFinally?: () => void;
}) {
  const { onSuccess, onError } = handlers;

  try {
    await axios
      .get("http://localhost:3001/questions")
      .then((res) => res.data as unknown as Question[])
      .then(onSuccess);
  } catch (err) {
    onError(err);
  }
}

export default function QuestionTable() {
  const [data, setData] = useState([] as Question[]);

  useEffect(() => {
    getQuestions({
      onSuccess: setData,
      onError: console.log,
    });
  }, []);

  return (
    <>
      <DataTable columns={COLUMNS} data={data} />
    </>
  );
}
