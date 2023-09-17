import { DataTable } from "@/components/ui/data-table";
import { Question } from "@/models/questions/Question";
import QuestionServiceContext from "@/providers/questions/QuestionServiceProvider";
import { useCallback, useContext, useEffect, useState } from "react";
import columns from "./QuestionTableColumns";
import facetedFilters from "./QuestionTableFacetedFilters";

export default function QuestionTable() {
  const [data, setData] = useState([] as Question[]);
  const questionService = useContext(QuestionServiceContext);

  const getQuestionsCallback = useCallback(async () => {
    try {
      await questionService?.getQuestions().then(setData);
    } catch (err) {
      console.log(err);
    }
  }, [questionService]);

  useEffect(() => {
    getQuestionsCallback();
  }, [getQuestionsCallback]);

  return (
    <>
      <DataTable columns={columns} data={data} filters={facetedFilters} />
    </>
  );
}
