// recoil
import { useRecoilValue, useRecoilState } from 'recoil';
import { worksState } from '@/lib/recoil';

// Get SaaSke Works Data from API
async function getData() {
  // 後々、APIからデータを取得するようにする
  // 一旦、mockからデータを取得して実装する
  const apps: apiResGetApps = await import('@/mock/apps.json');
  // worksData型に変換した後、worksDataListに格納する OR 都合の良いAPIを開発する
  // 一旦、ドンピシャなJSONを定義してしまう
  const API: apiResGetRecords = await import('@/mock/API.json');
  const BIRTHDAY: apiResGetRecords = await import('@/mock/BIRTHDAY.json');
  const BOOKMARKER: apiResGetRecords = await import('@/mock/BOOKMARKER.json');
  const CAMP: apiResGetRecords = await import('@/mock/CAMP.json');
  const PERSON: apiResGetRecords = await import('@/mock/PERSON.json');
  const REPORT: apiResGetRecords = await import('@/mock/REPORT.json');
  const SCHEDULE: apiResGetRecords = await import('@/mock/SCHEDULE.json');
  const STORE: apiResGetRecords = await import('@/mock/STORE.json');
  const TASK: apiResGetRecords = await import('@/mock/TASK.json');
  const worksDataList = [];
  return '';
}

export default async function Page() {
  return <h1>Hello, Next.js!</h1>;
}
