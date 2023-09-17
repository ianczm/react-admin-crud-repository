import { FacetedFilter } from "@/components/ui/data-table-faceted-filter";
import {
  QuestionCategory,
  QuestionComplexity,
} from "@/models/questions/Question";
import { CircleIcon } from "@radix-ui/react-icons";

const facetedFilters: FacetedFilter[] = [
  {
    accessorKey: "category",
    title: "Category",
    options: [
      {
        value: QuestionCategory.FUNCTIONAL,
        label: QuestionCategory.FUNCTIONAL,
        icon: CircleIcon,
      },
      {
        value: QuestionCategory.OBJECT_ORIENTED,
        label: QuestionCategory.OBJECT_ORIENTED,
        icon: CircleIcon,
      },
      {
        value: QuestionCategory.MATHEMATICAL,
        label: QuestionCategory.MATHEMATICAL,
        icon: CircleIcon,
      },
    ],
  },
  {
    accessorKey: "complexity",
    title: "Complexity",
    options: [
      {
        value: QuestionComplexity.EASY,
        label: QuestionComplexity.EASY,
        icon: CircleIcon,
      },
      {
        value: QuestionComplexity.MEDIUM,
        label: QuestionComplexity.MEDIUM,
        icon: CircleIcon,
      },
      {
        value: QuestionComplexity.HARD,
        label: QuestionComplexity.HARD,
        icon: CircleIcon,
      },
    ],
  },
];

export default facetedFilters;
