import NavbarComponent from "../../../../components/NavbarComponent";
import ProfileUserComponent from "../../../../components/ProfileUserComponent";

export const metadata = {
  title: "Profile",
};
export default function Profile({
  children,
}: {
  children: React.ReactNode;
}) {
  const colorNavbarOne: string = "bg-gray-300";
  const colorNavbarTwo: string = "bg-gray-300";
  return (
    <>
      <NavbarComponent
        colorNavbarOne={colorNavbarOne}
        colorNavbarTwo={colorNavbarTwo}
      />
     <ProfileUserComponent/>
</>
  );
}
