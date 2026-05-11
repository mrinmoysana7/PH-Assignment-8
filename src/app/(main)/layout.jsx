import Navbar from "@/components/shared/Navbar";

const LayoutPage = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      {children}
    </div>
  );
};

export default LayoutPage;
