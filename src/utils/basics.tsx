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
}

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
  'P8'
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
}

enum SYMBOLS {
  sharp,
  natural,
  flat,
}

export {
  PITCH,
  SCALES,
  STEP,
};
