export const code1 = `
// 推荐：
import Footer from './Footer';
// 不推荐：
import Footer from './Footer/index';`;

export const code2 = `
i// 推荐：
export default function MyComponent() {
}
// 不推荐：
export default React.Component({
displayName: 'MyComponent',
});`;
export const code3 = `const getLocationPermission = () => {}
`;
export const code4 = `// has的使用场景，例如
const hasLocationPermission = ?
// 有没有定位权限
const hasUserInfo = ?
// 有没有用户信息
...
// is 的使用场景
const isShow = ?
// 是否（展示/显示)
const isTiemout = ?
// 是否超时
...
`;
export const code5 = `
// 小驼峰
const getUserInfo
// 大驼峰
const GetUserInfo
// 下划线
const _getUserInfo
`;
export const code6 = `
const n = ?							// 无意义的命名
const nError = ?				// 不明确的命名
const wgcComponents = ? // 不明确的命名，或者就你的团队能看懂，一旦有人员变动维护就会困难
const scid = ?					// 不能用中文，也不能用中文缩写  sc （删除）`;
export const code7 = `const DAY_MILLI_SECOND_SUM = ?`;
export const code8 = `
// by： 通过
const aid = getUserAid()
// 这段是获取用户 aid ， 使用 get user aid， 无可厚非，但有时候我们并不需要去从用户信息中拿，而是直接从本地拿。
// 此时就可以加上 by 了， 并且语义表现上也会丰富
const aid = getAidByLocal(); // 通过本地获取 Aid
const aid = getAidByUserInfo(); // 通过用户信息获取 Aid

`;
export const code9 = `
MyComponent
// 属性名称
onClick
// 样式属性
backgroundColor`;
export const code10 = `// Good
<Component />
// Bad
<Component></Component>
`;
export const code11 = `
// 推荐：
<Component
  bar="bar"
  baz="baz" 
/>
// 不推荐：
<Component
  bar="bar"
  baz="baz" />`;
export const code12 = `<Foo />
// 不推荐
<Foo/>

<Foo                 />

<Foo
 />

`;
export const code13 = `
// 推荐
render() {
    return (
      <MyComponent className="long body" foo="bar">
        <MyChild />
      </MyComponent>
    );
  }
// 不推荐
render() {
    return <MyComponent className="long body" foo="bar">
             <MyChild />
           </MyComponent>;
  }`;
export const code14 = `
// 推荐
<Foo
  superLongParam="bar"
  anotherSuperLongParam="baz"
/>

// 如果组件的属性可以放在一行（一个属性时）就保持在当前一行中
<Foo bar="bar" />

// 多行属性采用缩进
<Foo
  superLongParam="bar"
  anotherSuperLongParam="baz"
>
  <Quux />
</Foo>

// 不推荐
<Foo superLongParam="bar"
     anotherSuperLongParam="baz" />
`;
export const code15 = `
// 推荐：
<Foo bar="bar" />
<Foo style={{ left: '20px' }} />

// 不推荐
<Foo bar='bar' />
<Foo style={{ left: "20px" }} />
`;
export const code16 = `
// 推荐
{todos.map(todo => (
  <Todo
    {...todo}
    key={todo.id}
  />
))}
// 不推荐
{todos.map((todo, index) =>
  <Todo
    {...todo}
    key={index}
  />
)}
`;
export const code17 = `
// 推荐
const OtherComponent = React.lazy(() => import('./OtherComponent'));
// 不推荐
import OtherComponent from './OtherComponent';
`;
export const code18 = `
const Comp = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
      setLoading(true);
      queryData()
          .then((response) => {
              setData(response);
          })
          .catch((error) => {
              console.error(error);
          })
          .finally(() => {
              setLoading(false);
          });
  });
  
  if (loading) return "loading...";
  
  return <div>{data.text}</div>;
}
`;
export const code19 = `
const Comp = () => {
  const { data, loading } = useQueryData();
  
  if (loading) return "loading...";
  
  return <div>{data.text}</div>;
};`;
export const code20 = `
const DAY_MILLI_SECOND_SUM = ?`;
export const code21 = `
/* 常规写法和BEM写法相同 */
.list   `;
export const code22 = `
/* 常规写法 */
.list{}
.list .item{}

/* BEM写法 */
.list{}
.list__item{}`;
export const code23 = `
<ul class="xxx">
    <li class="xxx__item">第一项
        <div class="xxx__product-name">我是名称</div>
        <span class="xxx__ming-zi-ke-yi-hen-chang">看类名</span>
        <a href="#" class="xxx__link">我是link</a>
    <li>
    <li class="xxx__item xxx__item_current">第二项 且 当前选择项
        <div class="xxx__product-name">我是名称</div>
        <a href="#" class="xxx__item-link">我是link</a>
    <li>
    <li class="xxx__item xxx__item_hightlight">第三项 且 特殊高亮
         <div class="xxx__product-name">我是名称</div>
        <a href="#" class="xxx__item-link">我是link</a>
    <li>
</ul>`;
export const code24 = `
.xxx{}
.xxx__item{}
.xxx__item_hightlight{}
.xxx__product-name{}
.xxx__link{}
.xxx__ming-zi-ke-yi-hen-chang{}

// 嵌套写法
.xxx__item_current{
    .xxx__link{}
}`;
export const code25 = `
/* 常规写法 */
.list{}
.list .item{}

/* BEM写法 */
.list{}
.list__item{}`;
export const code26 = `
<section class="comments"> 
    <h2 class="comments__title"></h2> 
    <article class="comments__comment"> 
        <h3 class="comments__comment-title"></h3> 
    </article> 
    <article class="comments__comment"> 
        <h3 class="comments__comment-title"></h3> 
    </article> 
    <!-- ... --> 
</section>`;
