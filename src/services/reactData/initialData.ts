export const reactTheory: any = {
  descriptionUI: {
    h2: '描述用户界面',
    id: 'descriptionUI',
    path: '/react/descriptionUI',
    title: '描述UI',
    preIconType: 'dir',
    type: 'addSquare',
    summary: 'React 是一个用于构建用户界面（UI）的 JavaScript 库，用户界面由按钮、文本和图像等小单元内容构建而成。React 帮助你把它们组合成可重用、可嵌套的 组件。从 web 端网站到移动端应用，屏幕上的所有内容都可以被分解成组件。在本章节中，你将学习如何创建、定制以及有条件地显示 React 组件。',
    questionList: [
      {
        key: 0,
        title: '如何创建你的第一个组件',
        id: 'First Component',
        question: '创建第一个组件',
        detail: {
          description: 'React 应用是由被称为 组件 的独立 UI 片段构建而成。React 组件本质上是可以任意添加标签的 JavaScript 函数。组件可以小到一个按钮，也可以大到是整个页面。这是一个 Gallery 组件，用于渲染三个 Profile 组件',
          theory: [
            {
              title: '组件：UI 构成要素',
              id: 'components',
              concept: '组件是 React 的核心概念之一。它们是构建用户界面（UI）的基础',
              elements:'React 允许你将标签、CSS 和 JavaScript 组合成自定义“组件”，即应用程序中可复用的 UI 元素'
            },
            {
              title: '定义组件',
              id: 'defining-a-component ',
              concept: 'React 组件是一段可以 使用标签进行扩展 的 JavaScript 函数',
              methods: [
                {
                  title: '第一步：导出组件', 
                  id: 'export-the-component ',
                  content: 'export default 前缀是一种 JavaScript 标准语法（非 React 的特性）'
                },
                {
                  title: '第二步：定义函数',
                  id: 'Define the function ',
                  content: '使用 function xxx() { } 定义名为 xxx 的 JavaScript 函数。',
                  tips: 'React 组件是常规的 JavaScript 函数，但组件的名称必须以大写字母开头，否则它们将无法运行！'
                },
                {
                  title: '第三步：添加标签', 
                  id: 'Add markup',
                  content: ' JSX允许你在 JavaScript 中嵌入使用标签,返回语句可以全写在一行上,但是，如果你的标签和 return 关键字不在同一行，则必须把它包裹在一对括号中',
                  tips: '没有括号包裹的话，任何在 return 下一行的代码都 将被忽略！'
                },
                {
                  title: '使用组件 ',
                  id: 'Using a component',
                  content: '已经定义了 Profile 组件，你可以在其他组件中使用它'
                }
              ]
            }
          ]
      }},
      {
        key: 1,
        title: '在什么时候以及如何创建多文件组件',
        id: 'Importing and Exporting Components',
        question: '创建多文件组件',
        detail: {
          description: '组件的神奇之处在于它们的可重用性：你可以创建一个由其他组件构成的组件。但当你嵌套了越来越多的组件时，则需要将它们拆分成不同的文件。这样可以使得查找文件更加容易，并且能在更多地方复用这些组件',
          theory: [
            {
              title: '根组件文件',
              id: 'The root component file ',
              concept: '在你的第一个组件 中，你创建了一个 xxx 组件，并且渲染在 根 组件里。所有组件目前都定义在根组件文件中',
            },
            {
              title: '导出和导入一个组件 ',
              id: 'Exporting and importing a component',
              concept: '将组件移出根组件文件会更加合理。这会使组件更加模块化，并且可在其他文件中复用。你可以根据以下三个步骤对组件进行拆分：',
              methods: [
                {
                  title: '创建 一个新的 JS 文件来存放该组件。',
                  content: ''
                },
                {
                  title: '导出 该文件中的函数组件（可以使用 默认导出 或 具名导出）',
                  content: ''
                },
                {
                  title: '在需要使用该组件的文件中 导入（可以根据相应的导出方式使用 默认导入 或 具名导入）。',
                  content: ''
                },
              ]
            },
            {
              title: '从同一文件中导出和导入多个组件',
              id: 'Exporting and importing multiple components from the same file ',
              concept: '同一文件中，有且仅有一个默认导出，但可以有多个具名导出',
              methods: [
                {
                  title: '创建 一个新的 JS 文件来存放该组件。',
                  content: ''
                },
                {
                  title: '导出 该文件中的函数组件（可以使用 默认导出 或 具名导出）',
                  content: '用具名导出的方式，将组件从 XX导出（不使用 default 关键字'
                },
                {
                  title: '在需要使用该组件的文件中 导入（可以根据相应的导出方式使用 默认导入 或 具名导入）。',
                  content: ''
                },
              ]
            },
          ]
        }
      },
      {
        key: 2,
        title: '如何使用 JSX 为 JavaScript 添加标签',
        id: 'Writing Markup with JSX',
        question: '使用JSX',
        detail: {
          description: 'JSX 是 JavaScript 语法扩展，可以让你在 JavaScript 文件中书写类似 HTML 的标签。虽然还有其它方式可以编写组件，但大部分 React 开发者更喜欢 JSX 的简洁性，并且在大部分代码库中使用它。每个 React 组件都是一个 JavaScript 函数，它会返回一些标签，React 会将这些标签渲染到浏览器上。React 组件使用一种被称为 JSX 的语法扩展来描述这些标签。JSX 看起来和 HTML 很像，但它的语法更加严格并且可以动态展示信息。了解这些区别最好的方式就是将一些 HTML 标签转化为 JSX 标签。由于渲染逻辑和标签是紧密相关的，所以 React 将它们存放在一个组件中',
          theory: [
            {
              title: '只能返回一个根元素 ',
              concept: '如果想要在一个组件中包含多个元素，需要用一个父标签把它们包裹起来,如果你不想在标签中增加一个额外的 <div>，可以用 <> 和 </> 元素来代替, 空标签被称作 Fragment. React Fragment 允许你将子元素分组，而不会在 HTML 结构中添加额外节点。',
              tips: 'JSX 虽然看起来很像 HTML，但在底层其实被转化为了 JavaScript 对象，你不能在一个函数中返回多个对象，除非用一个数组把他们包装起来。这就是为什么多个 JSX 标签必须要用一个父元素或者 Fragment 来包裹'
            },
            {
              title: '标签必须闭合',
              concept: 'JSX 要求标签必须正确闭合。像 <img> 这样的自闭合标签必须书写成 <img />，而像 <li>oranges 这样只有开始标签的元素必须带有闭合标签，需要改为 <li>oranges</li>。'
            },
            {
              title: '使用驼峰式命名法给 所有 大部分属性命名！',
              concept: 'JSX 最终会被转化为 JavaScript，而 JSX 中的属性也会变成 JavaScript 对象中的键值对。在你自己的组件中，经常会遇到需要用变量的方式读取这些属性的时候。但 JavaScript 对变量的命名有限制。例如，变量名称不能包含 - 符号或者像 class 这样的保留字,这就是为什么在 React 中，大部分 HTML 和 SVG 属性都用驼峰式命名法表示。',
              tips: '由于历史原因，aria-* 和 data-* 属性是以带 - 符号的 HTML 格式书写的'
            }, 
          ]
        }
      },
      {
        key: 3,
        title: '如何在 JSX 中使用花括号来从组件中使用 JavaScript 功能',
        id: 'JavaScript in JSX with Curly Braces',
        question: '在JSX中使用花括号',
        detail: {
          description: 'JSX 允许你在 JavaScript 中编写类似 HTML 的标签，从而使渲染的逻辑和内容可以写在一起。有时候，你可能想要在标签中添加一些 JavaScript 逻辑或者引用动态的属性。这种情况下，你可以在 JSX 的大括号内来编写 JavaScript',
          theory: [
            {
              title: '使用引号传递字符串', 
              concept: '当你想把一个字符串属性传递给 JSX 时，把它放到单引号或双引号中, 也可以 用 { 和 } 替代 " 和 " 以使用 JavaScript 变量 '
            },
            {
              title: '使用大括号：一扇进入 JavaScript 世界的窗户', 
              concept: 'JSX 是一种编写 JavaScript 的特殊方式。这为在大括号 { } 中使用 JavaScript 带来了可能, 大括号内的任何 JavaScript 表达式都能正常运行，包括函数调用, JSX 是一种模板语言的最小实现，因为它允许你通过 JavaScript 来组织数据和逻辑。'
            },
            {
              title: '可以在哪使用大括号 ',
              concept: '在 JSX 中，只能在以下两种场景中使用大括号：',
              steps: [
                `用作 JSX 标签内的文本：<h1>{name}'s To Do List</h1> 是有效的，但是 <{tag}>Gregorio Y. Zara's To Do List</{tag}> 无效。`,
                `用作紧跟在 = 符号后的 属性：src={avatar} 会读取 avatar 变量，但是 src="{avatar}" 只会传一个字符串 {avatar}。`
              ],
            }
          ],
          summary: [
            'JSX 引号内的值会作为字符串传递给属性',
            '大括号让你可以将 JavaScript 的逻辑和变量带入到标签中',
            '它们会在 JSX 标签中的内容区域或紧随属性的 = 后起作用',
            '{{ 和 }} 并不是什么特殊的语法：它只是包在 JSX 大括号内的 JavaScript 对象',
          ],
          tips: '将未经处理的对象作为文本内容使用会抛出错误，因为 React 并不知道你想如何展示它们'
        }
      },
      {
        key: 4,
        title: '如何用 props 配置组件',
        id: 'Passing Props to a Component',
        question: '用props配置组件',
        detail: {
          description: 'React 组件使用 props 来互相通信。每个父组件都可以提供 props 给它的子组件，从而将一些信息传递给它。Props 可能会让你想起 HTML 属性，但你可以通过它们传递任何 JavaScript 值，包括对象、数组和函数',
          theory: [
            {
              title: '向组件传递 props ',
              concept: 'Props 使你独立思考父组件和子组件,你可以将 props 想象成可以调整的“旋钮”。它们的作用与函数的参数相同 —— 事实上，props 正是 组件的唯一参数！ React 组件函数接受一个参数，一个 props 对象,通常你不需要整个 props 对象，所以可以将它解构为单独的 props。'
            },
            {
              title: '给 prop 指定一个默认值 ',
              concept: '在没有指定值的情况下给 prop 一个默认值，你可以通过在参数后面写 = 和默认值来进行解构：默认值仅在缺少prop 或 ={undefined} 时生效。'
            },
            {
              title: '使用 JSX 展开语法传递 props',
              concept: '重复代码没有错（它可以更清晰）。但有时你可能会重视简洁。一些组件将它们所有的 props 转发给子组件，这些组件不直接使用他们本身的任何 props，所以使用更简洁的“展开”语法是有意义',
              tips: '请克制地使用展开语法。 如果你在所有其他组件中都使用它，那就有问题了。 通常，它表示你应该拆分组件，并将子组件作为 JSX 传递'
            },
            {
              title: '将 JSX 作为子组件传递 ',
              concept: '当您将内容嵌套在 JSX 标签中时，父组件将在名为 children 的 prop 中接收到该内容, 可以将带有 children prop 的组件看作有一个“洞”，可以由其父组件使用任意 JSX 来“填充”。你会经常使用 children prop 来进行视觉包装：面板、网格等等。'
            },
            {
              title: 'Props 如何随时间变化 ',
              concept: '一个组件可能会随着时间的推移收到不同的 props。 Props 并不总是静态的！Props 反映了组件在任何时间点的数据，并不仅仅是在开始时',
              tips: '然而，props 是 不可变的（一个计算机科学术语，意思是“不可改变”）。当一个组件需要改变它的 props（例如，响应用户交互或新数据）时，它不得不“请求”它的父组件传递 不同的 props —— 一个新对象！它的旧 props 将被丢弃，最终 JavaScript 引擎将回收它们占用的内存,不要尝试“更改 props”。 当你需要响应用户输入（例如更改所选颜色）时，你可以“设置 state”'
            }
          ],
          summary: [
            '要传递 props，请将它们添加到 JSX，就像使用 HTML 属性一样。',
            '要读取 props，请使用 解构语法。',
            '你可以指定一个默认值，如 size = 100，用于缺少值或值为 undefined 的 props 。',
            '你可以使用 <Avatar {...props} /> JSX 展开语法转发所有 props，但不要过度使用它！',
            '像 <Card><Avatar /></Card> 这样的嵌套 JSX，将被视为 Card 组件的 children prop',
            'Props 是只读的时间快照：每次渲染都会收到新版本的 props。',
            '你不能改变 props。当你需要交互性时，你可以设置 state'
          ]
        }
      },
      {
        key: 5,
        title: '如何有条件地渲染组件',
        id: 'Conditional Rendering',
        question: '条件渲染组件',
        detail: {
          description: '通常你的组件会需要根据不同的情况显示不同的内容。在 React 中，你可以通过使用 JavaScript 的 if 语句、&& 和 ? : 运算符来选择性地渲染 JSX',
          theory: [
            {
              title: '条件返回 JSX ',
              concept: '在 React 中，是由 JavaScript 来处理控制流的（比如条件'
            },
            {
              title: '选择性地返回 null',
              concept: '在一些情况下，你不想有任何东西进行渲染,但一个组件必须返回一些东西。这种情况下，你可以直接返回 null',
              tips: '实际上，在组件里返回 null 并不常见，因为这样会让想使用它的开发者感觉奇怪。通常情况下，你可以在父组件里选择是否要渲染该组件'
            },
            {
              title: '三目运算符（? :） ',
              concept: 'JavaScript 有一种紧凑型语法来实现条件判断表达式——条件运算符 又称“三目运算符”。',
              tips: '对于简单的条件判断，这样的风格可以很好地实现，但需要适量使用。如果你的组件里有很多的嵌套式条件表达式，则需要考虑通过提取为子组件来简化这些嵌套表达式。在 React 里，标签也是你代码中的一部分，所以你可以使用变量和函数来整理一些复杂的表达式。'
            },
            {
              title: '与运算符（&&） ',
              concept: '在 React 组件里，通常用在当条件成立时，你想渲染一些 JSX，或者不做任何渲染,当 JavaScript && 表达式 的左侧（我们的条件）为 true 时，它则返回其右侧的值。但条件的结果是 false，则整个表达式会变成 false。在 JSX 里，React 会将 false 视为一个“空值”，就像 null 或者 undefined，这样 React 就不会在这里进行任何渲染。',
              tips: "JavaScript 会自动将左侧的值转换成布尔类型以判断条件成立与否。然而，如果左侧是 0，整个表达式将变成左侧的值（0），React 此时则会渲染 0 而不是不进行渲染"
            },
            {
              title: '选择性地将 JSX 赋值给变量',
              concept: '当这些快捷方式妨碍写普通代码时，可以考虑使用 if 语句和变量。因为你可以使用 let 进行重复赋值，所以一开始你可以将你想展示的作为默认值赋予给该变量'
            },
          ],
          summary: [
            '在 React，你可以使用 JavaScript 来控制分支逻辑',
            '你可以使用 if 语句来选择性地返回 JSX 表达式',
            '你可以选择性地将一些 JSX 赋值给变量，然后用大括号将其嵌入到其他 JSX 中',
            '在 JSX 中，{cond ? <A /> : <B />} 表示 “当 cond 为真值时, 渲染 <A />，否则 <B />”',
            '在 JSX 中，{cond && <A />} 表示 “当 cond 为真值时, 渲染 <A />，否则不进行渲染”。',
            '快捷的表达式很常见，但如果你更倾向于使用 if，你也可以不使用它们，。',
          ]
        }
      },
      {
        key: 6,
        title: '如何在同一时间渲染多个组件',
        id: 'Rendering Lists',
        question: '在同一时间渲染多个组件',
        detail: {
          description: '你可能经常需要通过 JavaScript 的数组方法 来操作数组中的数据，从而将一个数据集渲染成多个相似的组件。',
          theory: [
            {
              title: '从数组中渲染数据 ',
              concept: '可以把要用到的数据存入 JavaScript 对象或数组，然后用 map() 或 filter() 这样的方法来渲染出一个组件列表。'
            },
            {
              title: '对数组项进行过滤 ',
              concept: '可以使用 JavaScript 的 filter() 方法来返回满足条件的项。这个方法会让数组的子项经过 “过滤器”（一个返回值为 true 或 false 的函数）的筛选，最终返回一个只包含满足条件的项的新数组, 然后用 map 方法遍历'
            },
            {
              title: '用 key 保持列表项的顺序',
              concept: '给数组中的每一项都指定一个 key——它可以是字符串或数字的形式，只要能唯一标识出各个数组项就行：这些 key 会告诉 React，每个组件对应着数组里的哪一项，所以 React 可以把它们匹配起来。这在数组项进行移动（例如排序）、插入或删除等操作时非常重要。一个合适的 key 可以帮助 React 推断发生了什么，从而得以正确地更新 DOM 树'
            },
            {
              title: '如何设定 key 值',
              concept: '来自数据库的数据： 如果你的数据是从数据库中获取的，那你可以直接使用数据表中的主键，因为它们天然具有唯一性。本地产生数据： 如果你数据的产生和保存都在本地（例如笔记软件里的笔记），那么你可以使用一个自增计数器或者一个类似 uuid 的库来生成 key'
            },
            {
              title: 'key 需要满足的条件',
              concept: 'key 值在兄弟节点之间必须是唯一的。 不过不要求全局唯一，在不同的数组中可以使用相同的 key。key 值不能改变，否则就失去了使用 key 的意义！所以千万不要在渲染时动态地生成 key'
            },
            {
              title: 'React 中为什么需要 key？ ',
              concept: '设想一下，假如你桌面上的文件都没有文件名，取而代之的是，你需要通过文件的位置顺序来区分它们———第一个文件，第二个文件，以此类推。也许你也不是不能接受这种方式，可是一旦你删除了其中的一个文件，这种组织方式就会变得混乱无比。原来的第二个文件可能会变成第一个文件，第三个文件会成为第二个文件……React 里需要 key 和文件夹里的文件需要有文件名的道理是类似的。它们（key 和文件名）都让我们可以从众多的兄弟元素中唯一标识出某一项（JSX 节点或文件）。而一个精心选择的 key 值所能提供的信息远远不止于这个元素在数组中的位置。即使元素的位置在渲染的过程中发生了改变，它提供的 key 值也能让 React 在整个生命周期中一直认得它。',
              tips: '你可能会想直接把数组项的索引当作 key 值来用，实际上，如果你没有显式地指定 key 值，React 确实默认会这么做。但是数组项的顺序在插入、删除或者重新排序等操作中会发生改变，此时把索引顺序用作 key 值会产生一些微妙且令人困惑的 bug。与之类似，请不要在运行过程中动态地产生 key，像是 key={Math.random()} 这种方式。这会导致每次重新渲染后的 key 值都不一样，从而使得所有的组件和 DOM 元素每次都要重新创建。这不仅会造成运行变慢的问题，更有可能导致用户输入的丢失。所以，使用能从给定数据中稳定取得的值才是明智的选择。 有一点需要注意，组件不会把 key 当作 props 的一部分。Key 的存在只对 React 本身起到提示作用。如果你的组件需要一个 ID，那么请把它作为一个单独的 prop 传给组件： <Profile key={id} userId={id} />。'
            },
          ]
        }
      },
      {
        key: 7,
        title: '如何通过保持组件的纯粹性来避免令人困惑的错误',
        id: 'Keeping Components Pure',
        question: '保持组件纯粹',
        detail: {
          description: '部分 JavaScript 函数是 纯粹 的，这类函数通常被称为纯函数。纯函数仅执行计算操作，不做其他操作。你可以通过将组件按纯函数严格编写，以避免一些随着代码库的增长而出现的、令人困扰的 bug 以及不可预测的行为',
          theory: [
            {
              title: '纯函数：组件作为公式 ',
              concept: '在计算机科学中（尤其是函数式编程的世界中），纯函数 通常具有如下特征,',
              answer: [
                `只负责自己的任务。它不会更改在该函数调用前就已存在的对象或变量`,
                `输入相同，则输出相同。给定相同的输入，纯函数应总是返回相同的结果`
              ],
              tips: 'React 便围绕着这个概念进行设计。React 假设你编写的所有组件都是纯函数。也就是说，对于相同的输入，你所编写的 React 组件必须总是返回相同的 JSX。'
            },
            {
              title: '副作用：（不符合）预期的后果 ',
              concept: 'React 的渲染过程必须自始至终是纯粹的。组件应该只 返回 它们的 JSX，而不 改变 在渲染前，就已存在的任何对象或变量 — 这将会使它们变得不纯粹！',
              tips: '一般来说，你不应该期望你的组件以任何特定的顺序被渲染。调用 y = 5x 和 y = 2x 的先后顺序并不重要：这两个公式相互独立。同样地，每个组件也应该“独立思考”，而不是在渲染过程中试图与其他组件协调，或者依赖于其他组件。渲染过程就像是一场学校考试：每个组件都应该自己计算 JSX！'
            },
            {
              title: '哪些地方 可能 引发副作用',
              concept: '函数式编程在很大程度上依赖于纯函数，但 某些事物 在特定情况下不得不发生改变。这是编程的要义！这些变动包括更新屏幕、启动动画、更改数据等，它们被称为 副作用。它们是 “额外” 发生的事情，与渲染过程无关。在 React 中，副作用通常属于 事件处理程序。事件处理程序是 React 在你执行某些操作（如单击按钮）时运行的函数。即使事件处理程序是在你的组件 内部 定义的，它们也不会在渲染期间运行！ 因此事件处理程序无需是纯函数。如果你用尽一切办法，仍无法为副作用找到合适的事件处理程序，你还可以调用组件中的 useEffect 方法将其附加到返回的 JSX 中。这会告诉 React 在渲染结束后执行它。然而，这种方法应该是你最后的手段。'
            },
            {
              title: 'React 为何侧重于纯函数?',
              concept: '',
              answer: [
                '你的组件可以在不同的环境下运行 — 例如，在服务器上！由于它们针对相同的输入，总是返回相同的结果，因此一个组件可以满足多个用户请求',
                '可以为那些输入未更改的组件来 跳过渲染，以提高性能。这是安全的做法，因为纯函数总是返回相同的结果，所以可以安全地缓存它们。',
                '如果在渲染深层组件树的过程中，某些数据发生了变化，React 可以重新开始渲染，而不会浪费时间完成过时的渲染。纯粹性使得它随时可以安全地停止计算。'
              ],
              tips: '我们正在构建的每个 React 新特性都利用到了纯函数。从数据获取到动画再到性能，保持组件的纯粹可以充分释放 React 范式的能力。'
            }
          ],
          summary: [
            '一个组件必须是纯粹的，就意味着: 只负责自己的任务。 它不会更改在该函数调用前就已存在的对象或变量。输入相同，则输出相同。 给定相同的输入，组件应该总是返回相同的 JSX',
            '渲染随时可能发生，因此组件不应依赖于彼此的渲染顺序',
            '你不应该改变组件用于渲染的任何输入。这包括 props、state 和 context。通过 “设置” state 来更新界面，而不要改变预先存在的对象',
            '努力在你返回的 JSX 中表达你的组件逻辑。当你需要“改变事物”时，你通常希望在事件处理程序中进行。作为最后的手段，你可以使用 useEffect',
          ]
        }
      },
    ]
  }
}





