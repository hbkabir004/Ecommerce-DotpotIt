import React from "react";
import Breadcrumb from "../components/MyAccount/Breadcrumb";
import RegistrationForm from "../components/MyAccount/RegistrationForm";

function MyAccountPage() {
  return (
    <main className="flex flex-col">
      <section className="flex flex-col justify-center items-center px-20 pb-28 mt-6 w-full border border-t max-md:px-5 max-md:pb-14 max-md:mt-6 max-md:max-w-full">
        <Breadcrumb />
        <RegistrationForm />
      </section>
    </main>
  );
}

export default MyAccountPage;
