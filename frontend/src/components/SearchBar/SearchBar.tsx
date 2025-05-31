'use client';
import { Input } from 'antd';
import styles from './searchBar.module.scss';

const SearchBar = () => (
  <div className={styles.searchBarWrapper}>
    <Input.Search
      placeholder="Search for apartments"
      enterButton
      onSearch={(value) => console.log(value)}
    />
  </div>
);

export default SearchBar;
