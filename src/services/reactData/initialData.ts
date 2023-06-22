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
  },
  addingInteractivity: {
    h2: '添加交互',
    id: 'addingInteractivity',
    path: '/react/addingInteractivity',
    title: '添加交互',
    preIconType: 'dir',
    type: 'addSquare',
    summary: '界面上的控件会根据用户的输入而更新。在 React 中，随时间变化的数据被称为状态（state）。你可以向任何组件添加状态，并按需进行更新',
    questionList: [
      {
        key: 1,
        title: '响应事件',
        id: 'How to handle user-initiated events',
        question: '如何处理用户发起的事件',
        detail: {
          description: 'React 允许你向 JSX 中添加事件处理程序。事件处理程序是你自己的函数，它将在用户交互时被触发，如点击、悬停、焦点在表单输入框上等等。',
          theory: [
            {
              title: '添加事件处理函数',
              id: 'Adding event handlers  ',
              concept: '如需添加一个事件处理函数，你需要先定义一个函数，然后 将其作为 prop 传入 合适的 JSX 标签',
              elements:'按照惯例，通常将事件处理程序命名为 handle，后接事件名。你会经常看到 onClick={handleClick}，onMouseEnter={handleMouseEnter} 等',
              tips: '传递给事件处理函数的函数应直接传递，而非调用',
              methods: [
                {
                  title: '在事件处理函数中读取 props ',
                  id: 'Reading props in event handlers ',
                  content: '由于事件处理函数声明于组件内部，因此它们可以直接访问组件的 props',
                },
                {
                  title: '将事件处理函数作为 props 传递 ',
                  id: 'Passing event handlers as props  ',
                  content: '通常，我们会在父组件中定义子组件的事件处理函数',
                },
                {
                  title: '命名事件处理函数 prop  ',
                  id: 'Naming event handler props  ',
                  content: '按照惯例，事件处理函数 props 应该以 on 开头，后跟一个大写字母。',
                },
              ]
            },
            {
              title: '事件传播',
              id: 'Event propagation',
              concept: '事件处理函数还将捕获任何来自子组件的事件。通常，我们会说事件会沿着树向上“冒泡”或“传播”：它从事件发生的地方开始，然后沿着树向上传播。',
              tips: '在 React 中所有事件都会传播，除了 onScroll，它仅适用于你附加到的 JSX 标签。',
              methods: [
                {
                  title: '阻止传播 ',
                  id: 'Stopping propagation',
                  content: '事件处理函数接收一个 事件对象 作为唯一的参数。按照惯例，它通常被称为 e ，代表 “event”（事件）。你可以使用此对象来读取有关事件的信息。这个事件对象还允许你阻止传播',
                  answer: [
                    `React 调用了传递给 <button> 的 onClick 处理函数。调用 e.stopPropagation()，阻止事件进一步冒泡。`
                  ],
                },
                {
                  title: '传递处理函数作为事件传播的替代方案 ',
                  id: 'Passing handlers as alternative to propagation ',
                  content: '它让子组件处理事件，同时也让父组件指定一些额外的行为。与事件传播不同，它并非自动。但使用这种模式的好处是你可以清楚地追踪因某个事件的触发而执行的整条代码链。如果你依赖于事件传播，而且很难追踪哪些处理程序在执行',
                },
                {
                  title: '阻止默认行为',
                  id: 'Preventing default behavior ',
                  content: '某些浏览器事件具有与事件相关联的默认行为, 例如，点击 <form> 表单内部的按钮会触发表单提交事件，默认情况下将重新加载整个页面,可以调用事件对象中的 e.preventDefault() 来阻止这种情况发生',
                  summary: [
                    'e.stopPropagation() 阻止触发绑定在外层标签上的事件处理函数。',
                    'e.preventDefault() 阻止少数事件的默认浏览器行为。'
                  ]
                },
              ]
            },
            {
              title: '事件处理函数可以包含副作用吗？',
              id: 'Can event handlers have side effects? ',
              concept: '当然可以！事件处理函数是执行副作用的最佳位置。',
              elements: '与渲染函数不同，事件处理函数不需要是 纯函数，因此它是用来 更改 某些值的绝佳位置。例如，更改输入框的值以响应键入，或者更改列表以响应按钮的触发。',
              tips: '为了更改某些信息，你首先需要某种方式存储它。在 React 中，这是通过 state（组件的记忆） 来完成的',
            },
          ],
          summary: [
            '你可以通过将函数作为 prop 传递给元素如 <button> 来处理事件。',
            '必须传递事件处理函数，而非函数调用！ onClick={handleClick} ，不是 onClick={handleClick()}。',
            '你可以单独或者内联定义事件处理函数。',
            '事件处理函数在组件内部定义，所以它们可以访问 props。',
            '你可以在父组件中定义一个事件处理函数，并将其作为 prop 传递给子组件。',
            '你可以根据特定于应用程序的名称定义事件处理函数的 prop',
            '事件会向上传播。通过事件的第一个参数调用 e.stopPropagation() 来防止这种情况',
            '事件可能具有不需要的浏览器默认行为。调用 e.preventDefault() 来阻止这种情况。',
            '从子组件显式调用事件处理函数 prop 是事件传播的另一种优秀替代方案。',
          ]
        }
      },
      {
        key: 1,
        title: 'State：组件的记忆',
        id: "State: A Component's Memory",
        question: '如何处理组件的记忆',
        detail: {
          description: '组件通常需要根据交互更改屏幕上显示的内容。在 React 中，这种组件特有的记忆被称为 state',
          theory: [
            {
              title: '当普通的变量无法满足时',
              id: 'When a regular variable isn’t enough ',
              concept: '事件处理函数正在更新局部变量 但存在两个原因使得变化不可见',
              steps: [
                `局部变量无法在多次渲染中持久保存。 当 React 再次渲染这个组件时，它会从头开始渲染——不会考虑之前对局部变量的任何更改。`,
                `更改局部变量不会触发渲染。 React 没有意识到它需要使用新数据再次渲染组件。`,
                '要使用新数据更新组件，需要做两件事: 保留 渲染之间的数据,触发 React 使用新数据渲染组件（重新渲染）',
                'useState Hook 提供了这两个功能：State 变量 用于保存渲染间的数据。State setter 函数 更新变量并触发 React 再次渲染组件。 '
              ],
            },
            {
              title: '添加一个 state 变量 ',
              id: 'Adding a state variable ',
              steps: [
                `Hook 是特殊的函数，只在 React 渲染时有效（我们将在下一节详细介绍）。它们能让你 “hook” 到不同的 React 特性中去。`,
                `当你调用 useState 时，你是在告诉 React 你想让这个组件记住一些东西`,
                `惯例是将这对返回值命名为 const [thing, setThing]。你也可以将其命名为任何你喜欢的名称，但遵照约定俗成能使跨项目合作更易理解。`,
                `useState 的唯一参数是 state 变量的初始值。每次你的组件渲染时，useState 都会给你一个包含两个值的数组`,
                `state 变量 (index) 会保存上次渲染的值。`,
                `state setter 函数 (setIndex) 可以更新 state 变量并触发 React 重新渲染组件。`
              ],
              tips: 'Hooks ——以 use 开头的函数——只能在组件或自定义 Hook 的最顶层调用。 你不能在条件语句、循环语句或其他嵌套函数内调用 Hook。Hook 是函数，但将它们视为关于组件需求的无条件声明会很有帮助。在组件顶部 “use” React 特性，类似于在文件顶部“导入”模块。'

            },
            {
              title: '赋予一个组件多个 state 变量',
              id: 'Giving a component multiple state variables ',
              concept: '可以在一个组件中拥有任意多种类型的 state 变量',
              tips: '如果它们不相关，那么存在多个 state 变量是一个好主意，如果你发现经常同时更改两个 state 变量，那么最好将它们合并为一个， 例如，如果你有一个包含多个字段的表单，那么有一个值为对象的 state 变量比每个字段对应一个 state 变量更方便',
            },
            {
              title: 'State 是隔离且私有的 ',
              id: 'State is isolated and private ',
              concept: 'State 是屏幕上组件实例内部的状态。换句话说，如果你渲染同一个组件两次，每个副本都会有完全隔离的 state！改变其中一个不会影响另一个',
              elements: 'State 不依赖于特定的函数调用或在代码中的位置，它的作用域“只限于”屏幕上的某块特定区域,与 props 不同，state 完全私有于声明它的组件。父组件无法更改它。这使你可以向任何组件添加或删除 state，而不会影响其他组件。',
              tips: '如果它们不相关，那么存在多个 state 变量是一个好主意，如果你发现经常同时更改两个 state 变量，那么最好将它们合并为一个， 例如，如果你有一个包含多个字段的表单，那么有一个值为对象的 state 变量比每个字段对应一个 state 变量更方便',
            },
          ],
          summary: [
            '当一个组件需要在多次渲染间“记住”某些信息时使用 state 变量。',
            'State 变量是通过调用 useState Hook 来声明的。',
            'Hook 是以 use 开头的特殊函数。它们能让你 “hook” 到像 state 这样的 React 特性中。',
            'Hook 可能会让你想起 import：它们需要在非条件语句中调用。调用 Hook 时，包括 useState，仅在组件或另一个 Hook 的顶层被调用才有效。',
            'useState Hook 返回一对值：当前 state 和更新它的函数。',
            '你可以拥有多个 state 变量。在内部，React 按顺序匹配它们。',
            'State 是组件私有的。如果你在两个地方渲染它，则每个副本都有独属于自己的 state。',
          ]
        }
      },
      {
        key: 1,
        title: '渲染和提交',
        id: "Render and Commit",
        question: '渲染和提交',
        detail: {
          description: '组件显示到屏幕之前，其必须被 React 渲染。想象一下，您的组件是厨房里的厨师，把食材烹制成美味的菜肴。在这种场景下，React 就是一名服务员，他会帮客户们下单并为他们送来所点的菜品',
          theory: [
            {
              title: '步骤 1: 触发一次渲染',
              id: 'Step 1: Trigger a render ',
              concept: '有两种原因会导致组件的渲染:组件的 初次渲染。组件（或者其祖先之一）的 状态发生了改变',
              steps: [
                `初次渲染: 当应用启动时，会触发初次渲染。框架和沙箱有时会隐藏这部分代码，但它是通过调用目标 DOM 节点的 createRoot，然后用你的组件调用 render 函数完成的`,
                `状态更新时重新渲染: 一旦组件被初次渲染，您就可以通过使用 set 函数 更新其状态来触发之后的渲染。更新组件的状态会自动将一次渲染送入队列`,
              ],
            },
            {
              title: '步骤 2: React 渲染您的组件  ',
              id: 'Step 2: React renders your components',
              concept: '在您触发渲染后，React 会调用您的组件来确定要在屏幕上显示的内容。“渲染中” 即 React 在调用您的组件, 在进行初次渲染时, React 会调用根组件,对于后续的渲染, React 会调用内部状态更新触发了渲染的函数组件。渲染必须始终是一次 纯计算:',
              elements: '如果更新后的组件会返回某个另外的组件，那么 React 接下来就会渲染 那个 组件，而如果那个组件又返回了某个组件，那么 React 接下来就会渲染 那个 组件，以此类推。这个过程会持续下去，直到没有更多的嵌套组件并且 React 确切知道哪些东西应该显示到屏幕上为止',
              steps: [
                `输入相同，输出相同。 给定相同的输入，组件应始终返回相同的 JSX。（当有人点了西红柿沙拉时，他们不应该收到洋葱沙拉！）`,
                `只做它自己的事情。 它不应更改任何存在于渲染之前的对象或变量。（一个订单不应更改其他任何人的订单。）`,
              ],
              tips: '渲染必须始终是一次 纯计算:否则，随着代码库复杂性的增加，您可能会遇到令人困惑的错误和不可预测的行为。在 “严格模式” 下开发时，React 会调用每个组件的函数两次，这可以帮助发现由不纯函数引起的错误。'
            },
            {
              title: '步骤 3: React 把更改提交到 DOM 上 ',
              id: 'Step 3: React commits changes to the DOM ',
              concept: '在渲染（调用）您的组件之后，React 将会修改 DOM。',
              steps: [
                `对于初次渲染， React 会使用 appendChild() DOM API 将其创建的所有 DOM 节点放在屏幕上。`,
                `对于重渲染， React 将应用最少的必要操作（在渲染时计算！），以使得 DOM 与最新的渲染输出相互匹配。`
              ],
              tips: 'React 仅在渲染之间存在差异时才会更改 DOM 节点。',
            },
            {
              title: '尾声：浏览器绘制 ',
              id: 'State is isolated and private ',
              concept: '在渲染完成并且 React 更新 DOM 之后，浏览器就会重新绘制屏幕。尽管这个过程被称为“浏览器渲染”（“browser rendering”），但我们还是将它称为“绘制”（“painting”），以避免在这些文档的其余部分中出现混淆。',
             },
          ],
          summary: [
            '在一个 React 应用中一次屏幕更新都会发生以下三个步骤：触发 渲染 提交',
            '您可以使用严格模式去找到组件中的错误',
            '如果渲染结果与上次一样，那么 React 将不会修改 DOM',
          ]
        }
      },
      {
        key: 1,
        title: 'state 如同一张快照',
        id: "State as a Snapshot",
        question: 'state 如同一张快照',
        detail: {
          description: '也许 state 变量看起来和一般的可读写的 JavaScript 变量类似。但 state 在其表现出的特性上更像是一张快照。设置它不会更改你已有的 state 变量，但会触发重新渲染',
          theory: [
            {
              title: '设置 state 会触发渲染 ',
              id: 'Setting state triggers renders',
            },
            {
              title: '渲染会及时生成一张快照 ',
              id: 'Rendering takes a snapshot in time ',
              concept: '“正在渲染” 就意味着 React 正在调用你的组件——一个函数。你从该函数返回的 JSX 就像是 UI 的一张及时的快照。它的 props、事件处理函数和内部变量都是 根据当前渲染时的 state 被计算出来的。',
              elements: '与照片或电影画面不同，你返回的 UI “快照”是可交互的。它其中包括类似事件处理函数的逻辑，这些逻辑用于指定如何对输入作出响应。React 随后会更新屏幕来匹配这张快照，并绑定事件处理函数。因此，按下按钮就会触发你 JSX 中的点击事件处理函数',
              steps: [
                `当 React 重新渲染一个组件时：React 会再次调用你的函数, 你的函数会返回新的 JSX 快照, React 会更新界面来匹配你返回的快照`,
                `作为一个组件的记忆，state 不同于在你的函数返回之后就会消失的普通变量。state 实际上“活”在 React 本身中——就像被摆在一个架子上！——位于你的函数之外。当 React 调用你的组件时，它会为特定的那一次渲染提供一张 state 快照。你的组件会在其 JSX 中返回一张包含一整套新的 props 和事件处理函数的 UI 快照 ，其中所有的值都是 根据那一次渲染中 state 的值 被计算出来的`,
                '设置 state 只会为下一次渲染变更 state 的值',
                '一个 state 变量的值永远不会在一次渲染的内部发生变化， 即使其事件处理函数的代码是异步的。在 那次渲染的 onClick 内部，number 的值即使在调用 setNumber(number + 5) 之后也还是 0。它的值在 React 通过调用你的组件“获取 UI 的快照”时就被“固定”了。',
                'React 会使 state 的值始终”固定“在一次渲染的各个事件处理函数内部。 你无需担心代码运行时 state 是否发生了变化。'
              ],
            },
          ],
          summary: [
            '设置 state 请求一次新的渲染。',
            'React 将 state 存储在组件之外，就像在架子上一样。',
            '当你调用 useState 时，React 会为你提供该次渲染 的一张 state 快照。',
            '变量和事件处理函数不会在重渲染中“存活”。每个渲染都有自己的事件处理函数。',
            '每个渲染（以及其中的函数）始终“看到”的是 React 提供给这个 渲染的 state 快照。',
            '你可以在心中替换事件处理函数中的 state，类似于替换渲染的 JSX。',
            '过去创建的事件处理函数拥有的是创建它们的那次渲染中的 state 值',
            '如果渲染结果与上次一样，那么 React 将不会修改 DOM',
          ]
        }
      },
      {
        key: 1,
        title: '把一系列 state 更新加入队列',
        id: "Queueing a Series of State Updates",
        question: '把一系列 state 更新加入队列',
        detail: {
          description: '设置组件 state 会把一次重新渲染加入队列。但有时你可能会希望在下次渲染加入队列之前对 state 的值执行多次操作',
          theory: [
            {
              title: 'React 会对 state 更新进行批处理 ',
              id: 'React batches state updates',
              concept: 'React 会等到事件处理函数中的 所有 代码都运行完毕再处理你的 state 更新。这让你可以更新多个 state 变量——甚至来自多个组件的 state 变量——而不会触发太多的 重新渲染。但这也意味着只有在你的事件处理函数及其中任何代码执行完成 之后，UI 才会更新。这种特性也就是 批处理，它会使你的 React 应用运行得更快。它还会帮你避免处理只​​更新了一部分 state 变量的令人困惑的“半成品”渲染 ',
              elements: 'React 不会跨 多个 需要刻意触发的事件（如点击）进行批处理——每次点击都是单独处理的。请放心，React 只会在一般来说安全的情况下才进行批处理。这可以确保，例如，如果第一次点击按钮会禁用表单，那么第二次点击就不会再次提交它'
            },
            {
              title: '在下次渲染前多次更新同一个 state  ',
              id: 'Updating the same state multiple times before the next render',
              concept: '在下次渲染之前多次更新同一个 state，你可以像 setNumber(n => n + 1) 这样传入一个根据队列中的前一个 state 计算下一个 state 的 函数',
              elements: '这是一种告诉 React “用 state 值做某事”而不是仅仅替换它的方法。n => n + 1 被称为 更新函数。当你将它传递给一个 state 设置函数时：',
              steps: [
                `React 会将此函数加入队列，以便在事件处理函数中的所有其他代码运行后进行处理。`,
                '在下一次渲染期间，React 会遍历队列并给你更新之后的最终 state',
                `事件处理函数执行完成后，React 将触发重新渲染。在重新渲染期间，React 将处理队列。更新函数会在渲染期间执行，因此 更新函数必须是 纯函数 并且只 返回 结果`
              ],
              tips: 'setState(x) 实际上会像 setState(n => x) 一样运行，只是没有使用 n！'
            },
            {
              title: '命名惯例',
              id: 'Naming conventions',
              concept: '通常可以通过相应 state 变量的第一个字母来命名更新函数的参数'
            }
          ],
          summary: [
            '设置 state 不会更改现有渲染中的变量，但会请求一次新的渲染。',
            'React 会在事件处理函数执行完成之后处理 state 更新。这被称为批处理。',
            '要在一个事件中多次更新某些 state，你可以使用 setNumber(n => n + 1) 更新函数',
          ]
        }
      },
      {
        key: 1,
        title: '更新state中的对象',
        id: "Updating Objects in State",
        question: '更新state中的对象',
        detail: {
          description: '状态可以持有任何类型的JavaScript值,包括对象。但是你不应该直接更改React状态中持有的对象。相反,当你想更新一个对象时,你需要创建一个新的对象(或复制现有对象),然后将状态设置为使用该副本',
          theory: [
            {
              title: 'What’s a mutation? ',
              id: 'What’s a mutation? ',
              concept: 'although objects in React state are technically mutable, you should treat them as if they were immutable—like numbers, booleans, and strings. Instead of mutating them, you should always replace them.'
            },
            {
              title: 'Treat state as read-only',
              id: 'Treat state as read-only',
              concept: 'you should treat any JavaScript object that you put into state as read-only.',
              elements: ' without using the state setting function, React has no idea that object has changed. So React does not do anything in response. It’s like trying to change the order after you’ve already eaten the meal. While mutating state can work in some cases, we don’t recommend it. You should treat the state value you have access to in a render as read-only.To actually trigger a re-render in this case, create a new object and pass it to the state setting ',
            },
            {
              title: 'Copying objects with the spread syntax ',
              id: 'Copying objects with the spread syntax ',
              concept: ' the position object is always created fresh from the current cursor position. But often, you will want to include existing data as a part of the new object you’re creating',
              elements: 'You can use the ... object spread syntax so that you don’t need to copy every property separately.Notice how you didn’t declare a separate state variable for each input field. For large forms, keeping all data grouped in an object is very convenient—as long as you update it correctly!',
              tips: 'Note that the ... spread syntax is “shallow”—it only copies things one level deep. This makes it fast, but it also means that if you want to update a nested property, you’ll have to use it more than once.'
            },
            {
              title: 'Updating a nested object',
              id: 'Updating a nested object',
            },
            {
              title: '使用 Immer 编写简洁的更新逻辑',
              id: 'Write concise update logic with Immer',
              concept: 'If your state is deeply nested, you might want to consider flattening it. But, if you don’t want to change your state structure, you might prefer a shortcut to nested spreads. Immer is a popular library that lets you write using the convenient but mutating syntax and takes care of producing the copies for you. With Immer, the code you write looks like you are “breaking the rules” and mutating an object,But unlike a regular mutation, it doesn’t overwrite the past state!',
            }
          ],
        }
      },
      {
        key: 1,
        title: '更新 state 中的数组',
        id: "Updating Arrays in State",
        question: '更新state中的数组',
        detail: {
          description: '数组是另外一种可以存储在 state 中的 JavaScript 对象，它虽然是可变的，但是却应该被视为不可变。同对象一样，当你想要更新存储于 state 中的数组时，你需要创建一个新的数组（或者创建一份已有数组的拷贝值），并使用新数组设置 state。',
          theory: [
            {
              title: '在没有 mutation 的前提下更新数组 ',
              id: 'Updating arrays without mutation',
              concept: "在 JavaScript 中，数组只是另一种对象。同对象一样，你需要将 React state 中的数组视为只读的。这意味着你不应该使用类似于 arr[0] = 'bird' 这样的方式来重新分配数组中的元素，也不应该使用会直接修改原始数组的方法，例如 push() 和 pop()。 相反，每次要更新一个数组时，你需要把一个新的数组传入 state 的 setting 方法中。为此，你可以通过使用像 filter() 和 map() 这样不会直接修改原始值的方法，从原始数组生成一个新的数组。然后你就可以将 state 设置为这个新生成的数组",
              tips: '不幸的是，虽然 slice 和 splice 的名字相似，但作用却迥然不同,slice 让你可以拷贝数组或是数组的一部分。splice 会直接修改 原始数组（插入或者删除元素）, 在 React 中，更多情况下你会使用 slice（没有 p ！），因为你不想改变 state 中的对象或数组',
              methods: [
                {
                  title: '向数组中添加元素:',
                  content: ' 展开操作可以完成 push() 和 unshift() 的工作，将新元素添加到数组的末尾和开头。'
                },
                {
                  title: '从数组中删除元素:',
                  content: ' 从数组中删除一个元素最简单的方法就是将它过滤出去。换句话说，你需要生成一个不包含该元素的新数组。这可以通过 filter 方法实现, filter 并不会改变原始数组'
                },
                {
                  title: '转换数组',
                  content: '如果你想改变数组中的某些或全部元素，你可以用 map() 创建一个新数组。你传入 map 的函数决定了要根据每个元素的值或索引（或二者都要）对元素做何处理'
                },
                {
                  title: '替换数组中的元素:',
                  content: "要替换数组中一个或多个元素是非常常见的。类似 arr[0] = 'bird' 这样的赋值语句会直接修改原始数组，所以在这种情况下，你也应该使用 map。要替换一个元素，请使用 map 创建一个新数组。在你的 map 回调里，第二个参数是元素的索引。使用索引来判断最终是返回原始的元素（即回调的第一个参数）还是替换成其他值",
                },
                {
                  title: '向数组中插入元素 :',
                  content: ' 有时，你也许想向数组特定位置插入一个元素，这个位置既不在数组开头，也不在末尾。为此，你可以将数组展开运算符 ... 和 slice() 方法一起使用。slice() 方法让你从数组中切出“一片”。为了将元素插入数组，你需要先展开原数组在插入点之前的切片，然后插入新元素，最后展开原数组中剩下的部分'
                },
                {
                  title: '其他改变数组的情况',
                  content: "总会有一些事，是你仅仅依靠展开运算符和 map() 或者 filter() 等不会直接修改原值的方法所无法做到的。例如，你可能想翻转数组，或是对数组排序。而 JavaScript 中的 reverse() 和 sort() 方法会改变原数组，所以你无法直接使用它们 然而，你可以先拷贝这个数组，再改变这个拷贝后的值。你可以用类似于 更新嵌套的 JavaScript 对象 的方式解决这个问题——拷贝想要修改的特定元素，而不是直接修改它 "
                }
              ],
            },
          ],
        }
      },
      {
        key: 1,
        title: '更新数组内部的对象',
        id: "Updating objects inside arrays",
        question: '更新数组内部的对象',
        detail: {
          description: '对象并不是 真的 位于数组“内部”。可能他们在代码中看起来像是在数组“内部”，但其实数组中的每个对象都是这个数组“指向”的一个存储于其它位置的值。这就是当你在处理类似 list[0] 这样的嵌套字段时需要格外小心的原因。其他人的艺术品清单可能指向了数组的同一个元素！当你更新一个嵌套的 state 时，你需要从想要更新的地方创建拷贝值，一直这样，直到顶层。通常来讲，你应该只直接修改你刚刚创建的对象。如果你正在插入一个新的 artwork，你可以修改它，但是如果你想要改变的是 state 中已经存在的东西，你就需要先拷贝一份了',
          theory: [
            {
              title: '使用 Immer 编写简洁的更新逻辑',
              id: 'Write concise update logic with Immer ',
              concept: "在 JavaScript 中，数组只是另一种对象。同对象一样，你需要将 React state 中的数组视为只读的。这意味着你不应该使用类似于 arr[0] = 'bird' 这样的方式来重新分配数组中的元素，也不应该使用会直接修改原始数组的方法，例如 push() 和 pop()。 相反，每次要更新一个数组时，你需要把一个新的数组传入 state 的 setting 方法中。为此，你可以通过使用像 filter() 和 map() 这样不会直接修改原始值的方法，从原始数组生成一个新的数组。然后你就可以将 state 设置为这个新生成的数组",
              steps: [
                '通常情况下，你应该不需要更新处于非常深层级的 state 。如果你有此类需求，你或许需要调整一下数据的结构，让数据变得扁平一些。',
                '如果你不想改变 state 的数据结构，你也许会更喜欢使用 Immer ，它让你可以继续使用方便的，但会直接修改原值的语法，并负责为你生成拷贝值。',
                '在幕后，Immer 总是会根据你对 draft 的修改来从头开始构建下一个 state。这使得你的事件处理程序非常的简洁，同时也不会直接修改 state'
              ]
            }
          ]
        },
        summary: [
          "你可以把数组放入 state 中，但你不应该直接修改它。",
          "不要直接修改数组，而是创建它的一份 新的 拷贝，然后使用新的数组来更新它的状态。",
          "你可以使用 [...arr, newItem] 这样的数组展开语法来向数组中添加元素。",
          "你可以使用 filter() 和 map() 来创建一个经过过滤或者变换的数组。",
          "你可以使用 Immer 来保持代码简洁。"
        ]
      }
    ],
  },
  managingState: {
    h2: '状态管理',
    id: 'managingState',
    path: '/react/managingState',
    title: '状态管理',
    preIconType: 'dir',
    type: 'addSquare',
    summary: '随着你的应用不断变大，更有意识的去关注应用状态如何组织，以及数据如何在组件之间流动会对你很有帮助。冗余或重复的状态往往是缺陷的根源。',
    questionList: [
      {
        key: 2,
        title: '用 State 响应输入',
        id: 'Reacting to Input with State',
        question: '用 State 响应输入',
        detail: {
          description: 'React 控制 UI 的方式是声明式的。你不必直接控制 UI 的各个部分，只需要声明组件可以处于的不同状态，并根据用户的输入在它们之间切换。这与设计师对 UI 的思考方式很相似',
          theory: [
            {
              title: '声明式 UI 与命令式 UI 的比较 ',
              id: 'How declarative UI compares to imperative',
              concept: '当你设计 UI 交互时，可能会去思考 UI 如何根据用户的操作而响应变化',
              elements:'在 命令式编程 中，以上的过程直接告诉你如何去实现交互。你必须去根据要发生的事情写一些明确的命令去操作 UI。对此有另一种理解方式，想象一下，当你坐在车里的某个人旁边，然后一步一步地告诉他该去哪,他并不知道你想去哪，只想跟着命令行动。（并且如果你发出了错误的命令，那么你就会到达错误的地方）正因为你必须从加载动画到按钮地“命令”每个元素，所以这种告诉计算机如何去更新 UI 的编程方式被称为命令式编程,对于独立系统来说，命令式地控制用户界面的效果也不错，但是当处于更加复杂的系统中时，这会造成管理的困难程度指数级地增长,',
              tips: '在 React 中，你不必直接去操作 UI —— 你不必直接启用、关闭、显示或隐藏组件。相反，你只需要 声明你想要显示的内容， React 就会通过计算得出该如何去更新 UI。想象一下，当你上了一辆出租车并且告诉司机你想去哪，而不是事无巨细地告诉他该如何走。将你带到目的地是司机的工作，他们甚至可能知道一些你没有想过并且不知道的捷径！',
              
            },
            {
              title: '声明式地考虑 UI',
              id: 'Thinking about UI declaratively ',
              methods: [
                {
                  title: '步骤 1：定位组件中不同的视图状态',
                  content: '像一个设计师一样，你会想要在你添加逻辑之前去“模拟”不同的状态或创建“模拟状态”'
                },
                {
                  title: '步骤 2：确定是什么触发了这些状态的改变 ',
                  content: '像一个设计师一样，你会想要在你添加逻辑之前去“模拟”不同的状态或创建“模拟状态”',
                  tips: '注意，人为输入通常需要 事件处理函数！'
                },
                {
                  title: '步骤 3：通过 useState 表示内存中的 state ',
                  content: '在内存中通过 useState 表示组件中的视图状态。',
                  tips: 'state 的每个部分都是“处于变化中的”，并且你需要让“变化的部分”尽可能的少。更复杂的程序会产生更多 bug'
                },
                {
                  title: '步骤 4：删除任何不必要的 state 变量 ',
                  content: '防止出现在内存中的 state 不代表任何你希望用户看到的有效 UI 的情况',
                  tips: '为了更精确地模块化状态，你可以 将状态提取到一个 reducer 中。Reducer 可以让您合并多个状态变量到一个对象中并巩固所有相关的逻辑！'
                },
                {
                  title: '步骤 5：连接事件处理函数以设置 state ',
                  content: '将所有的交互变为 state 的改变，可以让你避免之后引入新的视图状态后导致现有 state 被破坏。同时也使你在不必改变交互逻辑的情况下，更改每个状态对应的 UI。'
                },
              ],
              summary: [
                '声明式编程意味着为每个视图状态声明 UI 而非细致地控制 UI（命令式）',
                '写出你的组件中所有的视图状态。确定是什么触发了这些 state 的改变。通过 useState 模块化内存中的 state。删除任何不必要的 state 变量。连接事件处理函数去设置 state。',
              ]
            },

          ]
        }
      },
      {
        key: 2,
        title: '选择 State 结构',
        id: 'Choosing the State Structure',
        question: '选择 State 结构',
        detail: {
          description: '构建良好的 state 可以让组件变得易于修改和调试，而不会经常出错',
          theory: [
            {
              title: '构建 state 的原则',
              id: 'Principles for structuring state',
              concept: '构建良好的 state 可以让组件变得易于修改和调试，而不会经常出错',
              elements: '这些原则背后的目标是 使 state 易于更新而不引入错误。从 state 中删除冗余和重复数据有助于确保所有部分保持同步。这类似于数据库工程师想要 “规范化”数据库结构，以减少出现错误的机会。用爱因斯坦的话说，“让你的状态尽可能简单，但不要过于简单。”',
              methods: [
                {
                  title: '合并关联的 state',
                  content: '如果你总是同时更新两个或更多的 state 变量，请考虑将它们合并为一个单独的 state 变量。',
                },
                {
                  title: '避免互相矛盾的 state',
                  content: '当 state 结构中存在多个相互矛盾或“不一致”的 state 时，你就可能为此会留下隐患。应尽量避免这种情况。',
                },
                {
                  title: '避免冗余的 state',
                  content: '如果你能在渲染期间从组件的 props 或其现有的 state 变量中计算出一些信息，则不应将这些信息放入该组件的 state 中',
                },
                {
                  title: '避免重复的 state',
                  content: '当同一数据在多个 state 变量之间或在多个嵌套对象中重复时，这会很难保持它们同步。应尽可能减少重复',
                },
                {
                  title: '避免深度嵌套的 state',
                  content: '深度分层的 state 更新起来不是很方便。如果可能的话，最好以扁平化方式构建 state。',
                },
              ],
              tips: '如果你的 state 变量是一个对象时，请记住，你不能只更新其中的一个字段 而不显式复制其他字段',
              summary: [
                '如果两个 state 变量总是一起更新，请考虑将它们合并为一个。',
                '仔细选择你的 state 变量，以避免创建“极难处理”的 state。',
                '用一种减少出错更新的机会的方式来构建你的 state。',
                '避免冗余和重复的 state，这样您就不需要保持同步。',
                '除非您特别想防止更新，否则不要将 props 放入 state 中。',
                '对于选择类型的 UI 模式，请在 state 中保存 ID 或索引而不是对象本身。',
                '如果深度嵌套 state 更新很复杂，请尝试将其展开扁平化。',
              ]
            },
          ],
          
        }
      },
      {
        key: 2,
        title: '在组件间共享状态',
        id: 'Sharing State Between Components',
        question: '在组件间共享状态',
        detail: {
          description: '有时候，你希望两个组件的状态始终同步更改。要实现这一点，可以将相关 state 从这两个组件上移除，并把 state 放到它们的公共父级，再通过 props 将 state 传递给这两个组件。这被称为“状态提升”，这是编写 React 代码时常做的事',
          theory: [
            {
              id: 'Lifting state up by example',
              title: '状态提升',
              concept: '从子组件中 移除 state,从父组件 传递 硬编码数据。为共同的父组件添加 state ，并将其与事件处理函数一起向下传递。',
              tips: '如果你的 state 变量是一个对象时，请记住，你不能只更新其中的一个字段 而不显式复制其他字段',
            },
            {
              title: '每个状态都对应唯一的数据源',
              concept: '**对于每个独特的状态，都应该存在且只存在于一个指定的组件中作为 state **。这一原则也被称为拥有 “可信单一数据源”。它并不意味着所有状态都存在一个地方——对每个状态来说，都需要一个特定的组件来保存这些状态信息。你应该 将状态提升 到公共父级，或 将状态传递 到需要它的子级中，而不是在组件之间复制共享的状态',
            }
          ],
          summary: [
            '当你想要整合两个组件时，将它们的 state 移动到共同的父组件中。',
            '然后在父组件中通过 props 把信息传递下去。',
            '最后，向下传递事件处理程序，以便子组件可以改变父组件的 state 。',
            '考虑该将组件视为“受控”（由 prop 驱动）或是“不受控”（由 state 驱动）是十分有益的。',
          ]
        },
        
      },
      {
        key: 2,
        title: '对 state 进行保留和重置',
        id: 'Preserving and Resetting State ',
        question: '对 state 进行保留和重置',
        detail: {
          description: '各个组件的 state 是各自独立的。根据组件在 UI 树中的位置，React 可以跟踪哪些 state 属于哪个组件。你可以控制在重新渲染过程中何时对 state 进行保留和重置',
          theory: [
            {
              title: 'UI树',
              concept: 'React 也使用树形结构来对你创造的 UI 进行管理和建模。React 根据你的 JSX 生成 UI 树。React DOM 根据 UI 树去更新浏览器的 DOM 元素',
              methods: [
                {
                  title: 'state 与树中的某个位置相关联',
                  content: '当你为一个组件添加 state 时，你可能会觉得 state “活”在组件内部。但实际上，state 被保存在 React 内部。根据组件在 UI 树中的位置，React 将它所持有的每个 state 与正确的组件关联起来。',
                  tips: '只要一个组件还被渲染在 UI 树的相同位置，React 就会保留它的 state。 如果它被移除，或者一个不同的组件被渲染在相同的位置，那么 React 就会丢掉它的 state。'
                },
                {
                  title: '相同位置的相同组件会使得 state 被保留下来',
                  tips: ' 对 React 来说重要的是组件在 UI 树中的位置,而不是在 JSX 中的位置！'
                },
                {
                  title: '相同位置的不同组件会使 state 重置 ',
                  content: '当你在相同位置渲染不同的组件时，组件的整个子树都会被重置, ',
                  tips: '  永远要将组件定义在最上层并且不要把它们的定义嵌套起来',
                },
                {
                  title: '在相同位置重置 state ',
                  content: '默认情况下，React 会在一个组件保持在同一位置时保留它的 state。通常这就是你想要的，所以把它作为默认特性很合理。但有时候，你可能想要重置一个组件的 state。 ',
                  tips: ' 有两个方法可以在它们相互切换时重置 state :将组件渲染在不同的位置, 使用 key 赋予每个组件一个明确的身份, 请记住 key 不是全局唯一的。它们只能指定 父组件内部 的顺序。',
                },
                
              ]
            },
            {
              title: '使用 key 重置表单 ',
              concept: '默认情况下，React 会在一个组件保持在同一位置时保留它的 state。通常这就是你想要的，所以把它作为默认特性很合理。但有时候，你可能想要重置一个组件的 state。 ',
              tips: ' 有两个方法可以在它们相互切换时重置 state :将组件渲染在不同的位置, 使用 key 赋予每个组件一个明确的身份, 请记住 key 不是全局唯一的。它们只能指定 父组件内部 的顺序。',
            },
          ],
          tips: '如果你的 state 变量是一个对象时，请记住，你不能只更新其中的一个字段 而不显式复制其他字段',
          summary: [
            '只要在相同位置渲染的是相同组件， React 就会保留状态。',
            'state 不会被保存在 JSX 标签里。它与你在树中放置该 JSX 的位置相关联。',
            '你可以通过为一个子树指定一个不同的 key 来重置它的 state。',
            '不要嵌套组件的定义，否则你会意外地导致 state 被重置。',
          ]
        }
        
      },
      {
        key: 2,
        title: '迁移状态逻辑至 Reducer 中',
        id: 'Extracting State Logic into a Reducer ',
        question: '迁移状态逻辑至 Reducer 中',
        detail: {
          description: '对于拥有许多状态更新逻辑的组件来说，过于分散的事件处理程序可能会令人不知所措。对于这种情况，你可以将组件的所有状态更新逻辑整合到一个外部函数中，这个函数叫作 reducer。',
          theory: [
            {
              title: '使用 reducer 整合状态逻辑',
              concept: '随着组件复杂度的增加，你将很难一眼看清所有的组件状态更新逻辑。',
              methods: [
                {
                  title: '第 1 步: 将设置状态的逻辑修改成 dispatch 的一个 action ',
                  content: '使用 reducers 管理状态与直接设置状态略有不同。它不是通过设置状态来告诉 React “要做什么”，而是通过事件处理程序 dispatch 一个 “action” 来指明 “用户刚刚做了什么”。（而状态更新逻辑则保存在其他地方！）因此，我们不再通过事件处理器直接 “设置 task”，而是 dispatch 一个 “添加/修改/删除任务” 的 action。这更加符合用户的思维',
                  tips: 'action 对象可以有多种结构'
                },
                {
                  title: '第 2 步: 编写一个 reducer 函数',
                  content: ' reducer 函数就是你放置状态逻辑的地方。它接受两个参数，分别为当前 state 和 action 对象，并且返回的是更新后的 state：',
                  tips: '在 reducers 中使用 switch 语句 是一种惯例。两种方式结果是相同的，但 switch 语句读起来一目了然。建议将每个 case 块包装到 { 和 } 花括号中，这样在不同 case 中声明的变量就不会互相冲突。此外，case 通常应该以 return 结尾。如果你忘了 return，代码就会 进入 到下一个 case，这就会导致错误！'
                },
                {
                  title: '第 3 步: 在组件中使用 reducer',
                  content: '事件处理程序只通过派发 action 来指定 发生了什么，而 reducer 函数通过响应 actions 来决定 状态如何更新。, ',
                },
              ]
            },
            {
              title: '编写一个好的 reducers ',
              concept: 'reducers 必须是纯粹的。 这一点和 状态更新函数 是相似的，reducers 在是在渲染时运行的！（actions 会排队直到下一次渲染)。 这就意味着 reducers 必须纯净，即当输入相同时，输出也是相同的。它们不应该包含异步请求、定时器或者任何副作用（对组件外部有影响的操作）。它们应该以不可变值的方式去更新 对象 和 数组,每个 action 都描述了一个单一的用户交互，即使它会引发数据的多个变化。'
            },
            {
              title: '使用 Immer 简化 reducers  ',
              concept: '与在平常的 state 中 修改对象 和 数组 一样，你可以使用 Immer 这个库来简化 reducer。在这里，useImmerReducer 让你可以通过 push 或 arr[i] = 来修改 state '
            },
          ],
          tips: 'Reducers 应该是纯净的，所以它们不应该去修改 state。而 Immer 为你提供了一种特殊的 draft 对象，你可以通过它安全的修改 state。在底层，Immer 会基于当前 state 创建一个副本。这就是为什么通过 useImmerReducer 来管理 reducers 时，可以修改第一个参数，且不需要返回一个新的 state 的原因。',
          summary: [
            '把 useState 转化为 useReducer：',
            '通过事件处理函数 dispatch actions；',
            '编写一个 reducer 函数，它接受传入的 state 和一个 action，并返回一个新的 state；',
            '使用 useReducer 替换 useState；',
            'Reducers 可能需要你写更多的代码，但是这有利于代码的调试和测试。',
            'Reducers 必须是纯净的。',
            '每个 action 都描述了一个单一的用户交互。',
            '使用 Immer 来帮助你在 reducer 里直接修改状态。'
          ]
        }
        
      },
      {
        key: 2,
        title: '使用 Context 深层传递参数',
        id: 'Passing Data Deeply with Context',
        question: '使用 Context 深层传递参数',
        detail: {
          description: 'Context 允许父组件向其下层无论多深的任何组件提供信息，而无需通过 props 显式传递。',
          theory: [
            {
              title: '传递 props 带来的问题 ',
              concept: '当你需要在组件树中深层传递参数以及需要在组件间复用相同的参数时，传递 props 就会变得很麻烦。最近的根节点父组件可能离需要数据的组件很远，状态提升 到太高的层级会导致 “逐层传递 props” 的情况',
            },
            {
              title: 'Context：传递 props 的另一种方法',
              concept: 'Context 让父组件可以为它下面的整个组件树提供数据',
              methods: [
                {
                  title: 'Step 1：创建 context ',
                  content: '首先，你需要创建这个 context，并 将其从一个文件中导出，这样你的组件才可以使用它'
                },
                {
                  title: 'Step 2：使用 Context  ',
                  content: '从 React 中引入 useContext Hook 以及你刚刚创建的 context:'
                },
                {
                  title: 'Step 3：提供 context  ',
                  content: '把它们用 context provider 包裹起来'
                },
              ]
            },
            {
              title: 'Context 会穿过中间层级的组件   ',
              concept: '你可以在提供 context 的组件和使用它的组件之间的层级插入任意数量的组件。这包括像 <div> 这样的内置组件和你自己创建的组件。 '
            },
            {
              title: '写在你使用 context 之前 ',
              concept: '使用 Context 看起来非常诱人！然而，这也意味着它也太容易被过度使用了。如果你只想把一些 props 传递到多个层级中，这并不意味着你需要把这些信息放到 context 里。',
              methods: [
                {
                  title: '从 传递 props 开始。',
                  content: '如果你的组件看起来不起眼，那么通过十几个组件向下传递一堆 props 并不罕见。这有点像是在埋头苦干，但是这样做可以让哪些组件用了哪些数据变得十分清晰！维护你代码的人会很高兴你用 props 让数据流变得更加清晰。'
                },
                {
                  title: '抽象组件并 将 JSX 作为 children 传递 给它们。',
                  content: '如果你通过很多层不使用该数据的中间组件（并且只会向下传递）来传递数据，这通常意味着你在此过程中忘记了抽象组件。举个例子，你可能想传递一些像 posts 的数据 props 到不会直接使用这个参数的组件，类似 <Layout posts={posts} />。取而代之的是，让 Layout 把 children 当做一个参数，然后渲染 <Layout><Posts posts={posts} /></Layout>。这样就减少了定义数据的组件和使用数据的组件之间的层级。'
                },
              ]
            },
            {
              title: 'Context 的使用场景 ',
              methods: [
                {
                  title: '主题',
                  content: '如果你的应用允许用户更改其外观（例如暗夜模式），你可以在应用顶层放一个 context provider，并在需要调整其外观的组件中使用该 context。'
                },
                {
                  title: '当前账户',
                  content: '许多组件可能需要知道当前登录的用户信息。将它放到 context 中可以方便地在树中的任何位置读取它。某些应用还允许你同时操作多个账户（例如，以不同用户的身份发表评论）。在这些情况下，将 UI 的一部分包裹到具有不同账户数据的 provider 中会很方便'
                },
                {
                  title: '路由',
                  content: '大多数路由解决方案在其内部使用 context 来保存当前路由。这就是每个链接“知道”它是否处于活动状态的方式。如果你创建自己的路由库，你可能也会这么做'
                },
                {
                  title: '状态管理',
                  content: '随着你的应用的增长，最终在靠近应用顶部的位置可能会有很多 state。许多遥远的下层组件可能想要修改它们。通常 将 reducer 与 context 搭配使用来管理复杂的状态并将其传递给深层的组件来避免过多的麻烦'
                },
              ],
             
            }
          ],
          tips: 'Context 不局限于静态值。如果你在下一次渲染时传递不同的值，React 将会更新读取它的所有下层组件！这就是 context 经常和 state 结合使用的原因。',
          summary: [
            'Context 使组件向其下方的整个树提供信息',
            '传递 Context 的方法: 通过 export const MyContext = createContext(defaultValue) 创建并导出 context。在无论层级多深的任何子组件中，把 context 传递给 useContext(MyContext) Hook 来读取它,在父组件中把 children 包在 <MyContext.Provider value={...}> 中来提供 context',
            'Context 会穿过中间的任何组件',
            '使Context 可以让你写出 “较为通用” 的组件。',
            '在使用 context 之前，先试试传递 props 或者将 JSX 作为 children 传递'
          ]
        }
        
      },
      {
        key: 2,
        title: '使用 Reducer 和 Context 来拓展你的应用',
        id: 'Scaling Up with Reducer and Context',
        question: '使用 Reducer 和 Context 来拓展你的应用',
        detail: {
          description: 'Reducer 可以整合组件的状态更新逻辑。Context 可以将信息深入传递给其他组件。你可以组合使用它们来共同管理一个复杂页面的状态',
          theory: [
            {
              title: '结合使用 reducer 和 context ',
              concept: '状态被 reducer 所管理。reducer 函数包含了所有的状态更新逻辑并在此文件的底部声明：Reducer 有助于保持事件处理程序的简短明了。但随着应用规模越来越庞大，你就可能会遇到别的困难',
              methods: [
                {
                  title: '第一步: 创建 context ',
                  content: 'useReducer 返回当前的 tasks 和 dispatch 函数来让你更新它们：'
                },
                {
                  title: '第二步: 将 state 和 dispatch 函数 放入 context ',
                  content: '你可以将所有的 context 导入组件。获取 useReducer() 返回的 state 和 dispatch 并将它们 提供 给整个组件树：'
                },
                {
                  title: 'Step 3: 在组件树中的任何地方使用 context  ',
                  content: 'state 仍然 “存在于” 顶层 Task 组件中，由 useReducer 进行管理'
                },
              ]
            },
            {
              title: '将相关逻辑迁移到一个文件当中 ',
              concept: '这不是必须的，但你可以通过将 reducer 和 context 移动到单个文件中来进一步整理组件',
              methods: [
                {
                  title: 'Step 1：创建 context ',
                  content: '首先，你需要创建这个 context，并 将其从一个文件中导出，这样你的组件才可以使用它'
                },
                {
                  title: 'Step 2：使用 Context  ',
                  content: '从 React 中引入 useContext Hook 以及你刚刚创建的 context:'
                },
                {
                  title: 'Step 3：提供 context  ',
                  content: '把它们用 context provider 包裹起来'
                },
              ]
            },
          ],
          summary: [
            '你可以将 reducer 与 context 相结合，让任何组件读取和更新它的状态。',
            '为子组件提供 state 和 dispatch 函数：创建两个 context (一个用于 state,一个用于 dispatch 函数),让组件的 context 使用 reducer。使用组件中需要读取的 context',
            '你可以通过将所有传递信息的代码移动到单个文件中来进一步整理组件。',
            '你可以在你的应用程序中大量使用 context 和 reducer 的组合。'
          ]
        }
        
      },
    ]
  },
  escapeHatches: {
    h2: '逃脱方案',
    id: 'escapeHatches',
    path: '/react/escapeHatches',
    title: '逃脱方案',
    preIconType: 'dir',
    type: 'addSquare',
    summary: '您的一些组件可能需要控制和同步与React之外的系统。例如,您可能需要使用浏览器API聚焦输入,播放和暂停没有使用React实现的视频播放器,或者连接并监听来自远程服务器的消息。在这章中,您将学习可以“跳出”React并连接到外部系统的逃生舱。您的应用程序逻辑和数据流的大部分不应依赖于这些功能',
    questionList: [
      {
        key: 3,
        title: '使用 ref 引用值',
        id: 'Referencing values with refs',
        question: '使用 ref 引用值 ',
        detail: {
          description: '当你希望组件“记住”某些信息，但又不想让这些信息 触发新的渲染 时，你可以使用 ref 。',
          theory: [
            {
              title: '给你的组件添加 ref ',
              id: 'Adding a ref to your component ',
              concept: '可以通过从 React 导入 useRef Hook 来为你的组件添加一个 ref',
              elements: '在你的组件内，调用 useRef Hook 并传入你想要引用的初始值作为唯一参数,你可以用 ref.current 属性访问该 ref 的当前值。这个值是有意被设置为可变的，意味着你既可以读取它也可以写入它。就像一个 React 追踪不到的、用来存储组件信息的秘密“口袋”',
              tips: '组件不会在每次递增时重新渲染。 与 state 一样，React 会在每次重新渲染之间保留 ref。但是，设置 state 会重新渲染组件，更改 ref 不会！当一条信息用于渲染时，将它保存在 state 中。当一条信息仅被事件处理器需要，并且更改它不需要重新渲染时，使用 ref 可能会更高效。',
            },
            {
              title: 'ref 和 state 的不同之处',
              id: 'Differences between refs and state',
              concept: '可以通过从 React 导入 useRef Hook 来为你的组件添加一个 ref',
              methods: [
                {
                  title: 'ref',
                  content: 'useRef(initialValue)返回 { current: initialValue },更改时不会触发重新渲染, 可变 —— 你可以在渲染过程之外修改和更新 current 的值,你不应在渲染期间读取（或写入） current 值。'
                },
                {
                  title: 'state',
                  content: 'useState(initialValue) 返回 state 变量的当前值和一个 state 设置函数 ( [value, setValue]),更改时触发重新渲染,“不可变” —— 你必须使用 state 设置函数来修改 state 变量，从而排队重新渲染。你可以随时读取 state。但是，每次渲染都有自己不变的 state 快照。'
                },
              ]
            },
            {
              title: '何时使用 ref ',
              id: 'When to use refs',
              concept: '当你的组件需要“跳出” React 并与外部 API 通信时，你会用到 ref —— 通常是不会影响组件外观的浏览器 API, 如果你的组件需要存储一些值，但不影响渲染逻辑，请选择 ref',
              steps: [
                '存储 timeout ID',
                '存储和操作 DOM 元素',
                '存储不需要被用来计算 JSX 的其他对象'
              ]
            },
            {
              title: 'ref 的最佳实践  ',
              id: 'Best practices for refs',
              concept: 'React state 的限制不适用于 ref。当你使用 ref 时，也无需担心 避免变更。只要你改变的对象不用于渲染，React 就不会关心你对 ref 或其内容做了什么。',
              steps: [
                '将 ref 视为应急方案。 当你使用外部系统或浏览器 API 时，ref 很有用。如果你很大一部分应用程序逻辑和数据流都依赖于 ref，你可能需要重新考虑你的方法',
                '不要在渲染过程中读取或写入 ref.current。 如果渲染过程中需要某些信息，请使用 state 代替。由于 React 不知道 ref.current 何时发生变化，即使在渲染时读取它也会使组件的行为难以预测。（唯一的例外是像 if (!ref.current) ref.current = new Thing() 这样的代码，它只在第一次渲染期间设置一次 ref。）',
              ]
            },
            {
              title: 'ref 和 DOM ',
              concept: '你可以将 ref 指向任何值。但是，ref 最常见的用法是访问 DOM 元素。例如，如果你想以编程方式聚焦一个输入框，这种用法就会派上用场。当你将 ref 传递给 JSX 中的 ref 属性时，比如 <div ref={myRef}>，React 会将相应的 DOM 元素放入 myRef.current 中。'
            }
          ],
          summary: [
            'ref 是一个应急方案，用于保留不用于渲染的值。 你不会经常需要它们。',
            'ref 是一个普通的 JavaScript 对象，具有一个名为 current 的属性，你可以对其进行读取或设置。',
            '你可以通过调用 useRef Hook 来让 React 给你一个 ref。',
            '与 state 一样，ref 允许你在组件的重新渲染之间保留信息。',
            '与 state 不同，设置 ref 的 current 值不会触发重新渲染。',
            '不要在渲染过程中读取或写入 ref.current。这使你的组件难以预测'
          ]
        }
      },
      {
        key: 2,
        title: '使用 ref 操作 DOM',
        id: 'Manipulating the DOM with Refs',
        question: '使用 ref 操作 DOM ',
        detail: {
          description: '由于 React 会自动处理更新 DOM 以匹配你的渲染输出，因此你在组件中通常不需要操作 DOM。但是，有时你可能需要访问由 React 管理的 DOM 元素 —— 例如，让一个节点获得焦点、滚动到它或测量它的尺寸和位置。在 React 中没有内置的方法来做这些事情，所以你需要一个指向 DOM 节点的 ref 来实现。',
          theory: [
            {
              title: '获取指向节点的 ref  ',
              id: 'Getting a ref to the node',
              concept: '要访问由 React 管理的 DOM 节点，首先，引入 useRef Hook：然后，在你的组件中使用它声明一个 ref,Finally, pass your ref as the ref attribute to the JSX tag for which you want to get the DOM node',
              steps: [
                '示例: 使文本输入框获得焦点',
                '示例: 滚动至一个元素 ',
                '如何使用 ref 回调管理 ref 列表 '
              ]
            },
            {
              title: '访问另一个组件的 DOM 节点 ',
              id: 'Accessing another component’s DOM nodes',
              concept: '当你将 ref 放在像 <input /> 这样输出浏览器元素的内置组件上时，React 会将该 ref 的 current 属性设置为相应的 DOM 节点（例如浏览器中实际的 <input /> ）。但是，如果你尝试将 ref 放在 你自己的 组件上，例如 <MyInput />，默认情况下你会得到 null',
              tips: '在设计系统中，将低级组件（如按钮、输入框等）的 ref 转发到它们的 DOM 节点是一种常见模式。另一方面，像表单、列表或页面段落这样的高级组件通常不会暴露它们的 DOM 节点，以避免对 DOM 结构的意外依赖。'
            },
            {
              title: 'React 何时添加 refs ',
              id: 'When React attaches the refs',
              concept: '在 React 中，每次更新都分为 两个阶段：在 渲染 阶段， React 调用你的组件来确定屏幕上应该显示什么,在 提交 阶段， React 把变更应用于 DOM。',
            },
            {
              title: '用 flushSync 同步更新 state ',
              id: 'Flushing state updates synchronously with flushSync',
              concept: '在 React 中，state 更新是排队进行的。通常，这就是你想要的。但是，在这个示例中会导致问题，因为 setTodos 不会立即更新 DOM。因此，当你将列表滚动到最后一个元素时，尚未添加待办事项。这就是为什么滚动总是“落后”一项的原因。要解决此问题，你可以强制 React 同步更新（“刷新”）DOM。 为此，从 react-dom 导入 flushSync 并将 state 更新包裹 到 flushSync 调用中',

            },
            {
              title: '使用 refs 操作 DOM 的最佳实践 ',
              concept: 'Refs 是一个应急方案。你应该只在你必须“跳出 React”时使用它们。这方面的常见示例包括管理焦点、滚动位置或调用 React 未暴露的浏览器 API。如果你坚持聚焦和滚动等非破坏性操作，应该不会遇到任何问题。但是，如果你尝试手动修改 DOM，则可能会与 React 所做的更改发生冲突。'
            }
          ],
          summary: [
            'Refs 是一个通用概念，但大多数情况下你会使用它们来保存 DOM 元素。',
            '你通过传递 <div ref={myRef}> 指示 React 将 DOM 节点放入 myRef.current。',
            '通常，你会将 refs 用于非破坏性操作，例如聚焦、滚动或测量 DOM 元素。',
            '默认情况下，组件不暴露其 DOM 节点。 您可以通过使用 forwardRef 并将第二个 ref 参数传递给特定节点来暴露 DOM 节点。',
            '避免更改由 React 管理的 DOM 节点。',
            '如果你确实修改了 React 管理的 DOM 节点，请修改 React 没有理由更新的部分'
          ]
        }
      },
      {
        key: 3,
        title: '使用副作用同步',
        id: 'Synchronizing with Effects',
        question: '使用副作用同步',
        detail: {
          description: '一些组件需要与外部系统同步。例如,您可能想根据React state控制非React组件,设置服务器连接,或在组件出现在屏幕上时发送分析日志。Effects允许您在渲染后运行一些代码,以便您可以将组件与React外部的某个系统同步',
          theory: [
            {
              title: 'Effects和事件有什么区别?  ',
              id: 'What are Effects and how are they different from events?',
              steps: [
                '*渲染代码*(在<Describing the UI>中介绍)位于组件的顶层。在这里,您可以获取props和state,对其进行转换,并返回要在屏幕上看到的JSX。<Rendering code must be pure.>就像数学公式,它应该只是_计算_结果,而不做其他任何事情。',
                '*事件处理程序*(在<Adding Interactivity>中介绍)是组件内嵌的函数,这些函数不仅仅是计算结果,而是真正做些事情。事件处理程序可能更新输入字段,提交HTTP POST请求购买产品,或将用户导航到另一个屏幕。事件处理程序包含由特定用户操作(例如按钮点击或输入)引起的“副作用”(它们改变程序的状态)。',
                '有时这是不够的。考虑`ChatRoom`组件,它必须在其出现在屏幕上时连接到聊天服务器。连接到服务器不是一个纯计算(它是副作用),因此它不能在渲染期间发生。然而,没有像点击这样的单一特定事件导致显示`ChatRoom`'
              ],
              concept: '_Effects_允许您指定由渲染本身而不是特定事件直接引起的副作用。_Effects_运行在屏幕更新后的<commit>之后。这是一个很好的时间来同步React组件与某些外部系统(如网络或第三方库)。',
              tips: '大写的"Effect"是指上述React特定的定义,即由渲染引起的副作用。为了指代更广泛的编程概念,我们将说“副作用”。'
            },
            {
              title: 'How to write an Effect',
              id: 'How to write an Effect ',
              steps: [
                'Step 1: Declare an Effect',
                'Step 2: Specify the Effect dependencies',
                'Step 3: Add cleanup if needed ',
              ],
              tips: '指定正确和精确的依赖项数组对于编写高性能和稳定的 Effect 至关重要'
            },
            {
              title: '在开发中,如何处理 Effect 触发两次? ',
              concept: 'React 有意在开发中重新安装您的组件,以发现像最后一个示例中的错误。*正确的问题不是“如何只运行一个Effect”,而是“如何修复我的Effect,使其在重新安装后工作”。*通常,答案是实现清理功能。清理函数应该停止或撤消 Effect 正在做的事情。大致的规则是,用户不应该能够区分 Effect 运行一次(如在生产中)和 setup → cleanup → setup 序列(如您在开发中看到的)之间的区别。',
              steps: [
                '订阅Effect**:在挂载时订阅,在清理时取消订阅',
                '手动 DOM 更新**:在挂载时更新 DOM,在清理时重置',
                '设置定时器**:在挂载时设置定时器,在清理时清除定时器',
                '*调用 API**:在挂载时调用 API,在清理时取消未完成的 API 调用'
              ]
            },
            {
              title: '控制非 React 组件',
              concept: '有时您需要添加不是为 React 编写的 UI 组件。例如,假设您要在页面上添加地图组件'
            },
            {
              title: '订阅事件',
              concept: '重要的是要记住在 Effect 的清理函数中取消任何启动的订阅或侦听器。否则,您的组件可能会在卸载后保留对外部资源的引用,这可能导致性能问题或 bug'
            },
            {
              title: '触发动画',
              concept: '如果您的 Effect 在某些内容中进行动画处理,清理函数应该将动画重置为初始值,与订阅/事件相同,如果您的 Effect 启动了动画,请确保在清理函数中正确重置该动画。否则,您的组件可能在重新渲染或卸载后保留错误的动画状态。'
            },
            {
              title: '获取数据',
              concept: '如果您的 Effect 获取某些内容,清理函数应该中止获取或忽略其结果',
              tips: '正确实现清理函数对于编写稳定的 Effect 来说至关重要'
            },
            {
              title: '发送分析数据',
              concept: '如果您的 Effect 获取某些内容,清理函数应该中止获取或忽略其结果',
              tips: '考虑在清理函数中执行某些操作,以防止在组件快速卸载和重新挂载时错过关键操作'
            },
            {
              title: '不是一个Effect:初始化应用程序',
              concept: '一些逻辑应仅在应用程序启动时运行一次。您可以将其置于组件之外:',
              tips: '不要在 Effects 或组件内部运行一次性的应用程序初始化逻辑。相反,在应用程序的根目录中编写一个初始化函数。这会让你的代码更加清晰和模块化。'
            },
          ],
          summary: [
            'Unlike events, Effects are caused by rendering itself rather than a particular interaction.',
            'Effects let you synchronize a component with some external system (third-party API, network, etc).',
            'By default, Effects run after every render (including the initial one).',
            'React will skip the Effect if all of its dependencies have the same values as during the last render.',
            'You can’t “choose” your dependencies. They are determined by the code inside the Effect.',
            'Empty dependency array ([]) corresponds to the component “mounting”, i.e. being added to the screen.',
            'In Strict Mode, React mounts components twice (in development only!) to stress-test your Effects.',
            'If your Effect breaks because of remounting, you need to implement a cleanup function.',
            'React will call your cleanup function before the Effect runs next time, and during the unmount.'
          ]
        }
      },
      {
        key: 3,
        title: '你可能不需要 Effect',
        id: 'You Might Not Need an Effect',
        question: '你可能不需要 Effect',
        detail: {
          description: 'Effect 是 React 范式中的一个逃脱方案。它们让你可以 “逃出” React 并使组件和一些外部系统同步，比如非 React 组件、网络和浏览器 DOM。如果没有涉及到外部系统（例如，你想根据 props 或 state 的变化来更新一个组件的 state），你就不应该使用 Effect。移除不必要的 Effect 可以让你的代码更容易理解，运行得更快，并且更少出错。',
          theory: [
            {
              title: '如何移除不必要的 Effect  ',
              id: 'How to remove unnecessary Effects ',
              methods: [
                {
                  title: '你不必使用 Effect 来转换渲染所需的数据',
                  content: '例如，你想在展示一个列表前先做筛选。你的直觉可能是写一个当列表变化时更新 state 变量的 Effect。然而，这是低效的。当你更新这个 state 时，React 首先会调用你的组件函数来计算应该显示在屏幕上的内容。然后 React 会把这些变化“提交”到 DOM 中来更新屏幕。然后 React 会执行你的 Effect。如果你的 Effect 也立即更新了这个 state，就会重新执行整个流程。为了避免不必要的渲染流程，应在你的组件顶层转换数据。这些代码会在你的 props 或 state 变化时自动重新执行'
                },
                {
                  title: '你不必使用 Effect 来处理用户事件',
                  content: '通常应该在相应的事件处理函数中处理用户事件'
                }
              ]
            },
            {
              title: '根据 props 或 state 来更新 state ',
              id: 'Updating state based on props or state',
              concept: '如果一个值可以基于现有的 props 或 state 计算得出，不要把它作为一个 state，而是在渲染期间直接计算这个值',
            },
            {
              title: '缓存昂贵的计算 ',
              id: 'Caching expensive calculations',
              concept: '使用 useMemo Hook 缓存（或者说 记忆（memoize））一个昂贵的计算。',
              tips:'传入 useMemo 的函数会在渲染期间执行，所以它仅适用于 纯函数 场景'
            },
            {
              title: '当 props 变化时重置所有 state',
              id: 'Resetting all state when a prop changes',
              concept: '根据 props 或其他 state 来调整 state 都会使数据流更难理解和调试。总是检查是否可以通过添加 key 来重置所有 state，或者 在渲染期间计算所需内容,虽然这种方式比 Effect 更高效，但大多数组件也不需要它',
            },
            {
              title: '当 prop 变化时调整部分 state ',
              id: 'Adjusting some state when a prop changes ',
              concept: '你可以将 ref 指向任何值。但是，ref 最常见的用法是访问 DOM 元素。例如，如果你想以编程方式聚焦一个输入框，这种用法就会派上用场。当你将 ref 传递给 JSX 中的 ref 属性时，比如 <div ref={myRef}>，React 会将相应的 DOM 元素放入 myRef.current 中。'
            },
            {
              title: '在事件处理函数中共享逻辑',
              concept: '当你不确定某些代码应该放在 Effect 中还是事件处理函数中时，先自问 为什么 要执行这些代码。Effect 只用来执行那些显示给用户时组件 需要执行 的代码。',
              tips: '删除 Effect 并将共享的逻辑放入一个被两个事件处理程序调用的函数中'
            },
            {
              title: '发送 POST 请求',
              content: '当你决定将某些逻辑放入事件处理函数还是 Effect 中时，你需要回答的主要问题是：从用户的角度来看它是 怎样的逻辑。如果这个逻辑是由某个特定的交互引起的，请将它保留在相应的事件处理函数中。如果是由用户在屏幕上 看到 组件时引起的，请将它保留在 Effect 中'
            },
            {
              title: '链式计算 ',
              content: '尽可能在渲染期间进行计算，以及在事件处理函数中调整 state',
              tips: '在某些情况下，你 无法 在事件处理函数中直接计算出下一个 state。例如，试想一个具有多个下拉菜单的表单，如果下一个下拉菜单的选项取决于前一个下拉菜单选择的值。这时，Effect 链是合适的，因为你需要与网络进行同步。'
            },
            {
              title: "初始化应用 ",
              content: '如果某些逻辑必须在 每次应用加载时执行一次，而不是在 每次组件挂载时执行一次，可以添加一个顶层变量来记录它是否已经执行过了'
            },
            {
              title: '通知父组件有关 state 变化的信息',
              content: '“状态提升” 允许父组件通过切换自身的 state 来完全控制子组件。这意味着父组件会包含更多的逻辑，但整体上需要关心的状态变少了。每当你尝试保持两个不同的 state 变量之间的同步时，试试状态提升！'
            },
            {
              title: '将数据传递给父组件 ',
              content: '让父组件获取那些数据，并将其 向下传递 给子组件,数据从父组件流向子组件'
            },
            {
              title: '订阅外部 store',
              content: '有时候，你的组件可能需要订阅 React state 之外的一些数据。这些数据可能来自第三方库或内置浏览器 API。由于这些数据可能在 React 无法感知的情况下发变化，你需要在你的组件中手动订阅它们。这经常使用 Effect 来实现'
            },
            {
              title: '获取数据',
              content: '当你不得不编写 Effect 时，请留意是否可以将某段功能提取到专门的内置 API 或一个更具声明性的自定义 Hook 中，比如上面的 useData。你会发现组件中的原始 useEffect 调用越少，维护应用将变得更加容易'
            }
          ],
          summary: [
            '如果你可以在渲染期间计算某些内容，则不需要使用 Effect。',
            '想要缓存昂贵的计算，请使用 useMemo 而不是 useEffect。',
            '想要重置整个组件树的 state，请传入不同的 key。',
            '想要在 prop 变化时重置某些特定的 state，请在渲染期间处理。',
            '组件 显示 时就需要执行的代码应该放在 Effect 中，否则应该放在事件处理函数中。',
            '如果你需要更新多个组件的 state，最好在单个事件处理函数中处理。',
            '当你尝试在不同组件中同步 state 变量时，请考虑状态提升。',
            '你可以使用 Effect 获取数据，但你需要实现清除逻辑以避免竞态条件。'
          ]
        }
      },
      {
        key: 3,
        title: '响应式 Effects 的生命周期',
        id: 'Lifecycle of Reactive Effects',
        question: '响应式 Effects 的生命周期 ',
        detail: {
          description: 'Effects 与组件有不同的生命周期。组件可以挂载、更新或卸载。Effect 只能做两件事:开始同步某些内容,然后停止同步它。如果您的 Effect 依赖于随时间变化的 props 和 state,则此循环可以多次发生。React 提供了一个 lint 规则来检查您是否正确指定了 Effect 的依赖项。这使您的 Effect 与最新的 props 和 state 保持同步。',
          theory: [
            {
              title: 'Effect 的生命周期 ',
              id: 'The lifecycle of an Effect',
              steps: [
                ' Effects 挂载,重新挂载和卸载,而不是更新',
                ' 在挂载和重新挂载 Effect 时,都会运行 Effect 中的逻辑并指定一个清理函数',
                '在卸载组件时,将调用最终的清理函数来卸载 Effect',
                '为确保 Effect 与最新的依赖项 props/state 同步,请确保指定所有依赖项。否则,Effect 可能不会在需要时重新运行',
                '您可以在 Effect 中返回的清理函数内执行任何必要的“卸载”逻辑,例如取消订阅或清除定时器。'
              ]
            },
            {
              title: '访问另一个组件的 DOM 节点 ',
              id: 'Accessing another component’s DOM nodes',
              concept: '当你将 ref 放在像 <input /> 这样输出浏览器元素的内置组件上时，React 会将该 ref 的 current 属性设置为相应的 DOM 节点（例如浏览器中实际的 <input /> ）。但是，如果你尝试将 ref 放在 你自己的 组件上，例如 <MyInput />，默认情况下你会得到 null',
              tips: '在设计系统中，将低级组件（如按钮、输入框等）的 ref 转发到它们的 DOM 节点是一种常见模式。另一方面，像表单、列表或页面段落这样的高级组件通常不会暴露它们的 DOM 节点，以避免对 DOM 结构的意外依赖。'
            },
            {
              title: 'React 何时添加 refs ',
              id: 'When React attaches the refs',
              concept: '在 React 中，每次更新都分为 两个阶段：在 渲染 阶段， React 调用你的组件来确定屏幕上应该显示什么,在 提交 阶段， React 把变更应用于 DOM。',
            },
            {
              title: '用 flushSync 同步更新 state ',
              id: 'Flushing state updates synchronously with flushSync',
              concept: '在 React 中，state 更新是排队进行的。通常，这就是你想要的。但是，在这个示例中会导致问题，因为 setTodos 不会立即更新 DOM。因此，当你将列表滚动到最后一个元素时，尚未添加待办事项。这就是为什么滚动总是“落后”一项的原因。要解决此问题，你可以强制 React 同步更新（“刷新”）DOM。 为此，从 react-dom 导入 flushSync 并将 state 更新包裹 到 flushSync 调用中',

            },
            {
              title: '使用 refs 操作 DOM 的最佳实践 ',
              concept: 'Refs 是一个应急方案。你应该只在你必须“跳出 React”时使用它们。这方面的常见示例包括管理焦点、滚动位置或调用 React 未暴露的浏览器 API。如果你坚持聚焦和滚动等非破坏性操作，应该不会遇到任何问题。但是，如果你尝试手动修改 DOM，则可能会与 React 所做的更改发生冲突。'
            }
          ],
          summary: [
            'Refs 是一个通用概念，但大多数情况下你会使用它们来保存 DOM 元素。',
            '你通过传递 <div ref={myRef}> 指示 React 将 DOM 节点放入 myRef.current。',
            '通常，你会将 refs 用于非破坏性操作，例如聚焦、滚动或测量 DOM 元素。',
            '默认情况下，组件不暴露其 DOM 节点。 您可以通过使用 forwardRef 并将第二个 ref 参数传递给特定节点来暴露 DOM 节点。',
            '避免更改由 React 管理的 DOM 节点。',
            '如果你确实修改了 React 管理的 DOM 节点，请修改 React 没有理由更新的部分'
          ]
        }
      },
    ]
  }

}





