/**
 * Representation of frequency to human ear
 * Pitches can be represented in different octaves
 * In the US, common theory uses 8 pitches
 */
enum PITCH {
  A,
  B,
  C,
  D,
  E,
  F,
  G
}

// https://www.intmath.com/trigonometric-graphs/music.php
const FREQUENCIES: Record<PITCH, any> = {
  [PITCH.A]: {
    flat: 207.65,
    natural: 220,
    sharp: 233.08,
  },
  [PITCH.B]: {
    flat: 233.08,
    natural: 246.94,
    sharp: 261.63,
  },
  [PITCH.C]: {
    flat: 246.94,
    natural: 261.63, // Middle C
    sharp: 277.18,
  },
  [PITCH.D]: {
    flat: 277.18,
    natural: 293.66,
    sharp: 311.13,
  },
  [PITCH.E]: {
    flat: 311.13,
    natural: 329.63,
    sharp: 349.23,
  },
  [PITCH.F]: {
    flat: 329.63,
    natural: 349.23,
    sharp: 369.99,
  },
  [PITCH.G]: {
    flat: 369.99,
    natural: 392,
    sharp: 415.3,
  },
};

/**
 * Semitone steps between note and nearest neighbor
 */
enum STEP {
  half = 1, // 1 step
  whole, // 2 steps
}

/**
 * Distance from a natural note to the next natural note
 */
const NEXT_PITCH: Record<PITCH, STEP> = {
  [PITCH.A]: STEP.whole,
  [PITCH.B]: STEP.half,
  [PITCH.C]: STEP.whole,
  [PITCH.D]: STEP.whole,
  [PITCH.E]: STEP.half,
  [PITCH.F]: STEP.whole,
  [PITCH.G]: STEP.whole,
};

/**
 * There are 12 semitones that represent the spectrum 
 * of pitch between each octave, intervals are relative to
 * the first note of a musical scale
 */
const INTERVALS: string[] = [
  '1',
  'm2',
  'M2',
  'm3',
  'M3',
  'P4',
  'Tri-tone',
  'P5',
  'm6',
  'M6',
  'm7',
  'M7',
  'P8',
];

enum STAFF_COMPONENT {
  line,
  space,
  note,
  ledgerLine
}

const TREBLE_CLEF: Record<number, PITCH>[] = [
  { [STAFF_COMPONENT.line]: PITCH.E },
  { [STAFF_COMPONENT.space]: PITCH.F },
  { [STAFF_COMPONENT.line]: PITCH.G },
  { [STAFF_COMPONENT.space]: PITCH.A },
  { [STAFF_COMPONENT.line]: PITCH.B },
  { [STAFF_COMPONENT.space]: PITCH.C },
  { [STAFF_COMPONENT.line]: PITCH.D },
  { [STAFF_COMPONENT.space]: PITCH.E },
  { [STAFF_COMPONENT.line]: PITCH.F },
];

const TRIAD: string[] = [
  'root', // one
  'third', // natural on minor/major
  'fifth', // perfect
];

/**
 * SCALES are currently based on natural major and minor scales
 * they follow traditional pattern of semitones between notes
 */
const SCALES: Record<string, STEP[]> = {
  major: [
    STEP.whole,
    STEP.whole,
    STEP.half,
    STEP.whole,
    STEP.whole,
    STEP.whole,
    STEP.half,
  ],
  minor: [
    STEP.whole,
    STEP.half,
    STEP.whole,
    STEP.whole,
    STEP.half,
    STEP.whole,
    STEP.whole,
  ],
};

enum SYMBOLS {
  sharp,
  natural,
  flat,
}

export {
  FREQUENCIES,
  INTERVALS,
  NEXT_PITCH,
  PITCH,
  SCALES,
  STEP,
};
