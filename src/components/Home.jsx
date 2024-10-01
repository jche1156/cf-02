import App from './App';
import BaseLayout from './BaseLayout';
import NavBar from './NavBar';

export default function Home() {
  return (
    <BaseLayout>
      <main class="container">
        <NavBar />
        <App />
      </main>
    </BaseLayout>
  );
}
