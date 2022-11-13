import { Grid, Heading, Skeleton } from "@chakra-ui/react";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Productonepage from "./Productonepage";

function Productpage() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setLoading(false);
      });
  }, []);
  const handleCart = (i) => {
    console.log(i);
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <Heading
          fontFamily={"Brush Script MT, Brush Script Std, cursive"}
          my="55px"
          textAlign={"center"}
        >
          Product Page
        </Heading>
        <Grid w="90%" m="auto" templateColumns={"repeat(4, 1fr)"} gap="20px">
          <Skeleton height="220px" />
          <Skeleton height="220px" />
          <Skeleton height="220px" />
          <Skeleton height="220px" />
          <Skeleton height="220px" />
          <Skeleton height="220px" />
          <Skeleton height="220px" />
          <Skeleton height="220px" />
          <Skeleton height="220px" />
          <Skeleton height="220px" />
          <Skeleton height="220px" />
          <Skeleton height="220px" />
          <Skeleton height="220px" />
          <Skeleton height="220px" />
          <Skeleton height="220px" />
          <Skeleton height="220px" />
        </Grid>
        <Footer />
      </>
    );
  }

  return (
    <div>
      <Navbar />
      <Heading
        fontFamily={"Brush Script MT, Brush Script Std, cursive"}
        my="55px"
        textAlign={"center"}
      >
        Product Page
      </Heading>
      <Grid w="90%" m="auto" templateColumns={"repeat(4, 1fr)"} gap="20px">
        {data.map((i) => {
          return (
            <Productonepage
              image={i.image}
              alt={i.id}
              title={i.title}
              price={i.price}
              category={i.category}
              rate={i.rating.rate}
              count={i.rating.count}
              handleClick={() => handleCart(i)}
              key={i.id}
            />
          );
        })}
      </Grid>
      <Footer />
    </div>
  );
}

export default Productpage;
