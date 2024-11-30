import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData =[
    {
        imgUrl: weatherImg,
        title: "Calculate Weather",
        desc: "Plan your adventure with real-time weather updates.",
    },
    {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc: "Our tour guides turn every journey into a memorable story.",
    },
    {
        imgUrl: customizationImg,
        title: "Customization",
        desc: "We customize every detail to make your journey unforgettable.",
    },

];

const ServiceList = () => {
  return (
    <>
    {servicesData.map((item, index) => (
        <Col lg="3" md="6" sm="12" className="mb-4" key={index}>
            <ServiceCard item={item} />
        </Col>
    ))}
    </>
  );
};

export default ServiceList;
