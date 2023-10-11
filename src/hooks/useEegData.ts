import { convertColumnsToRows, csvDataToArray } from 'utils/csv-parser';
import { getRecordingFile, getRecordings } from 'services/actions/recordings';
import { useCallback, useEffect, useState } from 'react';

import type { CancelToken } from 'axios';
import { RecordingsResponse } from 'types/recordings';
import axios from 'axios';

const WAVES_MULTIPLIER = 0.0447;

export const useEegData = () => {
  const [data, setData] = useState<RecordingsResponse>();
  const [waves, setWaves] = useState<number[][]>([]);
  const [qualities, setQualities] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchRecordings = useCallback(async (cancelToken: CancelToken) => {
    const response = await getRecordings(cancelToken);
    setData(response.data);
  }, []);

  useEffect(() => {
    const source = axios.CancelToken.source();
    fetchRecordings(source.token);
    return () => {
      source.cancel('Landing Component got unmounted');
    };
  }, [fetchRecordings]);

  useEffect(() => {
    try {
      setLoading(true);
      if (data?.recordings) {
        Object.values(data.recordings).forEach((value) => {
          Object.values(value).forEach((item) => {
            getRecordingFile(item).then(async (res) => {
              const isWaves = item.includes('waves');
              if (isWaves) {
                setWaves([...waves, ...[]]);
                return;
              }

              setQualities([...qualities, ...[]]);
            });
          });
        });
      }
    } finally {
      setLoading(false);
    }
  }, [data?.recordings]);

  const plotData: [] = [];

  return {
    data,
    waves,
    qualities,
    loading,
    plotData,
  };
};
