import { redirect } from 'next/navigation';

export const Home = () => {
  redirect('/welcome');
}
export default Home;
