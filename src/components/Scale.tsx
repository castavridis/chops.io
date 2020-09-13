import React from 'react';
import Note from './Note';
import { PITCH, NEXT_PITCH, SCALES, INTERVALS } from '../utils/basics';

interface ScaleProps {
  pitch: PITCH;
  major?: boolean;
  minor?: boolean;
}

// function calculateInterval(root: number, comparator: number) {
//   return;
// }

function generateScale (root: PITCH, type: 'major' | 'minor' = 'major') {
  const pitches = Object.keys(PITCH).length / 2;
  const notes: JSX.Element[] = [<th key={-1}>Notes</th>];
  const intervals: JSX.Element[] = [<td key={-1}>Intervals</td>];
  const scale = SCALES[type];
  let scaleSemitones = 0;
  let pitchSemitones = 0;
  for (let i = 0; i <= pitches; i++) {
    const curr = (root + i) % pitches;
    const sign = (scaleSemitones < pitchSemitones) 
      ? 'flat'
      : (scaleSemitones > pitchSemitones)
        ? 'sharp'
        : 'natural' ;
    notes.push(<th key={i}><Note pitch={curr} accidental={sign} /></th>);
    intervals.push(<td key={i}>{INTERVALS[scaleSemitones]}</td>);
    // Increase steps
    scaleSemitones += scale[i];
    pitchSemitones += NEXT_PITCH[curr as PITCH];
  }
  return (
    <React.Fragment>
      {type} scale:
      <table>
        <thead>
          <tr>
            {notes}
          </tr>
        </thead>
        <tbody>
          <tr>
            {intervals}
          </tr>
        </tbody>
      </table>
      <br />
    </React.Fragment>
  );
}

const Scale: React.FC<ScaleProps> = ({
  pitch,
}) => {
  return (
    <div>
      <div>{ `Root note: ${PITCH[pitch]}.` }</div>
      {generateScale(pitch, 'major')}
      {generateScale(pitch, 'minor')}
      <hr />
    </div>
  );
};

export default Scale;
