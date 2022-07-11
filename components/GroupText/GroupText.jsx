import { Text } from '@nextui-org/react';
import React from 'react';
import styles from './GroupText.module.scss';

const GroupText = ({ title, text, idTest }) => ( 
    <div className={styles.group}>
    <Text css={{ marginRight: "$5" }} h5>
      {title}
    </Text>
    <span data-testid={idTest}>{text}</span>
  </div>
);
 
export default GroupText;