import { Inter } from 'next/font/google';
import classes from './Title.module.css';

const inter = Inter({ subsets: ['latin'] });

export function Title(props) {
  return (
    <div className={classes.title}>
      <p className={classes.text}>{props.title} pageです！</p>
    </div>
  );
}
