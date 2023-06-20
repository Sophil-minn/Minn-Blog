
import { Checkbox, Col, Form, Input, Radio, Row, Select } from 'antd';
import { memo, useCallback, useMemo } from 'react';

const FormByConfig = (props: Record<string, any>) => {
  const {
    initialValues = {},
    items,
    form,
    optionsMap = {},
    spans = 12,
    onValuesChange = () => { },
    layout = 'vertical',
  } = props;
  const cols = useMemo(() => {
    return items?.map((item: Record<string, any>) => {
      const {
        label,
        value,
        disabled = false,
        required = true,
        type = 'input',
        showSearch = false,
        placeholder,
        tooltip,
      } = item;
      let colItem;
      const options =
        (type === 'select' && optionsMap?.[value]) || item?.options;
      const onChange = optionsMap?.[`${value}OnChange`];
      // 是否有子元素
      const hasChildren = optionsMap?.[`${value}Children`];
      const filterOption = true;
      const span = spans ? spans : 12;

      switch (type) {
        case 'select':
          if (hasChildren) {
            colItem = (
              <Select
                placeholder={`请选择${label}`}
                showSearch={showSearch}
                filterOption={filterOption}
                onChange={onChange}
                disabled={disabled}
              >
                {options?.map((i: { label: string, value: string }) => (
                  <Select.Option key={i?.value} value={i?.value}>
                    {i.label}
                    <span style={{ color: '#888' }}>({i?.value})</span>
                  </Select.Option>
                ))}
              </Select>
            );
          } else {
            colItem = (
              <Select
                placeholder={`请选择${label}`}
                options={options}
                showSearch={showSearch}
                filterOption={filterOption}
                onChange={onChange}
                disabled={disabled}
              />
            );
          }
          break;
        case 'radio':
          colItem = (
            <Radio.Group value={value} disabled={disabled} options={item?.options || []} />
          );
          break;
        case 'checkbox':
          colItem = (
            <Checkbox.Group options={item?.options || []} onChange={onChange} />
          )
          break;
        default:
          const placeholderText = placeholder ? placeholder : `请输入${label}`;
          colItem = (
            <Input placeholder={`${placeholderText}`} disabled={disabled} />
          );
      }

      return (
        <Col span={span}>
          <Form.Item
            label={label}
            tooltip={tooltip}
            name={value}
            key={value}
            rules={[{ required, message: `${label}必填` }]}
          >
            {colItem}
          </Form.Item>
        </Col>
      )
    });
  }, [items, optionsMap, spans]);

  return (
    items?.length > 0 ? (
      <Form
        form={form}
        initialValues={initialValues}
        layout={layout}
        // onFinish={onFinish}
        onValuesChange={onValuesChange}
      >
        <Row gutter={80} style={{ justifyContent: 'space-between' }}>
          {cols}

        </Row>
      </Form>
    ) : null
  )
};

export default memo(FormByConfig);
