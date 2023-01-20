import { Sidebar } from './Sidebar/Sidebar';

import css from './Layout.module.css';

export const Layout = ({ children }) => {
  return (
    <>
      <header className={css.header}>
        <Sidebar />
      </header>
      <main>
        <div>{children}</div>
      </main>
    </>
  );
};
