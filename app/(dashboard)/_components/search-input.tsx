"use client"

import qs from "query-string";
import { Search } from "lucide-react";
import { useDebounce } from 'usehooks-ts'
import { useRouter } from "next/navigation";
import {
  ChangeEvent,
  useEffect,
  useState,
} from "react";
import { Input } from "@/components/ui/input";
export const SearchInput = () => {
  return (
    <div className="w-full relative">
   <Search/>
   <Input/>
    </div>
  );
};

