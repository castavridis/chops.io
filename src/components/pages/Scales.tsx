import React from 'react';
import Scale from '../Scale';
import { PITCH } from '../../utils/basics';

const ScalesPage: React.FC = () => {
  return (
    <section>
      <h3>Scales</h3>
      <Scale pitch={PITCH.A} />
      <Scale pitch={PITCH.B} />
      <Scale pitch={PITCH.C} />
      <Scale pitch={PITCH.D} />
      <Scale pitch={PITCH.E} />
      <Scale pitch={PITCH.F} />
      <Scale pitch={PITCH.G} />
    </section>
  );
};

export default ScalesPage;
