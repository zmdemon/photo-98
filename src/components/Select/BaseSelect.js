import 'antd/dist/antd.css';
import {Select} from 'antd';
import React from 'react';

export const BaseSelect = ({onSelectValueChange, optionItems, placeholder}) => {
    return (
        <Select
            placeholder={placeholder}
            onChange={onSelectValueChange}
            style={{width: 120}}
            defaultValue={null}
        >
            <Select.Option value={null}>All</Select.Option>
            {optionItems.map(i => {
                return <Select.Option key={i} value={i}>{i}</Select.Option>
            })}
        </Select>
    );
}
export default BaseSelect
