"use client"
import { Button } from "@/components/ui/button";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { Copy } from "lucide-react";
import { useEffect, useRef } from "react";

interface props {
    response: string,
}

export default function OutputSection({response}: props) {
  
   const editorRef: any = useRef();

    useEffect(()=>{
        const editorInstance = editorRef.current.getInstance();
        editorInstance.setMarkdown(response)

    },[response])

    const handleCopy = ()=>{
        window.navigator.clipboard.writeText(editorRef.current.getInstance().getMarkdown())
        alert("Copied to clipboard")
    }

  return (
    <div className="rounded-lg shadow-lg bg-white border">
        <div className="flex items-center justify-between bg-white p-3">
            <h1 className="font-bold text-lg">Your Result</h1>
            <Button onClick={handleCopy} className="text-medium text-white font-semibold"><Copy/>&nbsp;Copy</Button>
        </div>
      <Editor
      ref={editorRef}
        initialValue="Your result will appear here"
        height="600px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
      />
    </div>
  );
}
