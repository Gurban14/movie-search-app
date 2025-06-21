import styles from './Button.module.css';

function Button({ children, className = '', ...props }) {
  return (
    <button
      className={`${styles.button} bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;