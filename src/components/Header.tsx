import { BiPlusCircle } from 'react-icons/bi';
import styles from './Header.module.css';

import Logo from '../assets/logo.png';
import { FormEvent } from 'react';

export function Header() {

  function handleAddTask(event: FormEvent) {
    event.preventDefault();

  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <img src={Logo} alt="Logo" />
        </div>
        <form onSubmit={handleAddTask} className={styles.addTaskCreate}>
            <input 
              type="text"
              placeholder="Adicione uma nova tarefa"
            />
            <button>
              Criar 
              <BiPlusCircle size={20}/>
            </button>
          </form>
      </header>
    </>
  )
}