import Banner from "../components/Banner.tsx";
import Navbar from "../components/Navbar.tsx";
import Row from "../components/Row";
import requests from "../request.ts"; // request is an object

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Row title={"Trenting now"} fetchUrl={requests?.fetch_trending} />
      <Row title={"top rated"} fetchUrl={requests?.fetch_netflix_originals} />
      <Row title={"popular"} fetchUrl={requests?.fetch_most_popular_movies} />
      <Row title={"comedy movies"} fetchUrl={requests?.fetch_action_movies} />
      <Row title={"comedy movies"} fetchUrl={requests?.fetch_comedy_movies} />
      <Row title={"horror movies"} fetchUrl={requests?.fetch_horror_movies} />
      <Row
        title={"romantic movies"}
        fetchUrl={requests?.fetch_romantic_movies}
      />
      <Row
        title={"documentory movies"}
        fetchUrl={requests?.fetch_documentries_movies}
      />
    </>
  );
};

export default Home;
