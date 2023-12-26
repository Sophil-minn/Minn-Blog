import { Collapse, Divider, Typography } from 'antd';
import SimpleCode from '../../../../components/SimpleCode';
import { code1, code2, code3 } from './code';

const { Title, Paragraph, Text } = Typography;

export default function Optimization1() {
  return (
    <>
      <Title level={3}>withMenu里的Menu总是重新渲染</Title>
      <Collapse
        size="small"
        items={[{
          key: '1', label: '高阶组件withMenu代码', children: <p>
            <SimpleCode value={code3} height={700} /></p>
        }]} />
      <Divider />
      <Collapse
        size="small"
        items={[{
          key: '1', label: '优化前的代码', children: <p>
            <SimpleCode value={code1} height={520} /></p>
        }]} />
      <Divider />
      <Title level={4}>代码分析： </Title>
      <Paragraph>
        每当id参数变化时，而DesignPattern组件重新渲染时， const EnhancedComponent = withMenu(component);因为 在 JavaScript 中，function () { } 或者 () ={'>'} { } 总是会生成不同的函数。
        所以上面的代码的问题在于EnhancedComponent跟随每次id变化，都会是全新的组件， 又因为默认情况下，当一个组件重新渲染时， React 将递归渲染它的所有子组件，因此菜单每次都会重新渲染
      </Paragraph>
      <Title level={4}>代码优化： </Title>
      <Collapse
        size="small"
        items={[{
          key: '1', label: '优化后的代码', children: <p>
            <SimpleCode value={code2} height={200} /></p>
        }]}
      />
      <Divider />
      <Title level={4}>总结：</Title>
      <Paragraph>
        每个组件都应该“独立思考”，而不是在渲染过程中试图与其他组件协调，或者依赖于其他组件。渲染过程就像是一场学校考试：每个组件都应该自己计算 JSX！
        本案例当中，DesignPattern在优化前不算是个纯函数，因为你每次调用，他不能保证都返回相同的结果，该组件正在读写其外部路由带来的的id变量。这意味着 多次调用这个组件会产生不同的 JSX！并且，如果其他组件读取 id ，它们也会产生不同的 JSX，其结果取决于它们何时被渲染！这是无法预测的。因为ID的不同只会影响 调用withMenu的入参component，而menu组件和component组件其实是独立的，所以把逻辑抽象封装在DesignPattern里，这样可以保证EnhancedComponent变成纯函数，而不是在渲染过程中依赖于component组件
      </Paragraph>
    </>
  )
}
