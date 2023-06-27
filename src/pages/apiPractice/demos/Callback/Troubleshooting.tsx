import { Typography } from 'antd';
import { lazy } from 'react'
import { code16, code17, code18, code19, code20, code21, code22 } from './code';

const Code = lazy(() => import('../../../../components/Code'));

const { Title, Paragraph } = Typography;

export default function Troubleshooting() {
  return (
    <>
      <Title level={2} id="Troubleshooting">3、Troubleshooting </Title>
      <Title level={4} id="useCallback-returns-a-different-function">3.1、Every time my component renders, useCallback returns a different function </Title>
      <Paragraph>
        Every time my component renders, useCallback returns a different function
        Make sure you’ve specified the dependency array as a second argument!
      </Paragraph>
      <Paragraph>
        If you forget the dependency array, useCallback will return a new function every time:
      </Paragraph>
      <Code value={code17} key="forget the dependency array" title="forget the dependency array" />
      <Paragraph>This is the corrected version passing the dependency array as a second argument:</Paragraph>
      <Code value={code18} title="passing the dependency array as a second argument" key="passing the dependency array " />
      <Paragraph>If this doesn’t help, then the problem is that at least one of your dependencies is different from the previous render. You can debug this problem by manually logging your dependencies to the console:</Paragraph>
      <Code value={code19} key="manually logging" title="manually logging dependencies to the console" />
      <Paragraph>You can then right-click on the arrays from different re-renders in the console and select “Store as a global variable” for both of them. Assuming the first one got saved as temp1 and the second one got saved as temp2, you can then use the browser console to check whether each dependency in both arrays is the same:</Paragraph>
      <Paragraph>
        When you find which dependency is breaking memoization, either find a way to remove it, or memoize it as well.
      </Paragraph>
      <Title level={4} id="call-useCallback-for-each-list-item-in-a-loop">3.2、I need to call useCallback for each list item in a loop, but it’s not allowed </Title>
      <Paragraph>
        Suppose the Chart component is wrapped in memo. You want to skip re-rendering every Chart in the list when the ReportList component re-renders. However, you can’t call useCallback in a loop:
      </Paragraph>
      <Code value={code20} key="can’t call useCallback in a loop" title="can’t call useCallback in a loop" height={300} />
      <Paragraph>Instead, extract a component for an individual item, and put useCallback there:</Paragraph>
      <Code value={code21} key="extract a component for an individual" title="extract a component for an individual" height={300} />
      <Paragraph>Alternatively, you could remove useCallback in the last snippet and instead wrap Report itself in memo. If the item prop does not change, Report will skip re-rendering, so Chart will skip re-rendering too:</Paragraph>
      <Code value={code22} key=" instead wrap Report itself in memo" title=" instead wrap Report itself in memo" />
    </>
  )
}
