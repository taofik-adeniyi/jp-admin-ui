"use client"

import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

type PortalProps = {
  children: ReactNode;
};

export const Portal = ({ children }: PortalProps) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        return () => setMounted(false);
    }, []);

    return mounted ? (
        <>{createPortal(children, document.getElementById("modals") as HTMLElement)}</>
    ) : null;
};


{/* <Portal
>
  <div className={styles.overflow}>
    <div className={styles.modal}>
      <div className={styles.header}>
        <h4>Lorem Ipsum</h4>
        <button onClick={handleModal} className={styles.removeButton}>
        <button className={styles.removeButton}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 384 512"
          >
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </button>
      </div>
      <div className={styles.body}>
        <p>
          Basically, React Portal is a powerful technique to create a
          first-class way to render children into a DOM (Document object
          modal) Node from outside of their parent component hierarchy.
        </p>
        <div className={styles.reactontent}>
          <h4>Industry's stand 1960s with the release</h4>
          <p>
            has been the industry's stand 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
          </p>
        </div>
        <div className={styles.reactontent}>
          <p>
            Lorem Ipsum is simply dummy text of the printing It has
            survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It
            was popularised in the 1960s with the release of Letraset
            sheets containing Lorem Ipsum passages, and more recently
          </p>
        </div>
        <div className={styles.reactontent}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  </div>
</Portal> */}