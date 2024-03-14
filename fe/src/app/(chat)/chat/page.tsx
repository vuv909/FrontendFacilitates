import ChatComponent from "../../../../components/ChatComponent";
import NavbarComponent from "../../../../components/NavbarComponent";


export const metadata = {
  title: "Chat",
};
export default function Chat({
  children,
}: {
  children: React.ReactNode;
}) {
  const colorNavbarOne: string = "bg-gray-300";
  const colorNavbarTwo: string = "bg-gray-300";
  return (
    <div className="overflow-x-hidden">
      <NavbarComponent
        colorNavbarOne={colorNavbarOne}
        colorNavbarTwo={colorNavbarTwo}
      />
      <div className="mt-20 w-auto h-max"> <ChatComponent /></div>
    
</div>
  );
}
