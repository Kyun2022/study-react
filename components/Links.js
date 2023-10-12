import Link from 'next/link';
import classes from './Links.module.css';

const ITEMS = [
  {
    href: 'https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
    title: 'Docs ',
    text: 'Learn about Next.js in an interactive course with&nbsp;quizzes!!',
  },
  {
    href: 'https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
    title: 'Learn ',
    text: 'Learn about Next.js in an interactive course with&nbsp;quizzes!',
  },
  {
    href: 'https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
    title: 'Templates ',
    text: 'Discover and deploy boilerplate example Next.js&nbsp;projects.',
  },
  {
    href: 'https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
    title: 'Deploy ',
    text: 'Instantly deploy your Next.js site to a shareable URL with&nbsp;Vercel.',
  },
];

export function Links() {
  return (
    <>
      <div className={classes.grid}>
        {ITEMS.map((item) => {
          return (
            <a
              key={item.href}
              href={item.href}
              className={classes.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>
                {item.title}
                <span>&gt;</span>
              </h2>
              <p>{item.text}</p>
            </a>
          );
        })}
      </div>
    </>
  );
}
