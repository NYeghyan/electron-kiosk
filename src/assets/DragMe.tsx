import { useRef, useEffect } from 'react';

function useDraggable() {
  const isClicked = useRef<boolean>(false);
  const coords = useRef<{ startX: number; startY: number; lastX: number; lastY: number }>({
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
  });

  const attachDraggable = (
    containerRef: React.RefObject<HTMLDivElement>,
    boxRef: React.RefObject<HTMLDivElement>
  ) => {
    useEffect(() => {
      if (!boxRef.current || !containerRef.current) return;

      const box = boxRef.current;
      const container = containerRef.current;

      const onMouseDown = (e: MouseEvent) => {
        isClicked.current = true;
        coords.current.startX = e.clientX;
        coords.current.startY = e.clientY;
      };

      const onMouseUp = () => {
        isClicked.current = false;
        coords.current.lastX = box.offsetLeft;
        coords.current.lastY = box.offsetTop;
      };

      const onMouseMove = (e: MouseEvent) => {
        if (!isClicked.current) return;

        const nextX = e.clientX - coords.current.startX + coords.current.lastX;
        const nextY = e.clientY - coords.current.startY + coords.current.lastY;

        if (box) {
          box.style.top = `${nextY}px`;
          box.style.left = `${nextX}px`;
        }
      };

      box.addEventListener('mousedown', onMouseDown);
      box.addEventListener('mouseup', onMouseUp);
      container.addEventListener('mousemove', onMouseMove);
      container.addEventListener('mouseleave', onMouseUp);

      const cleanup = () => {
        box.removeEventListener('mousedown', onMouseDown);
        box.removeEventListener('mouseup', onMouseUp);
        container.removeEventListener('mousemove', onMouseMove);
        container.removeEventListener('mouseleave', onMouseUp);
      };

      return cleanup;
    }, [containerRef, boxRef]);
  };

  return attachDraggable;
}

export default useDraggable;
