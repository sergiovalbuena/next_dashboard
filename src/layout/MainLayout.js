import Header from "@/components/Header";
import Nav from "@/common/Nav";

export default function MainLayout({ children }) {
  return (
    <>
      <div className="min-h-full">
        <Header />
        <Nav />
        <main>
          <div className="">{children}</div>
        </main>
      </div>
    </>
  );
}
