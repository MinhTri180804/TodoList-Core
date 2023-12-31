import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { prioritiesOptionFilter, searchTextFilter, statusOptionFilter } from '../../redux/actions';

const { Search } = Input;

export default function Filters() {
  const dispatch = useDispatch();
  const [searchFilter, setSearchFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState([]);
  
  const handleChangeSearchFilter = (e) => {
    const value = e.target.value;
    setSearchFilter(value);
    dispatch(searchTextFilter(value));
  }

  const handleChangeStatusFilter = (e) => {
    const value = e.target.value;
    setStatusFilter(value);
    dispatch(statusOptionFilter(value))
  }

  const handleChangePriorityFilter = (e) => {
    setPriorityFilter(e);
    dispatch(prioritiesOptionFilter(e));
  }
  return (
    <Row justify='center'>
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search placeholder='input search text' value={searchFilter} onChange={handleChangeSearchFilter}/>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={statusFilter} onChange={handleChangeStatusFilter}>
          <Radio value='All'>All</Radio>
          <Radio value='Completed'>Completed</Radio>
          <Radio value='Todo'>To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode='multiple'
          allowClear
          placeholder='Please select'
          style={{ width: '100%' }}
          value={priorityFilter}
          onChange={handleChangePriorityFilter}
        >
          <Select.Option value='High' label='High'>
            <Tag color='red'>High</Tag>
          </Select.Option>
          <Select.Option value='Medium' label='Medium'>
            <Tag color='blue'>Medium</Tag>
          </Select.Option>
          <Select.Option value='Low' label='Low'>
            <Tag color='gray'>Low</Tag>
          </Select.Option>
        </Select>
      </Col>
    </Row>
  );
}
