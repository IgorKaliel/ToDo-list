import styles from './Task.module.css';

interface TaskProps {
  task: string;
  onDeleteTask: (task: string) => void;
}

export function Task({task, onDeleteTask}: TaskProps) {

  return (
    <div className={styles.task}>
      <div className={styles.taskBox}>
        <div className={styles.taskContent}>
          <header>
            <p className={styles.blue_text}>Tarefas criadas <span className={styles.radius}>5</span></p>
            <p className={styles.purple_text}>Concluídas <span className={styles.radius}>2 de 5</span></p>
          </header>
          <div className={styles.taskList}>
            <label>
              <div>
                <input type="checkbox" />
              </div>

              Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
              <button>
                Trash
              </button>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}