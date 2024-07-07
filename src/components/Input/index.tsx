import {
  useCallback,
  type ChangeEvent,
  type ChangeEventHandler,
  type ReactNode,
} from 'react';

import styles from './styles.module.css';
import { CloseOutlined } from '@ant-design/icons';

interface InputProps {
  height?: string;
  icon?: ReactNode;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  value: string;
  width?: string;
}

const Input = ({
  height = '64px',
  icon = null,
  onChange,
  placeholder = '',
  type = 'text',
  value,
  width = '100%',
}: InputProps) => {
  const handleChangeInput = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    },
    [onChange]
  );

  const handleClearInput = useCallback(() => {
    onChange('');
  }, [onChange]);

  return (
    <div className={styles.inputWrapper}>
      {icon}
      <input
        className={styles.input}
        onChange={handleChangeInput}
        placeholder={placeholder}
        style={{ height, width }}
        type={type}
        value={value}
      />
      {value && (
        <button
          className={styles.clearButton}
          type="button"
          onClick={handleClearInput}
        >
          <CloseOutlined />
        </button>
      )}
    </div>
  );
};

export default Input;
