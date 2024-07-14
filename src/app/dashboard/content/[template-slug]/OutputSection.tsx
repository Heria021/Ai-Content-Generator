'use clien'
import React, { useEffect, useRef, useState } from 'react'

import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { CheckCheck, CopyIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PROPS {
  aiOutput: string
}
function OutputSection({ aiOutput }: PROPS) {

  const editorRef:any = useRef();

  useEffect(() => {
    const editorInstace = editorRef.current.getInstance();
    editorInstace.setMarkdown(aiOutput);
  },[aiOutput])

  const [copy, setCopy] =useState<boolean>(false)

  return (
    <div className='bg-white shadow-lg border p-4'>
      <div className="flex justify-between items-center pb-5 px-2">
        <h2 className=' text-lg font-medium'>Your Result</h2>
        <Button className='p-2' onMouseDown={()=>{navigator.clipboard.writeText(aiOutput); setCopy(true); setTimeout(()=>setCopy(false), 1000)}}>{copy?<CheckCheck size={18}/>:<CopyIcon size={18}/>}</Button>
    </div>
      <Editor
        ref={editorRef}
        height="600px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
      />
    </div>
  )
}

export default OutputSection