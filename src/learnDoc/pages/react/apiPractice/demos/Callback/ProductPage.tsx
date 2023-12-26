import { Checkbox, Divider, Spin, Typography } from 'antd';
import { Suspense, lazy, useCallback, useEffect, useState } from 'react';
import './index.scss';

const ShippingForm = lazy(() => import('./ShippingForm'));

const { Paragraph } = Typography;

export default function ProductPage({ productId, referrer }: any) {
  const [isDark, setIsDark] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const onChange = useCallback((e: any) => setIsDark(e.target.checked), []);
  const handleSubmit = useCallback((orderDetails: any) => {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }, [productId, referrer]);

  useEffect(() => {
    setTimeout(() => {
      setShowForm(true);
    }, 500)
  }, [])


  return (
    <div>
      <p><b>Note: <code>ShippingForm</code> is artificially slowed down!</b></p>
      <Paragraph>
        这段代码使用 performance.now() 来获取当前的高精度时间戳,并在 500ms 的时间间隔内不执行任何操作,以模拟极慢的代码执行。
        performance.now() 返回的是一个以毫秒为单位的高精度时间戳,可以用来精确衡量代码的执行时间。
        这里我们获取了开始时间 startTime,然后进入一个空循环,循环体中的代码不执行任何有意义的操作,只是单纯的消耗时间。
        每次循环,我们会重新获取当前时间戳,并计算与 startTime 的差值。只要这个差值小于 500ms,我们就继续循环。
        这种方式可以 "阻塞" JavaScript 主线程达 500ms,从而模拟一段极其耗时的代码执行过程。
        这可以用于测试应用在主线程被长时间阻塞时的表现,例如:
        - UI / UX 是否符合预期
        - 过长任务是否会影响交互响应度
        - 资源是否会在主线程空闲时被合理利用
        - 等等
        类似的技术在性能测试和调试方面有比较广泛的应用。通过人为模拟各种时间点的任务执行,可以全面测试应用对各种场景的适应性。
        当然,这只是一个简单的示例。在实际的性能测试中,需要模拟更加真实的场景,而不仅仅是单纯的空循环。例如可以在循环体中执行一些计算密集型任务来模拟 CPU 负载,也可以设置定时器或发送 XHR 请求来模拟 IO 行为。
        通过适当的设置和组合,可以达到较高的模拟真实度,更好地检验应用的健壮性。
        所以,本示例主要目的是演示如何使用 performance.now() 来人为模拟和控制代码的执行时长,以便进行相应的测试和调试工作。在实践中,需要根据具体的测试场景选择更加适合的方式来实现。
      </Paragraph>
      <div className={isDark ? 'dark' : 'light'}>
        <label>
          <Checkbox
            type="checkbox"
            checked={isDark}
            onChange={onChange}
          />
          Dark mode
        </label>
        <Divider />
        <Suspense fallback={<Spin tip="loading ShippingForm" />}>
          {showForm ? <ShippingForm onSubmit={handleSubmit} /> : <Spin tip="loading ShippingForm" />}
        </Suspense>
      </div>
    </div>
  );
}

function post(url: string, data: any) {
  // Imagine this sends a request...
  console.log('POST /' + url);
  console.log(data);
}
