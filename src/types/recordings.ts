export type RecordingsResponse = {
  numRecordings: number;
  recordings: RecordingList;
};

export type RecordingList = {
  [key: string]: { waves: string; quality: string };
};
