import React from 'react';
import { Note } from '../../node_modules/tone/build/esm/core/type/Units';
import * as Tone  from 'tone';
import { FREQUENCIES, PITCH } from '../utils/basics';

interface NoteProps {
  accidental: 'flat' | 'natural' | 'sharp';
  pitch: PITCH;
}

const Note: React.FC<NoteProps> = ({
  accidental,
  pitch,
}) => {

  const freq = FREQUENCIES[pitch][accidental];
  const osc = new Tone.Oscillator({
    type: 'sine',
    frequency: freq,
    volume: -20,
  }).toDestination();
  const sign = (accidental === 'natural') 
    ? '♮'
    : (accidental == 'sharp')
      ? '♯'
      : '♭' ;

  const handleDown = () => { osc.start(); };
  const handleUp = () => { osc.stop(); };

  return (
    <button onMouseDown={handleDown} onMouseUp={handleUp}>
      {PITCH[pitch]}{sign}
    </button>
  );
};

export default Note;
