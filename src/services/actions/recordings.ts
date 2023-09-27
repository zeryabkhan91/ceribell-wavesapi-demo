import type { CancelToken } from 'axios';
import type { RecordingsResponse } from 'types/recordings';
import api from 'services/api';

export const GET_RECORDINGS_ENDPOINT = '/recordings/index.json';

const getRecordings = (cancelToken: CancelToken) =>
  api.get<RecordingsResponse>(GET_RECORDINGS_ENDPOINT, { cancelToken });

const getRecordingFile = (link: string) => api.get(`/recordings/${link}`);

export { getRecordings, getRecordingFile };
