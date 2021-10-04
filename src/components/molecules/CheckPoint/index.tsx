import React from 'react';
import CircleBox from '~/components/atoms/CircleBox';

interface PointProps {
  check: boolean,
  text: string,
  onCircleClick(bool: boolean): void
  onXClick(): void
}

const CheckPoint = ({ text, check, onCircleClick, onXClick }: PointProps) => {
  return (
    <div className='flex items-center justify-between gap-4'>
      <CircleBox check={check} onClick={onCircleClick} />
      <p className='flex-1'>{text}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="h-8 w-8 cursor-pointer"
        viewBox="0 0 16 16"
        onClick={onXClick}
      >
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
      </svg>
    </div>
  );
};

export default CheckPoint;