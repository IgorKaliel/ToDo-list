
import styles from './App.module.css';
import { Header } from './components/Header';
import { Task } from './components/Task';

import './globals.css';

export default function App() {
  
  return(
    <>

      <Header />

      <div className={styles.wrapper}>

        <main>

          <Task onDeleteTask={() => {}}  task={''} />
        
        </main>
      </div>
    
    </>
  );
}