import { DataTable } from "@/components/ui/data-table";
import { COLUMNS, Question } from "@/models/Question";
import QuestionServiceContext from "@/services/QuestionServiceProvider";
import { useContext, useEffect, useState } from "react";

export default function QuestionTable() {
  const [data, setData] = useState([] as Question[]);
  const questionService = useContext(QuestionServiceContext);

  async function getQuestions(handlers: {
    onSuccess: (data: Question[]) => void;
    onError: (error: unknown) => void;
    onFinally?: () => void;
  }) {
    const { onSuccess, onError } = handlers;

    try {
      await questionService?.getQuestions().then(onSuccess);
    } catch (err) {
      onError(err);
    }
  }

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
