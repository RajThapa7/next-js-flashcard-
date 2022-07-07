import {useRouter} from 'next/router'
export default function DetailsNews() {
const router = useRouter();
const newsId = router.query.newsId;
  return (
      <h1>Something is important!!!</h1>
    )
  }
  