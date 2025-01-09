import styles from './Filter.module.scss'
import { FC } from 'react';
import { IFilter } from '../../types/types'
import Input from '../UI/input/Input';
import Select from '../UI/select/Select'

type FilterProps = {
  filter: IFilter;
  setFilter: (event: IFilter) => void;
}

const Filter: FC<FilterProps> = ({filter, setFilter}) => {
  return (
    <div className={styles.container}>
      <Input 
          value={filter.query}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>{ setFilter({...filter, query: e.target.value})
        }}
          type='text'
          placeholder="Search..."
      />
      
      <Select defaultValue={"Sort"}
          value={filter.sort}
          onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
          options={[
            {value: 'title', name: 'By name'},
            {value: 'body', name: 'By description'}
          ]}
      />
    </div>
  )
}

export default Filter;