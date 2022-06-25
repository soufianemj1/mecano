import React from "react";
import Landingpic from "../assets/Landingpic.png"
const LandingPage = () => {
  return (
    <div >
      <div class="hero h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse ">
    <img src={Landingpic} class="max-w-sm rounded-lg shadow-2xl" />
    <div >
      <h1 class="text-5xl font-bold">Bienvenue sur Mecano.ma</h1>
      <p class="py-6">Tu comptes acheter une voiture? mais tu ne veux pas risquer ton argent, tu veux un expert pour verifier la voiture ? est tu ne sais pas ou le trouver ? chez mecano.ma on fait tous ça pour vous.</p>
      <button class="btn btn-primary">Reservez un éxpert.</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default LandingPage;
