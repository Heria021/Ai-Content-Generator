'use client'
import { db } from '@/utils/db';
import { useUser } from '@clerk/nextjs';
import React, { useContext, useEffect, useState } from 'react'
import { eq } from "drizzle-orm";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { AiOutput } from '@/utils/schema';
import { CheckCheck, CopyIcon, Key } from 'lucide-react';
import { Button } from '@/components/ui/button';


export interface HISTORY {
  id: number,
  formData: string,
  aiResponse: string,
  templateSlug: string,
  createdBy: string,
  createdAt: string
}

function History() {
  const { user } = useUser();
  const [copy, setCopy] = useState<boolean>(false);
  const [history, setHistory] = useState<HISTORY[]>([]);
  const [seletedId, setSelectedId] = useState<number>();


  useEffect(() => {
    user && GetData();
  }, [user])

  const GetData = async () => {
    {/*@ts-ignore */ }
    const result: HISTORY[] = await db.select().from(AiOutput).where(eq(AiOutput.createdBy, user.primaryEmailAddress.emailAddress)) as HISTORY[];
    GetTotalUsage(result);
  }

  const GetTotalUsage = (result: HISTORY[]) => {
    setHistory(result);
  }

  const handleSwitch = (id: number) => {
    setSelectedId(id)
    setTimeout(() =>
      setSelectedId(1000000), 1000);
  }

  const formResolver = (data: string | null) => {
    let formObj: any[] = [];

    if (data) {
      formObj.push(JSON.parse(data));
      return (
        <>
          {formObj.map((item: any, index: number) => (
            <React.Fragment key={index}>
              <p>Title: {item.niche}</p>
              {item.outline && <p>Outline: {item.outline}</p>}
              {item.info && <p>Outline: {item.outline}</p>}
            </React.Fragment>
          ))}
        </>
      );
    }

    return 'Data is null or empty';
  }

  return (
    <div className='p-2 md:p-10'>
      <Table>
        <TableCaption>Chat History</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>AI Response</TableHead>
            <TableHead className='hidden md:table-cell'>Created By</TableHead>
            <TableHead className='hidden md:table-cell'>Input</TableHead>
            <TableHead className='hidden md:table-cell'>Created At</TableHead>
            <TableHead>copy</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {history.map((item, index) => (
            <TableRow key={index}>
              <TableCell className='line-clamp-3 p-0 m-2 max-w-2xl'>{item.aiResponse}</TableCell>
              <TableCell className='hidden md:table-cell'>{item.createdBy}</TableCell>
              <TableCell className='hidden md:table-cell max-w-[300px]'>{formResolver(item.formData)}</TableCell>
              <TableCell className='hidden md:table-cell'>{item.createdAt}</TableCell>
              <TableCell>
                <Button
                  id={`${index}`}
                  className='p-2 bg-primary'
                  onMouseDown={() => {
                    navigator.clipboard.writeText(item.aiResponse);
                    handleSwitch(index);
                  }}>
                  {seletedId === index ? <CheckCheck size={18} /> : <CopyIcon size={18} />}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default History