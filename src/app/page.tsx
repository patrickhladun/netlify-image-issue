import type { NextPage } from 'next';

import Image from 'next/image';

const experienceYears = new Date().getFullYear() - 2012;

const Home: NextPage = () => {
  return (
    <Image src="/assets/images/example.jpg" alt="Example" width={400} height={400} />
  );
};

export default Home;
