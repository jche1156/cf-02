import BaseLayout from './BaseLayout';
import NavBar from './NavBar';
import TechTable from "./TechTable";
import Acknowledgements from "./Acknowledgements";

export default function Home() {
  return (
    <BaseLayout>
      <main class="container">
        <NavBar />
        <h1>About This Demo</h1>
        <TechTable />
        <Acknowledgements />
      </main>
    </BaseLayout>
  );
}
