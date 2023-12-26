
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

export default function ComponentTheory() {
  return (
    <>
      <Title level={2}>组件设计理论</Title>
      <Title level={3}> 1、什么是前端组件？</Title>
      <Paragraph>
        就前端开发而言，组件可以简单的描述为视图逻辑和非视图逻辑的集合。视图逻辑即样式代码和视图交互部分，用于组件样式和交互动作的渲染，非视图逻辑可以看做数据处理逻辑和交互处理逻辑代码。视图和数据的结合构成了一个完整的前端组件。
      </Paragraph>
      <Title level={3}>2、组件设计原则</Title>
      <Paragraph>
        “一个组件的复杂度，主要来源就是自身的状态；即组件自身需要维护多少个不依赖于外部输入的状态。”无论组件简单还是复杂，都需要遵循一定的原则进行设计和开发才能保证组价的合理性。
      </Paragraph>
      <Title level={4}>1、单一职责</Title>
      <Paragraph>
        很多软件开发设计类的原则中都强调单一职责这条原则，这是现代软件开发中不可或缺的一条准则。单一职责强调一个组件具备一项“能力”，比如输入框组件具备输入数据能力。
      </Paragraph>
      <Paragraph>
        单一职责可以保证组件是最细的粒度，且有利于复用。但太细的粒度有时又会造成组件的碎片化。因此单一职责组件要建立在可复用的基础上，对于不可复用的单一职责组件，我们仅仅作为独立组件的内部组件即可。
      </Paragraph>
      <Paragraph>
        单一职责同时也具备简化组件的能力，遵守该原则在一定程度上能够使代码足够简单，意味着易读、易维护
      </Paragraph>
      <Title level={4}>封装</Title>
      <Paragraph>
        良好的组件封装应该隐藏内部细节和实现意义，并通过props来控制行为和输出（单向数据流）。同时还要具备减少访问全局变量能力，因为访问全局变量会打破封装，创造了不可预测的行为，并且使测试变得困难。可以将全局变量作为组件的props，而不是直接引用。
      </Paragraph>
      <Paragraph>
        封装能够将不用逻辑代码分离，能够帮助开发中快速定位问题。
      </Paragraph>
      <Title level={4}>组合</Title>
      <Paragraph>
        单一责任原则描述了如何将需求拆分为组件，封装描述了如何组织这些组件，组合描述了如何将整个系统粘合在一起。
      </Paragraph>
      <Paragraph>
        具有多个功能的组件，应该转换为多个单一职责的小组件， 这些小的组件又可以组合成为一个职责更大、功能单一的组件，比如时间选择组件就是由选择组件、输入组件等组合而成；
      </Paragraph>

      <Title level={4}>复用</Title>
      <Paragraph>
        通常来说我们进行组件设计的目的有两种：
        <ol>
          <li>抽取公共功能部分，方便复用（例如基础组件）</li>
          <li>复杂设计/功能分解，便于代码管理和提高代码阅读性（例如业务组件）</li>

        </ol>
      </Paragraph>
      <Title level={4}>富有意义</Title>
      <Paragraph>
        富有意思更多的是指代码的描述意义和可读性。在实际开发中，开发人员大部分时间都在阅读和理解代码，而不是实际编写代码。
      </Paragraph>
      <Paragraph>
        有意义包含的范围很广，凡是有助于代码理解和使用的都可以归为有意义，例如：
        <ul>
          <li>项目名、函数名、变量名、类名等使用符合含义的命名；</li>
          <li>html语义化；</li>
          <li>合理的代码注释；</li>
        </ul>
      </Paragraph>
      <Title level={4}> 可测试</Title>
      <Paragraph>
        现在前端开发过程中一直都在强调单元测试，一个完整的项目单测是不可缺少的一部分，单测可以保证代码正确性、一部分依赖的正确性、以及减少调试时间等。
      </Paragraph>
      <Paragraph>
        单元测试的目的不是为了代码覆盖率，而是为了减少bug出现的概率，以及防止bug回归。小公司人力不足，不应该盲目为了提高覆盖率浪费人力，而是要写关键代码的关键测试。
      </Paragraph>
      <Paragraph>
        而对于组件而言，如果一个组件测试不易于测试，很大可能是组件设计存在问题。
      </Paragraph>
      <Title level={3}>总结</Title>
      <Paragraph>
        一个合理的组件设计大都遵循这些原则，只有理解这些原则之后才能在实际开发中潜移默化的使用这些原则，让我们开发的组件更加合理，同时也会加深自己对前端组件化的理解。
      </Paragraph>
    </>);
}