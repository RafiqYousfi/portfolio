import React from "react";

const Projects = () => {
  return (
    <div
      id="projects"
      className="min-h-screen w-full flex flex-col items-center justify-center gap-20 p-10 md:p-16 xl:px-32"
    >
      <h1 className="text-center text-5xl font-light">Projects</h1>

      <div className="grid grid-cols-1 lg:grid-col-2 xl:grid-cols-3 gap-5">
        <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-teal-500 rounded-lg hover:bg-teal-50">
          <h1 className="text-3xl font-semibold">Bakery</h1>
          <h3 className="text-xl text-gry-700">2025</h3>
          <p className="text-sm text-gray-600">The Bakery is a website on which you can order bread for your shop. With PHP and SQL it goes to the database where it shows how much is in stock.
          </p>
        </div>

        <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-teal-500 rounded-lg hover:bg-teal-50">
          <h1 className="text-3xl font-semibold">Escape room</h1>
          <h3 className="text-xl text-gry-700">2025</h3>
          <p className="text-sm text-gray-600">The Escaperoom is a game where you need to solve mysteries where you get 10 minutes to solve them.
          This is game is made with Javascript.</p>
        </div>

        <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-teal-500 rounded-lg hover:bg-teal-50">
          <h1 className="text-3xl font-semibold">LetPeopleWork</h1>
          <h3 className="text-xl text-gry-700">2026</h3>
          <p className="text-sm text-gray-600">LetPeopleWork is a website we made for a customer with a group of three people. We made a recruitment website for employers or employees.</p>
        </div>

        <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-teal-500 rounded-lg hover:bg-teal-50">
          <h1 className="text-3xl font-semibold">Practice exam</h1>
          <h3 className="text-xl text-gry-700">2026</h3>
          <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, iste earum delectus nulla aperiam eum excepturi perspiciatis ipsam dicta consequuntur ex doloribus corporis dignissimos nihil odit rem blanditiis numquam nemo?</p>
        </div>

      </div>
    </div>
  );
};

export default Projects;
