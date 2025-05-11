import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import LazyWrapper from "./Components/LazyWrapper";


const Gallery = React.lazy(() => import("./Components/Gallery"));
const ImageSlider = React.lazy(() => import("./Components/ImageSlider"));
const VideoGallery = React.lazy(() => import("./Components/VideoGallery"));
const ContactSection = React.lazy(() => import("./Components/ContactSection"));
const Thoughts = React.lazy(() => import("./Components/Thoughts"));
const Footer = React.lazy(() => import("./Components/Footer"));
// const Videos = React.lazy(() => import("./components/Videos"));
// const Celebrations = React.lazy(() => import("./components/Celebrations"));
// const FriendsList = React.lazy(() => import("./components/FriendsList"));
// const Contact = React.lazy(() => import("./components/Contact"));
// const Footer = React.lazy(() => import("./components/Footer"));

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <React.Suspense fallback={<div className="text-center py-8">Loading...</div>}>
        <LazyWrapper><Gallery /></LazyWrapper>
        <LazyWrapper><ImageSlider /></LazyWrapper>
        <LazyWrapper><VideoGallery /></LazyWrapper>
        <LazyWrapper><Thoughts /></LazyWrapper>
        <LazyWrapper><ContactSection /></LazyWrapper>
        <LazyWrapper><Footer /></LazyWrapper>
        {/* <LazyWrapper><Videos /></LazyWrapper>
        <LazyWrapper><Celebrations /></LazyWrapper>
        <LazyWrapper><FriendsList /></LazyWrapper>
        <LazyWrapper><Contact /></LazyWrapper>
        <LazyWrapper><Footer /></LazyWrapper> */}
      </React.Suspense>
    </>
  );
}

export default App;
