import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { AB_COUNT_COMMENT } from '@/components/my-const_forum';

export default function ABEditt() {
  const [data, setData] = useState({});

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const article_id = +router.query.article_id;
        const response = await fetch(AB_COUNT_COMMENT + "/" + article_id);
        const responseData = await response.json();

        if (responseData.success) {
          setData(responseData.row);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [router.query.article_id]);



  return (
    <>
      <div>
        <div>{data.count}</div>
      </div>
    </>
  );
}