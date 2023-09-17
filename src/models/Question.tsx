/* eslint-disable react-refresh/only-export-components */
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { FacetedFilter } from "@/components/ui/data-table-faceted-filter";
import { CircleIcon } from "@radix-ui/react-icons";
import { Badge } from "@/components/ui/badge";

export type Question = {
  id: string;
  title: string;
  categories: QuestionCategory[];
  complexity: QuestionComplexity;
  link: string;
  description: string;
};

export enum QuestionCategory {
  FUNCTIONAL = "Functional",
  OBJECT_ORIENTED = "Object-Oriented",
  MATHEMATICAL = "Mathematical",
}

export enum QuestionComplexity {
  EASY = "Easy",
  MEDIUM = "Medium",
  HARD = "Hard",
}

export const FACETED_FILTERS: FacetedFilter[] = [
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

export const COLUMNS: ColumnDef<Question>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
    filterFn: "includesString",
    enableColumnFilter: true,
  },
  {
    accessorKey: "category",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Category" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex flex-col gap-1">
          {row.original.categories.map((category, idx) => (
            <Badge key={idx} className="w-max" variant={"secondary"}>
              {category.valueOf()}
            </Badge>
          ))}
        </div>
      );
    },
    filterFn: "arrIncludes",
    enableColumnFilter: true,
  },
  {
    accessorKey: "complexity",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Complexity" />
    ),
    cell: ({ row }) => {
      return <Badge>{row.original.complexity}</Badge>;
    },
    filterFn: "equalsString",
    enableColumnFilter: true,
  },
  {
    accessorKey: "description",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Description" />
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const question = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(question.id)}
            >
              Copy question ID
            </DropdownMenuItem>
            <DropdownMenuItem>View question details</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Delete question</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
