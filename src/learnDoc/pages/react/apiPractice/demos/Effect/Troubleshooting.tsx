import { Typography } from 'antd';
import SimpleCode from '../../../../../components/SimpleCode';
import { code17, code18 } from './code';
const { Title, Paragraph, Text } = Typography;

export default function Troubleshooting() {
  return (
    <>
      <Title id='useEffect-troubleshooting' level={3}>疑难解答 </Title>
      <Title level={5} id="My-Effect-runs-twice-when-the-component-mounts">Effect 在组件挂载时运行了两次 </Title>
      <Paragraph>在开发环境下，如果开启严格模式，React 会在实际运行 setup 之前额外运行一次 setup 和 cleanup。
        这是一个压力测试，用于验证 Effect 的逻辑是否正确实现。如果出现可见问题，则 cleanup 函数缺少某些逻辑。cleanup 函数应该停止或撤消 setup 函数所做的任何操作。一般来说，用户不应该能够区分 setup 被调用一次（如在生产环境中）和调用 setup → cleanup → setup 序列（如在开发环境中）。
      </Paragraph>
      <Title level={5} id="My-Effect-runs-after-every-re-render">Effect 在每次重新渲染后都运行</Title>
      <Paragraph>首先，请检查是否忘记指定依赖项数组：如果你已经指定了依赖项数组，你的 Effect 仍循环地重新运行，那是因为你的某个依赖项在每次重新渲染时都是不同的。你可以通过手动打印依赖项到控制台来调试此问题：然后，你可以右键单击控制台中来自不同重新渲染的数组，并都选择“存储为全局变量”。假设第一个被保存为 temp1，第二个被保存为 temp2，然后你可以使用浏览器控制台来检查两个数组中的每个依赖项是否相同
        当你发现某个依赖项在每次重新渲染都不同时，通常可以通过以下方式之一来解决：
        <ul>
          <li>在 Effect 中根据先前 state 更新 state</li>
          <li>删除不必要的对象依赖项</li>
          <li>删除不必要的函数依赖项</li>
          <li>从 Effect 读取最新的 props 和 state</li>
        </ul>
        作为最后的手段（如果这些方法没有帮助），使用 useMemo 或 useCallback（用于函数）包装其创建。
      </Paragraph>
      <Title level={5} id="My-Effect-keeps-re-running-in-an-infinite-cycle">Effect 函数一直在无限循环中运行</Title>
      <Paragraph>如果你的 Effect 函数一直在无限循环中运行，那么必须满足以下两个条件：
        <ul>
          <li>你的 Effect 函数更新了一些状态。</li>
          <li>这些状态的改变导致了重新渲染，从而导致 Effect 函数依赖的状态发生改变。</li>
        </ul>
        在开始修复问题之前，问问自己，你的 Effect 是否连接到了某个外部系统（如 DOM、网络、第三方小部件等）。为什么你的 Effect 函数需要设置状态？它是否与外部系统同步？或者你正在试图用它来管理应用程序的数据流？
      </Paragraph>
      <Paragraph>如果没有外部系统，请考虑 完全删除 Effect 函数 是否可以简化你的逻辑。</Paragraph>
      <Paragraph>如果你真的正在与某个外部系统同步，请考虑为什么以及在何种条件下你的 Effect 函数应该更新状态。是否有任何变化会影响组件的可视输出？如果你需要跟踪一些不用于渲染的数据，使用一个 ref（它不会触发重新渲染）可能更合适。验证你的 Effect 函数不会超过需要地更新状态（并触发重新渲染）。</Paragraph>
      <Paragraph>最后，如果你的 Effect 函数在正确的时机更新了状态，但仍然存在一个循环，那是因为该状态更新导致 Effect 的一个依赖项发生了更改</Paragraph>
      <Title level={5} id="My-cleanup-logic-runs-even-though-my-component-didn’t-unmount">即使组件没有卸载，cleanup 逻辑也会运行 </Title>
      <Paragraph>cleanup 函数不仅在卸载期间运行，也在每个依赖项变更的重新渲染前运行。此外，在开发环境中，React 在组件挂载后会立即额外运行一次 setup + cleanup。</Paragraph>
      <Paragraph>如果你的 cleanup 代码没有相应的 setup 代码，这通常是一种代码异味（code smell）：
        <SimpleCode value={code17} height={100} />
        你的 cleanup 逻辑应该与 setup 逻辑“对称”，并且应该停止或撤销任何 setup 做的事情：
        <SimpleCode value={code18} height={200} />
      </Paragraph>

      <Title level={5} id="My-Effect-does-something-visual-and-I-see-a-flicker-before-it-runs">我的 Effect 做了一些视觉相关的事情，在它运行之前我看到了一个闪烁 </Title>
      <Paragraph>如果 Effect 一定要阻止浏览器绘制屏幕，使用 useLayoutEffect 替换 useEffect。请注意，绝大多数的 Effect 都不需要这样。只有当在浏览器绘制之前运行 Effect 非常重要的时候才需要如此：例如，在用户看到 tooltip 之前测量并定位它。</Paragraph>
    </>
  )
}
