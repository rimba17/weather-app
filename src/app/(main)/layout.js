import Header from "@/components/header/Header";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="mx-auto max-w-container mt-28 px-4 lg:px-20 lg:py-8">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
