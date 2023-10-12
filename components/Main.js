import { Headline } from '../components/Headline';
import { Inter } from 'next/font/google';
import classes from './Main.module.css';
import { Links } from '../components/Links';

const inter = Inter({ subsets: ['latin'] });

export function Main(props) {
  return (
    <main className={`${classes.main} ${inter.className}`}>
      <Headline page={props.page} />

      <Links />
    </main>
  );
}
