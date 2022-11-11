import cn from 'clsx';

import styles from './Input.module.scss';

const Input = ({ errorMessage, ...props }) => {
  return (
    <div className={cn(styles.root, { [styles.noMessage]: !errorMessage })}>
      <input
        className={cn(styles.input, { [styles.error]: errorMessage })}
        {...props}
      />
      {errorMessage && (
        <span className={cn({ [styles.errorMessage]: errorMessage })}>
          {errorMessage}
        </span>
      )}
    </div>
  );
};

export default Input;
