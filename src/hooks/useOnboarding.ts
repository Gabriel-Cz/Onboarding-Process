import { useState, useEffect } from 'react';
import mockData from '@/assets/static/onboarding.mock';
import model from '@/models/onboarding.model';

type MockType = typeof mockData;

export default function useOnboarding() {
  const [data, setData] = useState<MockType>(mockData);
  const [error, setError] = useState<unknown>();

  const onUpdate = async (body: any) => {
    try {
      const res = await model.update(body);
      const json = res.json() as any;
      setData(json.data);
    } catch (error) {
      setError(error);
    }
  }

  const getModel = async () => {
    try {
      const res = await model.get();
      const json = res.json() as any;
      setData(json.data);
    } catch (error) {
      setError(error);
    }
  }

  useEffect(() => {
    getModel();
  }, [])
  return {
    data,
    error,
    onUpdate
  }
}