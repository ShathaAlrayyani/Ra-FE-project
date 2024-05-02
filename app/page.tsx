import { Header, AppSlider, VideoBg } from "./components";

export default function Home() {
  return (
    <main>
      <Header />
      <main className="appWrapper">
        {/* <VideoBg /> */}
        <AppSlider />
      </main>
    </main>
  );
}
