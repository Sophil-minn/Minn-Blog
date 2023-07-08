import { createContext, useContext } from 'react';

const ThemeContext = createContext(null) as any;

export default function ContextDemo() {
  return (
    <ThemeContext.Provider value="dark">
      <Form />
    </ThemeContext.Provider>
  )
}

function Form() {
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
}

function Panel({ title, children }: any) {
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}

function Button({ children }: any) {
  const theme = useContext(ThemeContext) as any;
  const className = 'button-' + theme;
  return (
    <button className={className}>
      {children}:  {theme}
    </button>
  );
}
