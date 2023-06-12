import { Breadcrumb } from 'antd'
import { BreadCrumbItemsProps } from '../../types'
import './index.scss';

export default function index({ items }: { items: BreadCrumbItemsProps[] }) {
  return (
    <div className='breadcrumb-root'>
      <Breadcrumb
        items={items}
      />
    </div>
  )
}
