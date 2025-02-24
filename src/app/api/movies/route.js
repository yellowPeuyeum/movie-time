import { NextResponse } from 'next/server';
import { matchSorter } from 'match-sorter';
import { movies } from '../_data/movies';

export async function GET(req) {
  const searchParams = req.nextUrl.searchParams;
  const title = searchParams.get('q');
  const category = searchParams.get('c');
  const id = searchParams.get('id');

  let resData = movies;

  if (title) {
    resData = matchSorter(resData, title, { keys: ['Title'] });
  }

  if (category) {
    resData = matchSorter(resData, category, { keys: ['Genre'] });
  }

  if (id) {
    resData = resData?.find(movie => movie._id === id) ?? {};
  }

  return NextResponse.json(resData, { status: 200 });
}
