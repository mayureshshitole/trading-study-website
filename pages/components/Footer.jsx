const Footer = () => {
  return (
    <footer className=" flex justify-center items-center border-t-2 rounded-t-xl">
      <a
        href="https://www.linkedin.com/in/mayuresh-s-580a36105/"
        target="_blank"
        className=" flex justify-between items-center font-semibold text-center space-x-4"
      >
        <h5 className="text-gray-500 text-lg">Copyright 2021</h5> <br />
        <h4 className=" ml-3 text-gray-700 hover:text-blue-400 transition duration-700 ease-in-out  uppercase">
          Mayuresh Shitole
        </h4>
      </a>
    </footer>
  );
};

export default Footer;
