import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import { Card } from 'antd';
import { relative } from 'path';
import { useRef } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import RenderCode from './RenderCode';


export default function Index() {


  // function showValue() {
  //   console.log((editorRef.current as any)?.getValue());
  // }



  return (
    <>
      {/* <button onClick={showValue}>Show value</button> */}
      <Outlet />
      <Card style={{ width: 1000, height: 800, overflow: 'hidden' }}>

      </Card>

    </>
  )
}