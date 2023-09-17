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
import { FacetedFilterOption } from "@/components/ui/data-table-faceted-filter";
import { CircleIcon } from "@radix-ui/react-icons";

export type Question = {
  id: string;
  title: string;
  category: QuestionCategory[];
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

export const FACETED_FILTERS: {
  Category: FacetedFilterOption[];
  Complexity: FacetedFilterOption[];
} = {
  Category: [
    {
      value: QuestionCategory.FUNCTIONAL.toLowerCase(),
      label: QuestionCategory.FUNCTIONAL,
      icon: CircleIcon,
    },
    {
      value: QuestionCategory.OBJECT_ORIENTED.toLowerCase(),
      label: QuestionCategory.OBJECT_ORIENTED,
      icon: CircleIcon,
    },
    {
      value: QuestionCategory.MATHEMATICAL.toLowerCase(),
      label: QuestionCategory.MATHEMATICAL,
      icon: CircleIcon,
    },
  ],
  Complexity: [
    {
      value: QuestionComplexity.EASY.toLowerCase(),
      label: QuestionComplexity.EASY,
      icon: CircleIcon,
    },
    {
      value: QuestionComplexity.MEDIUM.toLowerCase(),
      label: QuestionComplexity.MEDIUM,
      icon: CircleIcon,
    },
    {
      value: QuestionComplexity.HARD.toLowerCase(),
      label: QuestionComplexity.HARD,
      icon: CircleIcon,
    },
  ],
};

export const COLUMNS: ColumnDef<Question>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
  },
  {
    accessorKey: "category",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Category" />
    ),
  },
  {
    accessorKey: "complexity",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Complexity" />
    ),
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
