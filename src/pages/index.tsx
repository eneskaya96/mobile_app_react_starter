import { ReactElement } from 'react';

import ItemList from '@/components/item-list/ItemList';
import { ProtectedLayout } from '@/components/layouts';

import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <ItemList />
    </>
  );
};

export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
  return <ProtectedLayout>{page}</ProtectedLayout>;
};
