
import NavBar from "./NavBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {


  
  return (
    <div className="flex flex-col min-h-screen bg-white  pb-15">
      <div className="w-full flex-grow">
        <NavBar />

         
         
        <main className="flex-grow">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
